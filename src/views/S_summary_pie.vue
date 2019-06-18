<template>
  <div class="fullMain">
    <x-header
      class="custumHeader"
      :left-options="{backText: '',showBack: false}">
      <a slot="left">
        <i slot="overwrite-left" class="lIcon">X</i>
      </a>
      <span>日报-阶段汇总</span>
      <a slot="right">
        <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
      </a>
    </x-header>
    <div class="mainbBg">
      <div class="menuHeader">
        <i class="fa fa-chevron-left mT returnIcon" @click="back"></i>
        <span class="ids">
          姓名：张三
          <i class="fa fa-share-alt icons"></i>
        </span>
      </div>
      <group >
        <calendar class="times_small" :readonly="readonly" v-model="selVal_start" :title="title_start" :placeholder="placeholder_start" @on-show="log('show')" @on-hide="log('hide')"></calendar>
        <calendar class="times_small" :readonly="readonly" v-model="selVal_end" :title="title_end" :placeholder="placeholder_end" @on-show="log('show')" @on-hide="log('hide')"></calendar>
      </group>
      <div style="display: flow-root;margin-bottom: 20px;">
        <button type="button" class="affirmBtn affirmBtn_small groupBBtn fr sViewbtn" @click="getData">查询</button>
      </div>
      <div  class="charts" style="border:1px solid #C0C0C0">
        <div id="pieGraph" style="height: 300px;"></div>
        <span style="color:#1abc9c;float:right; "  @click="detailFun">查看明细>></span>
      </div>
    </div>
 </div>
</template>



<script>
  import { XHeader } from 'vux'
  import { XInput } from 'vux'
  import { Scroller } from 'vux'
  import { Group, Calendar,PopupPicker} from 'vux'
  //引入图表的模板
  // 引入基本模板,按需加载
  let echarts = require('echarts/lib/echarts');
  // 引入饼状图
  require('echarts/lib/chart/pie');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');

  export default {
    name: "S-summary-pie",
    data(){
      return{
        readonly: false,
        selVal:"",
        title_start:"起始：",
        title_end:"截止：",
        placeholder_start:"选择日期",
        placeholder_end:"选择日期",
        
      }
    },
    mounted(){
      this.drawPie();
    },
    components:{
      XHeader,
      XInput,
      Scroller,
      Group,
      Calendar,
      PopupPicker
    },
    methods:{
      back(){
         this.$router.go(-1);
      },
      onChange (val) {
        console.log('val change', val)
      },

      log (str) {
        console.log(str)
      },
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      detailFun(){
        this.$router.push({name: 'S-summary-line'});
      },
      getData(){
        
      },
      drawPie(){
        let pieGraph = echarts.init(document.getElementById('pieGraph'));
        pieGraph.setOption({
          title : {
            text: '张三该阶段学习情况',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'right',
            bottom: 'center' ,
            data: ['项目','学习','锻炼','其他']
          },
          series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'项目'},
              {value:310, name:'学习'},
              {value:234, name:'锻炼'},
              {value:135, name:'其他'},
          ],
          itemStyle: {
            emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
        ]
        })
      }
      }
      
    
  }
</script>