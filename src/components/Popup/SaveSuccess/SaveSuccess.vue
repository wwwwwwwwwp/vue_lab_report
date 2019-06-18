<!--时钟图标的弹窗组件-->
<template>
 <!--弹窗最外层的容器-->
 <div id="save" 
    style="
    width:100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 200;
    display: flex;">
   <!--弹窗的窗口，遮罩层-->
   <div class="save_content" 
    style="
    width: 140px;
    height: 120px;
    background: rgb(0, 0, 0,0.7);
    border-radius: 20px;
    margin: auto;
    position: relative;">
       <!--弹窗头部-->
       <div class="alert_title" style="
        padding: 5px;
        text-align:center;
        margin-top: 30%;">
            <i class="fa fa-check-circle" style="
                color:white;
                font-size: 50px;
                margin-top: -60%;
                margin-bottom: 10%;"></i>
        </div>
        <div class="alert_body" style="
            text-align:center;
            color:white;" >
            保存成功
        </div>

   </div>
 </div>
</template>


<script >
export default {
    
    methods: {
        
    }
}
</script>

<!--这里导入样式不知道为啥用不了-->
<style scoped >
    @import '../../../components/Popup/SaveSuccess/saveSuccess.css'
</style>
