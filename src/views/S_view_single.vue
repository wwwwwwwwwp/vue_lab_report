<template>
  <div class="fullMain">
    <x-header
      class="custumHeader"
      :left-options="{backText: '',showBack: false}">
      <a slot="left">
        <i slot="overwrite-left" class="lIcon">X</i>
      </a>
      <span>日报-单日查看</span>
      <a slot="right">
        <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
      </a>
    </x-header>
    <div class="mainbBg">
      <div class="menuHeader">
        <i class="fa fa-chevron-left mT returnIcon" @click="back"></i>
        <span class="ids">
          姓名：张三
          <i class="fa fa-share-alt icons"></i>
        </span>
      </div>
      <group class="times">
        <calendar :readonly="readonly" v-model="selVal" :title="title" :placeholder="placeholder" @on-show="log('show')" @on-hide="log('hide')"></calendar>
      </group>
      <div class="singleContent">
          <div class="tab">
              <span :class="{singleActived: singleActived == item}" @click="clickActive(item)" v-for="(item,index) in singleData">{{item}}</span>
          </div>
          <div class="content">
              <x-input v-model="sjVal"  title="时间："></x-input>
              <x-textarea v-model="nrVal" placeholder="此处显示所选日期每一项任务的日报情况" title="内容："></x-textarea>
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
  import { Group, Calendar} from 'vux'
  import { XInput,XTextarea } from 'vux'
  export default {
    name: "S_view_single",
    data(){
      return{
        readonly: false,
        selVal:"",
        title:"日期选择：",
        placeholder:"选择日期",
        projectStart:"起",
        projectEnd:"止",
        projectStartVal:"",
        projectEndVal:"",
        singleData:['项目','学习','锻炼','其他'],
        singleActived:"项目",
        sjVal:"",
      }
    },
    methods: {
      back(){
         this.$router.go(-1);
      },
      log (str) {
        console.log(str)
      },
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      clickActive(index){
        this.singleActived = index;
      }
    },
    components:{
      XHeader,
      Group,
      Calendar,
      XInput,
      XTextarea,
    }
  }
</script>