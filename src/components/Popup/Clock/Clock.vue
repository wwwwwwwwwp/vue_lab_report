<!--时钟图标的弹窗组件-->
<template>
 <!--弹窗最外层的容器-->
 <div v-show="isShowClock" id="clock" 
    style="
    width:100%;
    height: 100%;
    
    position: fixed;
    left: 0;
    top: 0;
    z-index: 200;
    display: flex;">
   <!--弹窗的窗口，遮罩层-->
   <div class="clock_content" 
    style="
    width: 220px;
    height: 240px;
    background: white;
    border: 4px #1abc9c solid;
    margin: auto;
    position: relative;">
       <!--弹窗头部-->
       <div class="clock_title" 
        style="padding: 5px;">
            <i class="fa fa-clock-o" style="
                color:#1abc9c;
                font-size: 100px;
                margin-left: 28%;
                margin-top: 5%;
                margin-bottom: 10%;"></i>
        </div>
       <!--弹窗内容
       <div class="alert_body" >
        </div>-->

       <!--弹窗里面的按钮-->
       <div class="clock_btn">
           <button style="
            color:white;
            font-size:16px;
            background: #1abc9c;
            border-radius: 20px;
            width: 80%;
            margin-left:10%;
            text-align: center;
            outline: none;"
            @click="suspend">
            暂停
            </button>
            <button style="
            color:white;
            font-size:16px;
            background: #1abc9c;
            border-radius: 20px;
            width: 80%;
            margin-left:10%;
            text-align: center;
            outline: none;"
            @click="cancel">
            取消
            </button>
            <button style="
            color:white;
            font-size:16px;
            background: #1abc9c;
            border-radius: 20px;
            width: 80%;
            margin-left:10%;
            text-align: center;
            outline: none;"
            @click="end">
            结束
            </button>
           
       </div>
   </div>
 </div>
</template>


<script >
export default {
    props:{
        isShowClock:{type: Boolean}
    },
    data(){
        return{
            isShow: true,
        }
    },
    methods: {
        
        suspend(){

        },
        cancel(){
            this.$emit('update:isShowClock',false)
        },
        end(){
            this.$emit('update:isShowClock',false)
        },
    }
}
</script>

<!--这里导入样式不知道为啥用不了-->
<style scoped >
    @import '../../../components/Popup/Clock/clock.css'
</style>
