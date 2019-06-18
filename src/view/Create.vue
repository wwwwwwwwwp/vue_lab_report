<template>
    <div class="fullMain">
         <x-header
            class="custumHeader"
            :left-options="{backText: '',showBack: false}"
            >
            <a slot="left">
                <i slot="overwrite-left" class="lIcon" >X</i>
            </a>
            <span>创建</span>
            <a slot="right">
                <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
            </a>
         </x-header>
         <div class="mainbBg">
             <div class="menuHeader">
                <i class="fa fa-chevron-left mT returnIcon" @click="back">
                </i>
             </div>
            <img src="../../static/img/user.png"/>
            <span class="weiName">微信名:*****</span>
            <!--插入创建成功弹窗-->
            <CreatLab v-if="isShow"></CreatLab>
            <div class="formDiv">
                <div class="displayFlex">
                     <i class="fa fa-id-card-o fa-fw"></i>
                     <x-input placeholder="真实姓名" :show-clear="false"></x-input>
                </div>
                <div class="displayFlex">
                    <i class="fa fa-bank fa-fw"></i>
                    <x-input placeholder="学校" :show-clear="false"></x-input>
                </div>
                <div class="displayFlex">
                    <i class="fa fa-mortar-board fa-fw"></i>
                    <x-input placeholder="实验室" :show-clear="false"></x-input>
                </div>
                <div class="displayFlex">
                    <i class="fa fa-phone fa-fw"></i>
                    <x-input placeholder="手机号码" :show-clear="false"></x-input>
                </div>
            </div>
            <div class="saveDiv">
                <button type="button" class="affirmBtn specialBtn" @click="btnFun">创建</button>
            </div>
         </div>
    </div>
</template>

<script>
/* eslint-disable */
import { XHeader, XInput} from 'vux'
import CreatLab from '../components/Popup/CreatLab/CreatLab.vue'

export default {
  name: 'Create',
  data(){
      return{
        isShow:false,
      }
    },
  methods:{
    btnFun(){
          this.isShow=true;
      },
    back(){
          this.$router.go(-1);
    },
  },
  components: {
    XHeader,
    XInput,
    CreatLab
  }
}
</script>