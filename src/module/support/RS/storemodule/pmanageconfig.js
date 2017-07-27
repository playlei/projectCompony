const state={
	
}
const actions={
	P_getOneStepTeam(context){//获取当前下一级的所有group
		return new Promise((resolve,reject)=>{
			axios.get('/v1/user-group/children')
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_getGroupMember(context){//获取当前组的成员
		return new Promise((resolve,reject)=>{
			axios.get('/v1/user-group/member')
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_getGroupRole(context){//获取所有的角色
		return new Promise((resolve,reject)=>{
			axios.get('/v1/role')
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_addGroup(context,data){//添加组
		return new Promise((resolve,reject)=>{
			axios.post('/v1/user-group',data)
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_getChildGroupMember(context,groupid){//查看指定group所有成员
		let url='/v1/user-group/'+groupid+'/member';
		return new Promise((resolve,reject)=>{
			axios.get(url)
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_editorGroupNoAdd(context,data){//修改组，不创建新用户
		return new Promise((resolve,reject)=>{
			axios.put('/v1/user-group',data)
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_editorGroupAdd(context,data){//修改组，创建新用户
		return new Promise((resolve,reject)=>{
			axios.put('/v1/user-group?createNewUser=1',data)
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_AddMember(context,data){//添加成员
		return new Promise((resolve,reject)=>{
			axios.post('/v1/user-group/member',qs.stringify(data))
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_EditorMember(context,data){//修改成员
		return new Promise((resolve,reject)=>{
			axios.put('/v1/user-group/member',data)
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_EditorMemberRole(context,data){//角色设置
		return new Promise((resolve,reject)=>{
			axios.post('/v1/user/role',data)
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_AddRole(context,data){//创建role
		return new Promise((resolve,reject)=>{
			axios.post('/v1/role',data)
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_EditorRole(context,data){//修改role
		return new Promise((resolve,reject)=>{
			axios.put('/v1/role',data)
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_RoleShowPolicy(context,data){//进去权限设置
		return new Promise((resolve,reject)=>{
			axios.post('/v1/policy/action-resource-map',data)
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_RoleAddPolicy(context,data){//添加权限
		return new Promise((resolve,reject)=>{
			axios.post('/v1/policy',data)
	  		.then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_RoleDeletePolicy(context,data){//取消权限
		return new Promise((resolve,reject)=>{
			axios({
        	method: 'DELETE',
        	url:'/v1/policy',
        	data:data
      		}).then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_DeleteGroup(context,data){//删除组
		return new Promise((resolve,reject)=>{
			axios({
        	method: 'DELETE',
        	url:'/v1/user-group',
        	data:data
      		}).then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_DeleteMember(context,data){//删除成员
		return new Promise((resolve,reject)=>{
			axios({
        	method: 'DELETE',
        	url:'/v1/user-group/member',
        	data:data
      		}).then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	},
	P_DeleteRole(context,data){//删除角色
		return new Promise((resolve,reject)=>{
			axios({
        	method: 'DELETE',
        	url:'/v1/role',
        	data:data
      		}).then((response)=>{resolve(response)},(error)=>{reject(error.response)})
		})
	}
}
export default {
	state,
	actions,
}
