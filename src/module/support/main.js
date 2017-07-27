//---zfl
//vue插件引入
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import store from './RS/store';
import axios from 'axios';
window.axios=axios;
const qs= require('qs');
window.qs=qs;
//其他配置
import {routes} from './RS/router';
import {FILTERPOWER} from './RS/filter';
import App from './page/app';
import iView from 'iview';
Vue.use(iView);
import 'iview/dist/styles/iview.css';    // 使用 CSS
import pub from '../../assets/js';//公用方法
require('!style-loader!css-loader!less-loader!../../assets/css/main.less');//公共样式引入less
/***********/
Vue.config.errorHandler = function (err,vm) {//截获页面中的错误信息,并执行相应的函数
	console.log(err,vm,window.location.href);//错误报告
}
Vue.config.productionTip=false;//生产提示关闭

/*******************************************************************/
async function lastdone(){//判断完是否为登陆状态再做跳转
	let islogin = await pub.checklogin();
	if(islogin){//登陆后的vue渲染
		store.state.powerconfig.loginstate=true;//登陆状态写入
		store.state.powerconfig.personMsg= await pub.getPersonal();//基本信息写入
		//得到身份后，对路由数组做权限过滤
		FILTERPOWER(store.state.powerconfig.personMsg,routes);
		//****
		const router=new Router({
		  routes:routes
		})
		router.beforeEach((to,from,next) => {//router之前出发的函数
			checklogin();
			async function checklogin(){//在每次router之前，都进行登陆状态判断
				let loginstate=await pub.checklogin();
				if(loginstate){
				   next();
				}else{window.location.href='/login.html'}
			}
		})
		var vm=new Vue({
			el:'#app',
		  router,
		  store,
		  template:'<App/>',
		  watch:{
		  	'$route'(to,from){//监听route
		  	}
		  },
		  beforeCreate(){
		  	window.$Message=this.$Message;//消息提示全局话
		  },
		  components:{App}
		})
	}else{window.location.href='/login.html'}
}
lastdone();
