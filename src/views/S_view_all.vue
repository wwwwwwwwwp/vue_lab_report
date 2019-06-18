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
      <scroller lock-x scrollbar-y height="calc(100% - 60px)">
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
          </div>
      </scroller>
    </div>
   </div>
</template>

<script>
  import { XHeader } from 'vux'
  import { XInput } from 'vux'
  import { Scroller } from 'vux'
  export default {
    name: "S_view_all",
    methods:{
      back(){
         this.$router.go(-1);
      },
    },
    components:{
      XHeader,
      XInput,
      Scroller
    }
  }
</script>