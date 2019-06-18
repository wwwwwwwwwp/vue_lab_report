<template>
  <div class="fullMain">
    <x-header
      class="custumHeader"
      :left-options="{backText: '',showBack: false}">
      <a slot="left">
        <i slot="overwrite-left" class="lIcon">X</i>
      </a>
      <span>我的分组</span>
      <a slot="right">
        <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
      </a>
    </x-header>
    <div class="mainbBg" >
      <div class="menuHeader">
        <i class="fa fa-chevron-left mT returnIcon" @click="back"></i>
        <span class="ids">
          姓名：老板
        </span>
      </div>
      <div class="groupDiv">
        <input placeholder="搜索" :show-clear="false">
        <div class="groupD">
            <i class="fa fa-users"></i>
            <span @click="createGroup">创建分组</span><br>
            <i class="fa fa-users"></i>
            <span @click="joinGroup">加入分组</span>
        </div>
        <div class="groupDetail">
            <i class="fa fa-users"></i>
            <span>2017级</span>
            <button type="button" class="affirmBtn affirmBtn_search fr searchbtn" @click="ckDetail">查看</button>
        </div>
        <div class="groupDetail">
            <i class="fa fa-users"></i>
            <span>2018级</span>
            <button type="button" class="affirmBtn affirmBtn_search fr searchbtn" @click="ckDetail">查看</button>
        </div>

      </div>       
    </div>
 </div>
</template>

<script>
  import { XHeader } from 'vux'
  import { XInput } from 'vux'
  import { PopupPicker} from 'vux'

  export default {
    name: "T-group",
    data(){
      return{
        ssTitle: '',
        ssValue:[],
        tjP:"搜索",
      }
    },
    components:{
      XHeader,
      XInput,
      PopupPicker
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
      createGroup(){

      },
      joinGroup(){

      },
      ckDetail(){
        this.$router.push({name: 'T-group-detail'});
      },
    }
    
  }
</script>