<!--时钟图标的弹窗组件-->
<template>
 <!--弹窗最外层的容器-->
 <div id="creatLab" 
    style="
    width:100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 200;
    display: flex;">
   <!--弹窗的窗口，遮罩层-->
   <div class="creatLab_content" 
    style="
    width: 300px;
    height: 300px;
    background: #1abc9c;
    border-radius: 10px;
    margin: auto;
    position: relative;">
        <div class="creatLab_body" >
            <div class="creatInf" style="
            color:white;
            font-size:15px;
            font-weight:800;
            padding-left:20px;
            margin-top:60px;
            ">
                实验室名称：四川大学-WSN实验室<br>
                实验室ID：666666<br>
                创建者：老板<br>
            </div>
            <div class="createSuccess" style="
            position:absolute;
            right:10%;
            bottom:20%;
            font-size:20px;
            font-weight:800;
            color:white;
            ">
                创建成功
                <i class="fa fa-check-circle" @click="createSuccess" style="
                    color:white;
                    font-size: 45px;"></i>
            </div>
        </div>

   </div>
 </div>
</template>


<script >
export default {
    
    methods: {
        createSuccess(){
            this.$router.push({name:"T-personalcenter"})
        },

    }
}
</script>

<!--这里导入样式不知道为啥用不了-->
<style scoped >
    
</style>
