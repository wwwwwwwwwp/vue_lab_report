<!--时钟图标的弹窗组件-->
<template>
 <!--弹窗最外层的容器-->
 <div v-show="isShowMessage" id="sendMessage" 
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
   <div class="sendMessage_content" 
    style="
    width: 100%;
    height: 100%;
    background: rgb(255,255,255,0.7);
    border-radius: 20px;
    margin: auto;
    position: relative;">
        <!--插入编辑消息弹窗-->
        <EditMessage :isShowEdit.sync="isShowEdit"></EditMessage>
       <!--弹窗头部-->
       <div class="sendMessage_title" style="
        margin-bottom: 60px;
        ">
           <i class="lIcon" @click="back"  style="
            font-style: initial;
            font-size: 19px;
            font-weight: 600;
            position: absolute;
            left: 20px;
            " >X</i>
            <div style="
            font-size:17px;
            padding-left: 35px;
            ">发送消息</div>
        </div>
        <div class="sendMessage_body">
            <div style="
            color: #ccc;
            text-align:center;
            font-size: 12px;
            margin-bottom: 50px;
            ">2018-08-07 星期二</div>

            <div style="
            font-size: 12px;
            text-align:center;
            margin-bottom: 50px;
            ">To：张三</div>
        </div>
       
         <div class="sendMessage_btn" style="
         display: inline;
         position: absolute;
         left: 35%;
         top: 250px;
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
            @click="editMessage">
            创建消息
            </button>
            
            
         </div>
   </div>
 </div>
</template>


<script >
import EditMessage from './EditMessage.vue'
export default {
  props:{
        isShowMessage:{type: Boolean}
    },
  data(){
    return{
      userID: "",
      isShowEdit: false,
    }
  },
  components:{
    EditMessage,
  },
  methods: {
      searchUser(){
        this.$emit('update:isShowMessage',false)
      },
      back(){
        this.$emit('update:isShowMessage',false)
      },
      editMessage(){
          this.isShowEdit=true;
      },
      
  }
}
</script>

<!--这里导入样式不知道为啥用不了-->
<style scoped >
   
</style>
