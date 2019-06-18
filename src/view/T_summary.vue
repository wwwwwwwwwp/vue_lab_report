<template>
  <div class="fullMain">
    <x-header
      class="custumHeader"
      :left-options="{backText: '',showBack: false}">
      <a slot="left">
        <i slot="overwrite-left" class="lIcon">X</i>
      </a>
      <span>日报-汇总</span>
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
                <i class="fa fa-pie-chart"></i>
            </div>
        </div>
            <!--btn-->
        <div class="report2Btn">
            <button type="button" class="affirmBtn specialBtn mB bgBtn" @click="hzFun">
            <span>阶段汇总</span>
            </button>
        </div>
      </div>
      
    

 </div>
</template>



<script>
  import { XHeader } from 'vux'
  import { XInput } from 'vux'
  import { Scroller } from 'vux'
  import { Group, Calendar,PopupPicker} from 'vux'
  

  export default {
    name: "T-summary",
    data(){
      return{
        readonly: false,
        selVal:"",
        title_start:"起始：",
        title_end:"截止：",
        placeholder_start:"选择日期",
        placeholder_end:"选择日期",
      }
    },
    mounted(){
      this.drawPie();
    },
    components:{
      XHeader,
      XInput,
      Scroller,
      Group,
      Calendar,
      PopupPicker
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
      hzFun(){
        this.$router.push({name: 'T-summary-pie'});
      },
    }
  }
</script>