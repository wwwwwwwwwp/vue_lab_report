<template>
  <div class="fullMain">
    <x-header
      class="custumHeader"
      :left-options="{backText: '',showBack: false}">
      <a slot="left">
        <i slot="overwrite-left" class="lIcon">X</i>
      </a>
      <span>日报填写</span>
      <a slot="right">
        <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
      </a>
    </x-header>
    <div class="mainbBg">
      <div class="menuHeader">
        <i class="fa fa-chevron-left mT returnIcon" @click="back"></i>
        <span class="ids">
          姓名：张三
        </span>
      </div>
      <scroller lock-x scrollbar-y height="calc(100% - 60px)">
          <div class="reportDiv">
               <group>
                   <calendar class="times" :readonly="readonly"  v-model="date" :title="title" :placeholder="placeholder" @on-show="log('show')" @on-hide="log('hide')"></calendar>
               </group>
               <div class="cellDiv">
                   <button type="button" class="affirmBtn affirmBtn_small groupBBtn reportBtn" style="margin-right: 10px;">项目</button>
                   <button type="button" class="affirmBtn affirmBtn_small groupBBtn reportBtn customBtn" style="margin-right: 10px;">学习</button>
                   <button type="button" class="affirmBtn affirmBtn_small groupBBtn reportBtn customBtn" style="margin-right: 10px;">锻炼</button>
                   <button type="button" class="affirmBtn affirmBtn_small groupBBtn reportBtn customBtn" style="margin-right: 10px;">其他</button>
                   <i class="fa fa-clock-o"  @click="showClockPopup"></i>
               </div>
                <!--插入弹窗组件-->
               <ClockPopup :isShowClock.sync="isShowClock"></ClockPopup>

               <div class="msgContent">
                   <div class="msgBox">
                       <div class="timeDiv">
                           <span> 时间：</span>
                           <div class="time">
                           <datetime
                                v-model="start_time"
                                format="HH:mm"
                                @on-change="change"
                                :title="projectStart"
                                @on-cancel="log('cancel')"
                                @on-confirm="onConfirm"
                                @on-hide="log('hide', $event)"></datetime>
                            <span>至</span>
                            <datetime
                                v-model="end_time"
                                format="HH:mm"
                                @on-change="change"
                                :title="projectEnd"
                                @on-cancel="log('cancel')"
                                @on-confirm="onConfirm"
                                @on-hide="log('hide', $event)"></datetime>
                           </div>
                        </div>
                        <div class="customDiv">
                            <x-input :show-clear="false" v-model="ztVal" title="主题："></x-input>
                        </div>
                        <div class="customDiv">
                            <x-input :show-clear="false" v-model="ddVal" title="地点："></x-input>
                        </div>
                        <div class="customDiv">
                            <x-textarea v-model="activities" placeholder="点击输入内容" title="内容："></x-textarea>
                        </div>
                    </div>
               </div>
               <i class="fa fa-plus-circle plus" style="font-size:50px;" @click="plusRep"></i>
               <div class="displayFlex" style="margin-top:-30px;padding: 50px">
                    <button type="button" class="affirmBtn specialBtn" style="margin-right: 40px;">暂存</button>
                    <button type="button" class="affirmBtn specialBtn">提交</button>
                </div>
                <div style="margin-bottom: 60px;"></div>
          </div>
      </scroller>
    </div>
  </div>
</template>

<script>
    import { XHeader } from 'vux'
    import { Scroller } from 'vux'
    import { Group, Calendar,Datetime} from 'vux'
    import { XInput,XTextarea } from 'vux'
    import  ClockPopup  from '../components/Popup/Clock/Clock.vue'
    export default {
        name: "Report2",
        data(){
            return{
                readonly: false,
                date:"",
                title:"日期选择：",
                placeholder:"选择日期",
                projectStart:"起",
                projectEnd:"止",
                start_time:"",
                end_time:"",
                ztVal:"",
                ddVal:"",
                activities: "",
                isShowClock: false,

            }
        },
        components:{
            XHeader,
            Scroller,
            Group,
            Calendar,
            Datetime,
            XInput,
            XTextarea,
            ClockPopup,
        },
        methods: {
            back(){
                this.$router.go(-1);
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
            onChange (val) {
                console.log('on change', val)
            },
            change (value) {
                console.log('change', value)
            },
            onConfirm (val) {
                console.log('on-confirm arg', val)
                console.log('current value', this.value1)
            },
            setToday (value) {
                let now = new Date()
                let cmonth = now.getMonth() + 1
                let day = now.getDate()
                if (cmonth < 10) cmonth = '0' + cmonth
                if (day < 10) day = '0' + day
                this.value7 = now.getFullYear() + '-' + cmonth + '-' + day
                console.log('set today ok')
            },
            
            showClockPopup(){
                this.isShowClock=true;
            },
            plusRep(){

            },
        }
    }
</script>
