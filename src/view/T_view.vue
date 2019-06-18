<template>
    <div class="fullMain">
         <x-header
            class="custumHeader"
            :left-options="{backText: '',showBack: false}"
            >
            <a slot="left">
                <i slot="overwrite-left" class="lIcon" >X</i>
            </a>
            <span>日报-查看</span>
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
             <!--icon-->
            <div class="iconBox">
                <div class="iconDiv">
                    <i class="fa fa-search"></i>
                </div>
            </div>
             <!--btn-->
            <div class="report2Btn">
                <button type="button" class="affirmBtn specialBtn mB bgBtn" @click="drFun">
                    <span>单人查看</span>
                </button>
                <button type="button" class="affirmBtn specialBtn mB bgBtn" @click="tjFun">
                    <span>条件查看</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
  import { XHeader } from 'vux'
  import { XInput } from 'vux'
  export default {
    name: "T-views",
    components:{
      XHeader,
      XInput
    },
    methods:{
      back(){
         this.$router.go(-1);
      },
      drFun(){
          this.$router.push({name: 'T-views-single'});
      },
      tjFun(){
          this.$router.push({name: 'T-views-select'});
      },
    }
    
  }
</script>