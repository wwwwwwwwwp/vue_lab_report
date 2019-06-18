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
                    姓名：老板
                    <i class="fa fa-user icons"></i>
                </span>
             </div>
             <div class="welcomeDiv">
                <div class="welcomTitle">
                    <i class="fa fa-book"></i>
                    <span>导师您好，欢迎进入日报系统</span>
                </div>
                <div class="welcomeBtnD">
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
                     <div class="welcomeBtn" @click="tsFun">
                        <div class="fillBtn"><i class="fa fa-cog"></i></div>
                        <span>推送设置</span>
                    </div>
                </div>
             </div>
         </div>
    </div>
</template>

<script>
  import { XHeader } from 'vux'
  export default {
    name: "T-welcome",
    methods:{
      back(){
         this.$router.go(-1);
      },
      ckFun(){
        this.$router.push({name: 'T-views'});
      },
      hzFun(){
        this.$router.push({name: 'T-summary'});
      },
      fzFun(){
        this.$router.push({name: 'T-group'});
      },
      tsFun(){
        this.$router.push({name: 'push'});
      },
    },
    components:{
      XHeader,
    }
  }
</script>