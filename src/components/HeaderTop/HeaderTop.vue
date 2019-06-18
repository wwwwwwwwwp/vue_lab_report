<!--抽取顶部相同的组件-->
<template>
    <x-header
        class="custumHeader"
        :left-options="{backText: '',showBack: false}"
        >
        <a slot="left">
            <i slot="overwrite-left" class="lIcon" >X</i>
        </a>
        <span>{{title}}</span>
        <a slot="right">
            <x-icon slot="overwrite-right" type="ios-more" size="35" style="position:relative;top:-8px;left:-3px;"></x-icon>
        </a>
        <div class="menuHeader">
            <i class="fa fa-chevron-left mT returnIcon" @click="back">
            </i>
            <span class="ids">姓名：张三</span>
        </div>
    </x-header>
</template>

<script>
    export default {
        //接受属性需要声明，title接受string类型的值
        props:{
            title: String
      }
    }
</script>
