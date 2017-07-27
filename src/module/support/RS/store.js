import Vue from 'vue'
import Vuex from 'vuex'
import powerconfig from './storemodule/powerconfig';//权限，登陆配置,全局信息，全局方法ajax
import pmanageconfig from './storemodule/pmanageconfig';//人员管理
Vue.use(Vuex);
export default new Vuex.Store({
	modules:{
		powerconfig,
		pmanageconfig,
	}
})
