import Vue from 'vue'
import Vuex from 'vuex'
var qs = require('qs');
Vue.use(Vuex);
const state={
}
const actions={
	login(context,data){
		return new Promise((resolve,reject)=>{
			axios.post('/v1/user/login', qs.stringify(data))
	  		.then(function (response) {
	    		return resolve(response);
	  		})
	  		.catch(function (error) {
			    return reject(error)
			});
		})
	}
}
export default new Vuex.Store({
	state,
	actions,
})
