<template>
	<div class='pmanage_mindex'>
		<div class='title'>
			<Card :bordered="false" dis-hover>
		        <p slot="title">{{this.$store.state.powerconfig.personMsg.groupName}}----我所在的组</p>
		        <p class='bottomtitle'>
		        	为组分配管理员，添加成员，添加组需要的角色，分配成员在组中的角色，使其成员可以有限制的使用组中的资源
		        </p>
		    </Card>
		</div>
		<div class='member'>
		    <div class='handle'>
		    	<Card dis-hover>
		    		成员列表			
		    	</Card>
		    </div>
		    <div class='table'>
		    	<Table border :columns="membertitle" :data="memberlist"></Table>
		    </div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				membertitle:[
                	{title: '登陆账号',key: 'username'},
                	{title: '用户名',key: 'name'},
                	{title:'角色',key:'role'},
            	],
				memberlist:[]
			}
		},
		created(){
			this.$store.dispatch('P_getGroupMember')
			.then((response)=>{
				console.log(response);
				this.memberlist.splice(0);
				let data=response.data.Data.members;
				for(let key in data){
					let arr=[];
					for(let k in data[key].Roles){arr.push(data[key].Roles[k].Name)}
						this.memberlist.push({name:data[key].Name,username:data[key].Username,role:arr.join(','),roles:data[key].Roles,userid:data[key].Id})
						arr=null;
				}
			},(error)=>{console.log(error);this.$store.commit('ErrorTip',error);})
		}
	}
</script>

<style lang='less' scoped>
div.pmanage_mindex{
	padding:10px 10px 0 10px;
	>div.title{
		p.bottomtitle{padding-left:20px;}
	}
	>div.content{
		background: #fff;margin-top:10px;
		padding:10px;
	}
}
</style>