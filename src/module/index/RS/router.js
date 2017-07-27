import Vue from 'vue'
import Router from 'vue-router'
const index = r =>require(['../page/index.vue'],r);//主路口
const view = r =>require(['../page/view.vue'],r);//首页
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:index,redirect:'/view'},
		{path:'/index',component:index,
			redirect:'/view',
			children:[
				{path:'/view',component:view},
			]
		},
		{path:'*',component:index},
  ]
})
