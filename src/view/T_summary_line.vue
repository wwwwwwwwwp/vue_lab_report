<template>
  <div class="fullMain">
    <x-header
      class="custumHeader"
      :left-options="{backText: '',showBack: false}">
      <a slot="left">
        <i slot="overwrite-left" class="lIcon">X</i>
      </a>
      <span>日报-阶段明细</span>
      <a slot="right">
        <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
      </a>
    </x-header>
    <div class="mainbBg">
      <div class="menuHeader">
        <i class="fa fa-chevron-left mT returnIcon" @click="back"></i>
        <span class="ids">
          姓名：老板
          <i class="fa fa-comments-o icons" style="font-size:25px" @click="creatChat"></i>
          <i class="fa fa-share-alt icons" style="font-size:25px" @click="share"></i>
        </span>
      </div>
      <div class="cellDiv">
        <button type="button" class="affirmBtn affirmBtn_small groupBBtn reportBtn" style="margin-right: 10px;">项目</button>
        <button type="button" class="affirmBtn affirmBtn_small groupBBtn reportBtn customBtn" style="margin-right: 10px;">学习</button>
        <button type="button" class="affirmBtn affirmBtn_small groupBBtn reportBtn customBtn" style="margin-right: 10px;">锻炼</button>
        <button type="button" class="affirmBtn affirmBtn_small groupBBtn reportBtn customBtn" style="margin-right: 10px;">其他</button>
      </div>
      <div class="charts">
        <!--柱状图-->
        <div id="barGraph" style="height: 300px;"></div>
        <!--折线图-->
        <div id="lineGraph" style="height: 300px;"></div>
      </div>
    </div>
 </div>
</template>



<script>
  import { XHeader } from 'vux'
  import { XInput } from 'vux'
  import { PopupPicker} from 'vux'
  //引入图表的模板
  // 引入基本模板,按需加载
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图
  require('echarts/lib/chart/bar');

  export default {
    name: "T-summary-line",
    data(){
      return{
      }
    },
    mounted(){
      this.drawBar();
      this.drawLine();
    },
    components:{
      XHeader,
      XInput,
      PopupPicker
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
      drawBar(){
        // 基于dom，初始化echarts实例
        let barGraph = echarts.init(document.getElementById('lineGraph'));
        // 绘制图表
        barGraph.setOption({
        tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
        },
        
        xAxis: {
        type: 'category',
        name: '日期',
        splitLine: {show: false},
        data: ['9月1日', '9月2日', '9月3日', '9月4日', '9月5日', '9月6日', '9月7日']
        },
        grid: {
        left: '5%',
        right: '15%',
        bottom: '8%',
        containLabel: true
        },
        yAxis: {
        type: 'category',
        name: '时间(h)',
        splitLine: {show: true},
        data:['0','0.5','1','1.5','2','2.5','3','3.5','4','4.5','5']
        },
        series: [
        {
        name: '项目',
        type: 'bar',
        data: [4.3, 2.5, 3.5, 4.5, 2.8, 3.2, 4.6]
        },
        
        ]
        })
        },
      
      drawLine(){
        // 基于dom，初始化echarts实例
        let barGraph = echarts.init(document.getElementById('barGraph'));
        // 绘制图表
        barGraph.setOption({
        tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
        },
        
        xAxis: {
        type: 'category',
        name: '日期',
        splitLine: {show: false},
        data: ['9月1日', '9月2日', '9月3日', '9月4日', '9月5日', '9月6日', '9月7日']
        },
        grid: {
        left: '5%',
        right: '15%',
        bottom: '8%',
        containLabel: true
        },
        yAxis: {
        type: 'category',
        name: '时间(h)',
        splitLine: {show: true},
        data:['0','0.5','1','1.5','2','2.5','3','3.5','4','4.5','5']
        },
        series: [
        {
        name: '项目',
        type: 'line',
        data: [4.3, 2.5, 3.5, 4.5, 2.8, 3.2, 4.6]
        },
        
        ]
        })
        },
    }
    
  }
</script>