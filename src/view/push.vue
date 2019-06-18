<template>
  <div class="fullMain">
    <!--插入添加成员的弹窗-->
    <AddUser :isShowPlus.sync="isShowPlus"></AddUser>
    <!--插入移除成员的弹窗-->
    <DeleteUser :isShowDelete.sync="isShowDelete"></DeleteUser>
    <x-header
      class="custumHeader"
      :left-options="{backText: '',showBack: false}">
      <a slot="left">
        <i slot="overwrite-left" class="lIcon">X</i>
      </a>
      <span>我的分组</span>
      <a slot="right">
        <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
      </a>
    </x-header>
    <div class="mainbBg" >
      <div class="menuHeader">
        <i class="fa fa-chevron-left mT returnIcon" @click="back"></i>
        <span class="ids">
          姓名：老板
        </span>
      </div>
      <div class="pushChoose">
          请选择日报推送对象
      </div>
      <div class="userInf">
        <img src="../../static/img/user.png"/><br>
        老板
      </div>
      <div class="userInf">
        <img src="../../static/img/user.png"/><br>
        老板
      </div>
      <div class="userInf">
        <img src="../../static/img/user.png"/><br>
        老板
      </div>
      <div class="userInf">
        <img src="../../static/img/plus.jpg" @click="plusUser"/><br>
      </div>
      <div class="userInf">
        <img src="../../static/img/delete.png" @click="deleteUser"/><br>
      </div>
      <div class="saveDiv">
        <button type="button" class="affirmBtn specialBtn saveButton" @click="s_Fun">保存</button>
      </div>
    </div>
 </div>
</template>

<script>
  import { XHeader } from 'vux'
  import { XInput } from 'vux'
  import { PopupPicker} from 'vux'
  import AddUser from '../components/Popup/AddUser/AddUser.vue'
  import DeleteUser from '../components/Popup/DeleteUser/DeleteUser.vue'

  export default {
    name: "T-group-detail",
    data(){
      return{
        isShowPlus: false,
        isShowDelete: false,
      }
    },
    components:{
      XHeader,
      XInput,
      PopupPicker,
      AddUser,
      DeleteUser
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
      plusUser(){
        this.isShowPlus=true;
      },
      deleteUser(){
        this.isShowDelete=true;
      },
      s_Fun(){
        this.$router.push({name: 'T-welcome'});
      },
    }
    
  }
</script>