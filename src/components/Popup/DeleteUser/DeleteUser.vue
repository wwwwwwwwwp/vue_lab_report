<!--时钟图标的弹窗组件-->
<template>
 <!--弹窗最外层的容器-->
 <div v-show="isShowDelete" id="deleteUser" 
    style="
    width:100%;
    height: 100%;
    margin-top: 50px;
    background: rgb(255,255,255,0.8);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 200;
    display: flex;">
   <!--弹窗的窗口，遮罩层-->
   <div class="deleteUser_content" 
    style="
    width: 100%;
    height: 100%;
    background: rgb(255,255,255,0.8);
    border-radius: 20px;
    margin: auto;
    position: relative;">
       <!--弹窗头部-->
       <div class="deleteUser_title" style="
        padding: 5px;
        text-align:center;
        margin-top: 30%;">
            <div class="deleteUser_alter" style="
            height: 25px;
            width: 130px;
            border: 2px #1abc9c solid;
            text-align:center;
            border-radius: 50px;
            padding-bottom: 15px;
            margin-left:35%;
            margin-bottom:20px;
            ">
                请修改成员
            </div>
            <div class="userList" style="
            display:inline;
            height:100%;">
                <div class="userInf" style="
                height:70px;
                width:50px;
                text-align: right;
                display:inline;
                float:left;
                margin:13px;">
                    <img src="static/img/user.png" style="margin-bottom:-1px;"/><br>
                    张三
                </div>
                <div class="userInf" style="
                height:70px;
                width:50px;
                text-align: right;
                display:inline;
                float:left;
                margin:13px;">
                    <img src="static/img/user.png" style="margin-bottom:-1px;"/><br>
                    张三
                </div>
                <div class="userInf" style="
                height:70px;
                width:50px;
                text-align: right;
                display:inline;
                float:left;
                margin:13px;">
                    <img src="static/img/user.png" style="margin-bottom:-1px;"/><br>
                    张三
                </div>
                <div class="userInf" style="
                height:70px;
                width:50px;
                text-align: right;
                display:inline;
                float:left;
                margin:13px;">
                    <img src="static/img/user.png" style="margin-bottom:-1px;"/><br>
                    张三
                </div>
                <div class="userInf" style="
                height:70px;
                width:50px;
                text-align: right;
                display:inline;
                float:left;
                margin:13px;">
                    <img src="static/img/user.png" style="margin-bottom:-1px;"/><br>
                    张三
                </div>
                <div class="userInf" style="
                height:70px;
                width:50px;
                text-align: right;
                display:inline;
                float:left;
                margin:13px;">
                    <img src="static/img/user.png" style="margin-bottom:-1px;"/><br>
                    张三
                </div>
            </div>
        </div>
       
         <div class="clock_btn" style="
         display: inline;
         position: absolute;
         left: 15%;
         bottom: 35%;
         ">
           <button style="
            width: 120px;
            height: 25px;
            border: none;
            color: white;
            background: #1abc9c;
            text-align: center;
            outline: none;
            border-radius: 5px;
            margin-right: 15px;
            "
            @click="cancle">
            取消
            </button>
            <button style="
            width: 120px;
            height: 25px;
            border: none;
            color: white;
            background: #1abc9c;
            text-align: center;
            outline: none;
            border-radius: 5px;
            margin-left: 15px;
            "
            @click="alter">
            确认修改
            </button>
            
         </div>
   </div>
 </div>
</template>


<script >
export default {
    props:{
        isShowDelete:{type: Boolean}
    },
    data(){
      return{
        userID: ""
      }
    },
    methods: {
        searchUser(){

        },
        cancle(){
            this.$emit('update:isShowDelete',false)
        },
        alter(){

        }
    }
}
</script>

<!--这里导入样式不知道为啥用不了-->
<style scoped >
    @import '../../../components/Popup/AddUser/addUser.css';
    @import '../../../../static/css/custom.css'
</style>
