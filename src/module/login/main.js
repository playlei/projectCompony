// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
window.axios=axios;
import store from './RS/store';
require('!style-loader!css-loader!less-loader!../../assets/css/main.less');
import router from './RS/router';
/* eslint-disable no-new */
Vue.config.errorHandler = function (err, vm) {//截获页面中的错误信息,并执行相应的函数
  console.log(err,vm,window.location.href);//错误报告
}
Vue.config.productionTip=false;//生产提示关闭
var vm=new Vue({
	el:'#app',
  router,
  store,
  template:`
  	<div>
  		<transition :name='routename' mode='out-in'>
  			<router-view></router-view>
  		</transition>
  	</div>
  `,
  data(){
  	return{
  		routename:'fade',	
  	}
  },
  watch:{
  	'$route'(to,from){
  		/*前进后退的root动画*/
//		const toDepth = to.path.split('/').length
//  	const fromDepth = from.path.split('/').length
//  	this.routename=toDepth<fromDepth?'fade':'fade1'
  	}
  }
})
