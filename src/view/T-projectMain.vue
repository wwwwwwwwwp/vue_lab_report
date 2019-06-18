<template>
    <div class="fullMain">
         <x-header
            class="custumHeader"
            :left-options="{backText: '',showBack: false}"
            >
            <a slot="left">
                <i slot="overwrite-left" class="lIcon" >X</i>
            </a>
            <span>项目管理系统</span>
            <a slot="right">
                <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
            </a>
         </x-header>
         <div class="mainbBg">
             <div class="menuHeader">
                <i class="fa fa-chevron-left mT returnIcon" @click="back"></i>
                <span class="ids">
                    姓名：老板
                </span>
             </div>
             <div class="welcomeDiv">
                <div class="welcomTitle">
                    <i class="fa fa-newspaper-o"></i>
                    <span>导师您好，欢迎进入项目管理系统</span>
                </div>
                <div class="welcomeBtnD">
                    <div class="welcomeBtn">
                        <div class="collectBtn"><i class="fa fa-folder-open" @click="syFun"></i></div>
                        <span>所有项目</span>
                    </div>
                    <div class="welcomeBtn" @click="ckFun">
                        <div class="searchBtn"><i class="fa fa-search"></i></div>
                        <span>查看成员</span>
                    </div>
                     <div class="welcomeBtn" @click="grFun">
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
  export default {
    name: "T-projectMain",
    methods:{
        back(){
         this.$router.go(-1);
      },
    },
    components:{
      XHeader,
    }
  }
</script>