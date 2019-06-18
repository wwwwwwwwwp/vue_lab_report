/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

//路由组件需要import，一般组件配在routes
//声明使用插件
Vue.use(Router)

export default new Router({
  mode:'history',
  //配置所有路由
  routes: [
    {
      path: '/SendMessage',
      name: 'SendMessage',
      component: (resolve) => require(['../components/Popup/SendMessage/SendMessage.vue'], resolve)
    },
    {
      path: '/',
      name: 'Authorization',
      component: (resolve) => require(['../view/Authorization.vue'], resolve)
    },
    {
      path: '/mainView',
      name: 'MainView' ,
      //可以给路由设置属性，这里为了区分是否requiresAuth
      meta: {
        requiresAuth: true
      },
      component: (resolve) => require(['../view/MainView.vue'], resolve),
      children:[
        {
          path: "/create",
          name: "Create",
          meta: {
            requiresAuth: true
          },
          component: (resolve) => require(['../view/Create.vue'],resolve)
        },
        {
          path: "/T-personalcenter",
          name: "T-personalcenter",
          meta: {
            requiresAuth: true
          },
          component: (resolve) => require(['../view/T_personalcenter.vue'],resolve)
        },
        {
          path: "/T-welcome",
          name: "T-welcome",
          meta: {
            requiresAuth: true
          },
          component: (resolve) => require(['../view/T_welcome.vue'],resolve)
        },
        {
          path: "/T-projectMain",
          name: "T-projectMain",
          meta: {
            requiresAuth: true
          },
          component: (resolve) => require(['../view/T-projectMain.vue'],resolve)
        },
        {
          path: "/T-views",
          name: "T-views",
          component: (resolve) => require(['../view/T_view.vue'],resolve)
        },
        {
          path: "/T-views-single",
          name: "T-views-single",
          component: (resolve) => require(['../view/T_view_single.vue'],resolve)
        },
        {
          path: "/T-views-select",
          name: "T-views-select",
          component: (resolve) => require(['../view/T_view_select.vue'],resolve)
        },
        {
          path: "/T-summary",
          name: "T-summary",
          component: (resolve) => require(['../view/T_summary.vue'],resolve)
        },
        {
          path: "/T-summary-pie",
          name: "T-summary-pie",
          component: (resolve) => require(['../view/T_summary_pie.vue'],resolve)
        },
        {
          path: "/T-summary-line",
          name: "T-summary-line",
          component: (resolve) => require(['../view/T_summary_line.vue'],resolve)
        },
        {
          path: "/T-group",
          name: "T-group",
          component: (resolve) => require(['../view/T_group.vue'],resolve)
        },
        {
          path: "/T-group-detail",
          name: "T-group-detail",
          component: (resolve) => require(['../view/T_group_detail.vue'],resolve)
        },
        {
          path: "/T-group-setting",
          name: "T-group-setting",
          component: (resolve) => require(['../view/T_group_setting.vue'],resolve)
        },
        {
          path: "/push",
          name: "push",
          component: (resolve) => require(['../view/push.vue'],resolve)
        },
        
        
        {
          path: "/Tag",
          name: "Tag",
          meta: {
            requiresAuth: true
          },
          component: (resolve) => require(['../views/Tag.vue'],resolve)
        },
        {
          path: "/S-personalcenter",
          name: "S-personalcenter",
          component: (resolve) => require(['../views/S_personalcenter.vue'],resolve)
        },
        {
          path: "/S-views-single",
          name: "S-views-single",
          component: (resolve) => require(['../views/S_view_single.vue'],resolve)
        },{
          path: "/S-views-all",
          name: "S-views-all",
          component: (resolve) => require(['../views/S_view_all.vue'],resolve)
        },{
          path: "/S-views-select",
          name: "S-views-select",
          component: (resolve) => require(['../views/S_view_select.vue'],resolve)
        },
        {
          path: "/S-welcome",
          name: "S-welcome",
          component: (resolve) => require(['../views/S_welcome.vue'],resolve)
        },
        {
          path: "/Report2",
          name: "Report2",
          component: (resolve) => require(['../views/Report2.vue'],resolve)
        },
        {
          path: "/S-views",
          name: "S-views",
          component: (resolve) => require(['../views/S_view.vue'],resolve)
        },
        {
          path: "/S-summary-pie",
          name: "S-summary-pie",
          component: (resolve) => require(['../views/S_summary_pie.vue'],resolve)
        },
        {
          path: "/S-summary-line",
          name: "S-summary-line",
          component: (resolve) => require(['../views/S_summary_line.vue'],resolve)
        },
        {
          path: "/S-group",
          name: "S-group",
          component: (resolve) => require(['../views/S_group.vue'],resolve)
        },
        {
          path: "/S-group-detail",
          name: "S-group-detail",
          component: (resolve) => require(['../views/S_group_detail.vue'],resolve)
        },
        {
          path: "/S-group-setting",
          name: "S-group-setting",
          component: (resolve) => require(['../views/S_group_setting.vue'],resolve)
        },
      ]
    }
  ]
})
