/**/
const state={
	clickactive:false,//主页面左侧的状态
	searchstate:false,//值无意义，在top中触发事件后，其他页面通过watch这个属性值来触发方法
	searchvalue:'',//
	personMsg:{//个人信息
		name:'',//个人用户名
		groupName:'',//组名
		isLeader:'',
		isAdmin:'',
	}
}
const mutations={
  ErrorTip(state, error) {//暂时是401和403的判断
    if(error.status==403){window.$Message.error({content:error.data.Data[0].ErrMsg,duration:2});}
	if(error.status==401){
	    window.$Message.error({content:'对不起，无此权限',duration:2});
	    //setTimeout(function(){window.location.href='/login.html'},2000);
	}
  }
}
const actions={
	loginout(context){//top.vue中的退出登陆
		return new Promise((resolve,reject)=>{
			axios.get('/v1/user/logout')
	  		.then((response)=>{resolve(response)},(error)=>{reject(error)})
		})
	},
}
export default {
	state,
	mutations,
	actions,
}
