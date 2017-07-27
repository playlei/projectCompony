import Vue from 'vue'
import Router from 'vue-router'
const index = r =>require(['../page/index.vue'],r);//login主页面
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:index},
		{path:'login',component:index},
		{path:'*',component:index},
  ]
})
