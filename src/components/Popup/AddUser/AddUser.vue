<!--时钟图标的弹窗组件-->
<template>
 <!--弹窗最外层的容器-->
 <div v-show="isShowPlus" id="adduser" 
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
   <div class="adduser_content" 
    style="
    width: 100%;
    height: 100%;
    background: rgb(255,255,255,0.8);
    border-radius: 20px;
    margin: auto;
    position: relative;">
       <!--弹窗头部-->
       <div class="adduser_title" style="
        padding: 5px;
        text-align:center;
        margin-top: 30%;">
            <div class="adduser_search" style="
            height: 25px;
            width: 130px;
            border: 2px #1abc9c solid;
            text-align:center;
            border-radius: 50px;
            padding-bottom: 10px;
            margin-left:35%;
            margin-bottom:20px;
            ">
                请输入对方ID
            </div>
            <div class="adduser_search_input" style="
            margin-left: 10%;
            ">
                <input v-model="userID" placeholder="例：12345" style="
                border: 1px #999 solid;
                width: 230px;
                ">
                <i class="fa fa-search" @click="searchUser" style="font-size:20px;"></i>
            </div>
            
            <div class="adduser_result" style="
            height: 25px;
            width: 100px;
            border: 2px #1abc9c solid;
            text-align:center;
            border-radius: 50px;
            padding-bottom: 10px;
            margin-left:37%;
            margin-top:20px;
            ">
                搜索结果
            </div>
            <div class="userInf" style="margin-left:39%;">
                <img src="static/img/user.png" style="margin-bottom:-1px;"/><br>
                张三
            </div>

        </div>
       
         <div class="clock_btn" style="
         display: inline;
         position: absolute;
         left: 15%;
         bottom: 25%;
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
            @click="invite">
            邀请加入
            </button>
            
         </div>
   </div>
 </div>
</template>


<script >
export default {
    props:{
        isShowPlus:{type: Boolean}
    },
    data(){
      return{
        userID: "",
      }
    },
    methods: {
        searchUser(){

        },
        cancle(){
            this.$emit('update:isShowPlus',false)
        },
        invite(){

        }
    }
}
</script>

<!--这里导入样式不知道为啥用不了-->
<style scoped >
    @import '../../../components/Popup/AddUser/addUser.css'
</style>
