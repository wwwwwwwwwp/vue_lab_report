<template>
  <div class="fullMain">
    <x-header
      class="custumHeader"
      :left-options="{backText: '',showBack: false}">
      <a slot="left">
        <i slot="overwrite-left" class="lIcon">X</i>
      </a>
      <span>日报-条件查看</span>
      <a slot="right">
        <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
      </a>
      <!--插入发送消息弹窗-->
      <SendMessage  :isShowMessage.sync="isShowMessage"></SendMessage>

    </x-header>
    <div class="mainbBg">
      <div class="menuHeader">
        <i class="fa fa-chevron-left mT returnIcon" @click="back"></i>
        <span class="ids">
          姓名：老板
          <i class="fa fa-comments-o icons" style="font-size:25px" @click="creatChat"></i>
          <i class="fa fa-share-alt icons" style="font-size:25px" @click="share"></i>
        </span>
      </div>
      <group >
        <popup-picker :title="tjTitle" :data="tjList" v-model="tjValue" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :placeholder="tjP"></popup-picker>
        <calendar class="times_small" :readonly="readonly" v-model="selVal_start" :title="title_start" :placeholder="placeholder_start" @on-show="log('show')" @on-hide="log('hide')"></calendar>
        <calendar class="times_small" :readonly="readonly" v-model="selVal_end" :title="title_end" :placeholder="placeholder_end" @on-show="log('show')" @on-hide="log('hide')"></calendar>
      </group>
       <div style="display: flow-root;margin-bottom: 20px;">
        <button type="button" class="affirmBtn affirmBtn_small groupBBtn fr sViewbtn" @click="getData">查询</button>
      </div>

      <scroller v-if="isShow" lock-x scrollbar-y height="calc(100% - 240px)" :class="displayNone">
        <div class="groupDiv">
          <div class="chatDiv">
            <div>
              <span class="chatTime">2018-08-02 星期四</span>
              项目：物联网平台<br>
              .....<br>
              学习：论文<br>
              .....<br>
            </div>
          </div>
          <div class="chatDiv">
            <div>
              <span class="chatTime">2018-08-02 星期四</span>
              项目：物联网平台<br>
              .....<br>
              学习：论文<br>
              .....<br>
            </div>
          </div>
          <div class="chatDiv">
            <div>
              <span class="chatTime">2018-08-02 星期四</span>
              项目：物联网平台<br>
              .....<br>
              学习：论文<br>
              .....<br>
            </div>
          </div>
          <div class="chatDiv">
            <div>
              <span class="chatTime">2018-08-02 星期四</span>
              项目：物联网平台<br>
              .....<br>
              学习：论文<br>
              .....<br>
            </div>
          </div>
          <div class="chatDiv">
            <div>
              <span class="chatTime">2018-08-02 星期四</span>
              项目：物联网平台<br>
              .....<br>
              学习：论文<br>
              .....<br>
            </div>
          </div>
          <div class="chatDiv">
            <div>
              <span class="chatTime">2018-08-02 星期四</span>
              项目：物联网平台<br>
              .....<br>
              学习：论文<br>
              .....<br>
            </div>
          </div>
          <div class="chatDiv">
            <div>
              <span class="chatTime">2018-08-02 星期四</span>
              项目：物联网平台<br>
              .....<br>
              学习：论文<br>
              .....<br>
            </div>
          </div>
          <div class="chatDiv">
            <div>
              <span class="chatTime">2018-08-02 星期四</span>
              项目：物联网平台<br>
              .....<br>
              学习：论文<br>
              .....<br>
            </div>
          </div>
          <div class="chatDiv">
            <div>
              <span class="chatTime">2018-08-02 星期四</span>
              项目：物联网平台<br>
              .....<br>
              学习：论文<br>
              .....<br>
            </div>
          </div>
        </div >
      </scroller>
    </div>
   </div>
</template>

<script>
  import { XHeader } from 'vux'
  import { XInput } from 'vux'
  import { Scroller } from 'vux'
  import { Group, Calendar,PopupPicker} from 'vux'
  import SendMessage from '../components/Popup/SendMessage/SendMessage.vue'

  export default {
    name: "T-views-single",
    data(){
      return{
        readonly: false,
        selVal_start:"",
        selVal_end:"",
        title_start:"起始：",
        title_end:"截止：",
        placeholder_start:"选择起始日期",
        placeholder_end:"选择截止日期",
        tjTitle: '学生：',
        tjValue:[],
        tjList: [['张三', '李四', '王五', '钱二', '周六', '周天']],
        tjP:"张三",
        displayNone:"displayNone",
        isShow: false,
        isShowMessage: false,
      }
    },
    components:{
      XHeader,
      XInput,
      Scroller,
      Group,
      Calendar,
      PopupPicker,
      SendMessage
    },
    methods:{
      back(){
         this.$router.go(-1);
      },
      onChange (val) {
        console.log('val change', val)
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
      creatChat(){
          this.isShowMessage=true;
      },
      share(){

      },
      getData(){
        this.isShow=true;
      }
    }
  }
</script>