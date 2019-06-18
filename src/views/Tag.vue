<template>
    <div class="fullMain">
         <x-header
            class="custumHeader"
            :left-options="{backText: '',showBack: false}"
            >
            <a slot="left">
                <i slot="overwrite-left" class="lIcon" >X</i>
            </a>
            <span>设置</span>
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
            <!--插入保存成功的弹框-->
            <SaveSuccess v-if="isShow"></SaveSuccess>

            <div class="formDiv">
                <div class="displayFlex">
                     <i class="fa fa-id-card-o fa-fw"></i>
                     <x-input v-model="name" placeholder="真实姓名" :show-clear="false"></x-input>
                </div>
                <div class="displayFlex">
                    <i class="fa fa-home fa-fw"></i>
                    <x-input v-model="school" placeholder="学校" :show-clear="false"></x-input>
                </div>
                <div class="displayFlex">
                    <i class="fa fa-phone fa-fw"></i>
                    <x-input v-model="phone" placeholder="手机号码" :show-clear="false"></x-input>
                </div>
                <div class="displayFlex">
                    <i class="fa fa-mortar-board fa-fw"></i>
                    <x-input v-model="lab_name" placeholder="实验室名" :show-clear="false"></x-input>
                </div>
            </div>
            <div class="saveDiv">
                <button type="button" class="affirmBtn specialBtn" @click="s_Fun">保存</button>
            </div>
         </div>
    </div>
</template>

<script>
/* eslint-disable */
import { XHeader, XInput} from 'vux'
import SaveSuccess from '../components/Popup/SaveSuccess/SaveSuccess.vue'
export default {
  name: 'Create',
  data(){
    return{
    isShow:false,
    name: "",
    school: "",
    phone: "",
    lab_name: "",
    }
  },
  methods:{
      back(){
          this.$router.go(-1);
      },
      s_Fun(){
        this.isShow=true;
        //显示弹窗两秒后跳转
        setTimeout("window.location.href ='S-personalcenter';", 2000);
      },
  },
  components: {
    XHeader,
    XInput,
    SaveSuccess,
  }
}
</script>