<template>
    <div class="fullMain">
      <x-header
        class="custumHeader"
        :left-options="{backText: '',showBack: false}"
        >
        <a slot="left">
            <i slot="overwrite-left" class="lIcon" >X</i>
        </a>
        <span>个人中心</span>
        <a slot="right">
            <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
        </a>
      </x-header>
      <div class="mainbBg">
        <div class="menuHeader">
          <i class="fa fa-chevron-left mT returnIcon" @click="back"></i>
          <span class="ids">姓名：张三</span>
        </div>
        <img src="../../static/img/user.png"/>
        <span class="names" >张三</span>
        <div class="saveDiv">
          <button type="button" class="affirmBtn specialBtn mB" @click="rbFun">
            <i class="fa fa-book fa-fw"></i>
            <span>日报系统</span>
          </button>
          <button type="button" class="affirmBtn specialBtn mB" @click="xmFun">
            <i class="fa fa-list-alt fa-fw"></i>
            <span>项目管理系统</span>
          </button>
          <button type="button" class="affirmBtn specialBtn mB" @click="grFun">
            <i class="fa fa-cog fa-fw"></i>
            <span>个人设置</span>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
  import { XHeader } from 'vux'
  import { XInput } from 'vux'
  export default {
    name: "S-personalcenter",
    methods:{
      back(){
         this.$router.go(-1);
      },
      rbFun(){
        this.$router.push({name: 'S-welcome'});
      },
    },
    components:{
      XHeader,
      XInput
    }
  }
</script>