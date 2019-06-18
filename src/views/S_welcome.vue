<template>
    <div class="fullMain">
         <x-header
            class="custumHeader"
            :left-options="{backText: '',showBack: false}"
            >
            <a slot="left">
                <i slot="overwrite-left" class="lIcon" >X</i>
            </a>
            <span>日报系统</span>
            <a slot="right">
                <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
            </a>
         </x-header>
         <div class="mainbBg">
             <div class="menuHeader">
                <i class="fa fa-chevron-left mT returnIcon" @click="back"></i>
                <span class="ids">
                    姓名：张三
                    <i class="fa fa-user icons"></i>
                </span>
             </div>
             <div class="welcomeDiv">
                <div class="welcomTitle">
                    <i class="fa fa-book"></i>
                    <span>欢迎进入日报系统</span>
                </div>
                <div class="welcomeBtnD">
                    <div class="welcomeBtn" @click="txFun">
                        <div class="fillBtn"><i class="fa fa-paint-brush"></i></div>
                        <span>填写</span>
                    </div>
                    <div class="welcomeBtn" @click="ckFun">
                        <div class="searchBtn"><i class="fa fa-search"></i></div>
                        <span>查看</span>
                    </div>
                     <div class="welcomeBtn" @click="hzFun">
                        <div class="collectBtn"><i class="fa fa-pie-chart"></i></div>
                        <span>汇总</span>
                     </div>
                     <div class="welcomeBtn" @click="fzFun">
                        <div class="groupBtn"><i class="fa fa-users"></i></div>
                        <span>我的分组</span>
                     </div>
                </div>
             </div>
         </div>
    </div>
</template>

<script>
  import { XHeader } from 'vux'
  import { XInput } from 'vux'
  export default {
    name: "S-welcome",
    methods:{
      back(){
         this.$router.go(-1);
      },
      txFun(){
        this.$router.push({name: 'Report2'});
      },
      ckFun(){
        this.$router.push({name: 'S-views'});
      },
      hzFun(){
        this.$router.push({name: 'S-summary-pie'});
      },
      fzFun(){
        this.$router.push({name: 'S-group'});
      },
    },
    components:{
      XHeader,
      XInput
    }
  }
</script>