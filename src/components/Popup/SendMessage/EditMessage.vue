<!--时钟图标的弹窗组件-->
<template>
 <!--弹窗最外层的容器-->
 <div v-show="isShowEdit" id="sendMessage" 
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
       <!--弹窗头部-->
       <div class="sendMessage_title" style="
        
        margin-bottom: 60px;
        ">
           <i class="lIcon" @click="close" style="
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
            <textarea placeholder="创建消息给张三" style="
            height:100px;
            width:300px;
            border: 1px #313035 solid;
            "></textarea>
        </div>
       
         
        <div class="clock_btn" style="
         display: inline;
         position: absolute;
         left: 15%;
         bottom: 65%;
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
            @click="affirm">
            确认
            </button>
            
            
         </div>
   </div>
 </div>
</template>


<script >
export default {
    props:{
        isShowEdit:{type: Boolean}
    },
    data(){
      return{
      }
    },
    methods: {
        close(){
            
        },
        cancle(){
            this.$emit('update:isShowEdit',false)
        },
        affirm(){
            this.$emit('update:isShowEdit',false)
        }
    }
}
</script>

<!--这里导入样式不知道为啥用不了-->
<style scoped >
   
</style>
