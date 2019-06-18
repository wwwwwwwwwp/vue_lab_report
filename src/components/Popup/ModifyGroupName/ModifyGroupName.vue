<!--时钟图标的弹窗组件-->
<template>
 <!--弹窗最外层的容器-->
 <div v-show="isShowModify" id="modifyGroupName" 
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
   <div class="modifyGroupName_content" 
    style="
    width: 100%;
    height: 100%;
    background: rgb(255,255,255,0.8);
    border-radius: 20px;
    margin: auto;
    position: relative;">
       <!--弹窗头部-->
       <div class="modifyGroupName_title" style="
        padding: 5px;
        text-align:center;
        margin-top: 30%;">
            <div class="modifyGroupName_alter" style="
            height: 25px;
            width: 130px;
            border: 2px #1abc9c solid;
            text-align:center;
            border-radius: 50px;
            padding-bottom: 15px;
            margin-left:35%;
            margin-bottom:20px;
            ">
                请输入新的分组名
            </div>
            <div class="modifyGroupName_alter_input" style="
            margin-left: 5%;
            ">
                <input v-model="groupName" placeholder="输入" style="
                border: 1px #999 solid;
                width: 260px;
                ">
            </div>
        </div>
       
         <div class="clock_btn" style="
         display: inline;
         position: absolute;
         left: 20%;
         bottom: 55%;
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
            修改
            </button>
            
         </div>
   </div>
 </div>
</template>


<script >
export default {
    props:{
        isShowModify:{type: Boolean}
    },
    data(){
      return{
        groupName: ""
      }
    },
    methods: {
        searchUser(){

        },
        cancle(){
            this.$emit('update:isShowModify',false)
        },
        alter(){

        }
    }
}
</script>

<!--这里导入样式不知道为啥用不了-->
<style scoped >
    @import '../../../components/Popup/ModifyGroupName/modifyGroupName.css';
    @import '../../../../static/css/custom.css'
</style>
