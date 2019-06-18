<template>
  <div class="fullMain">
    <x-header
      class="custumHeader"
      :left-options="{backText: '',showBack: false}">
      <a slot="left">
        <i slot="overwrite-left" class="lIcon">X</i>
      </a>
      <span>2017级-设置</span>
      <a slot="right">
        <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
      </a>
    <!--插入添加成员的弹窗-->
    <AddUser :isShowPlus.sync="isShowPlus"></AddUser>
    <!--插入移除成员的弹窗-->
    <DeleteUser :isShowDelete.sync="isShowDelete"></DeleteUser>
    <!--插入修改分组名的弹窗-->
    <ModifyGroupName :isShowModify.sync="isShowModify"></ModifyGroupName>
    </x-header>
    <div class="mainbBg" >
      <div class="menuHeader">
        <i class="fa fa-chevron-left mT returnIcon" @click="back"></i>
        <span class="ids">
          姓名：老板
        </span>
      </div>
      <div class="userList">
        创建人：老板<br>
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
      </div><br><br><br><br><br><br><br><br><br><br><br><br>

      <div class="groupDiv">
        <div class="groupS">
          <i class="fa fa-users"></i>
          分组名
          <span class="groupInf">{{groupName}}
            <i class="fa fa-pencil" @click="modifyGroupName"></i>  
          </span><br>
        </div>
        <div class="groupS">
          <i class="fa fa-users"></i>
          分组ID
          <span class="groupInf">{{groupID}}</span>
        </div>
      </div>
      <div class="exitGroup">解散分组</div>
    </div>  
 </div>
</template>

<script>
  import { XHeader } from 'vux'
  import { XInput } from 'vux'
  import { PopupPicker} from 'vux'
  import AddUser from '../components/Popup/AddUser/AddUser.vue'
  import DeleteUser from '../components/Popup/DeleteUser/DeleteUser.vue'
  import ModifyGroupName from '../components/Popup/ModifyGroupName/ModifyGroupName.vue'
  export default {
    name: "T-group-setting",
    data(){
      return{
        groupName:"2017级",
        groupID:666666,
        isShowPlus: false,
        isShowDelete: false,
        isShowModify:false,
      }
    },
    components:{
      XHeader,
      XInput,
      PopupPicker,
      AddUser,
      DeleteUser,
      ModifyGroupName
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
      modifyGroupName(){
        this.isShowModify=true;
      },
      
    }
    
  }
</script>