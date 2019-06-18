<template>
  <div class="authDiv">
    <x-header></x-header>
    <img src="../../static/img/headerImg.png"/>
    <div class="authName">实验室管理平台</div>
    <div class="line"></div>
    <flexbox orient="vertical">
      <flexbox-item style="width: 75%;">
        <div class="flex-demo accreditFont">请确认授权以下信息</div>
      </flexbox-item>
       <flexbox-item style="width: 75%;">
        <div class="flex-demo acquireFont">获得你的公开信息(昵称、头像等)</div>
      </flexbox-item>
      <flexbox-item>
         <div class="flex-demo" style="width: 80%;margin: 0 auto;">
            <button type="button" class="affirmBtn" @click="okFun">确认登录-导师</button>
            <div style="height:20px;"></div>
            <button type="button" class="affirmBtn" @click="s_Fun">确认登录-学生</button>
         </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
/* eslint-disable */
import { XHeader, Flexbox, FlexboxItem} from 'vux'
export default {
  name: 'Authorization',
  methods:{
    okFun(){
        this.$router.push({name: 'Create'});
    },
    s_Fun(){
        this.$router.push({name: 'Tag'});
    },
  },
  components: {
    XHeader,
    Flexbox,
    FlexboxItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
