<template>
	<div class='pmanage_policymanage'>
		<div class='title'>
			<Card :bordered="false">
		        <p slot="title">权限配置</p>
		        <p class='bottomtitle'>
		        	为角色配置相应的权限配额。
		        </p>
		    </Card>
		</div>
		<div class='table'>
			<Card dis-hover>
				<table>
					<thead>
						<tr>
							<td>资源名称</td>
							<td>操作权限</td>
						</tr>
					</thead>
					<tbody>
						<tr v-for='val,key in policylist' :key='val'>
							<td>{{val.Resource.Desc}}</td>
							<td>
								<Checkbox v-for='v,k in val.Action' v-model='v.Check' :key='v' @on-change='getSet(val.Resource.Name,v.Name,v.Check)'>{{v.Desc}}</Checkbox>
							</td>
						</tr>
					</tbody>
				</table>
			</Card>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				RoleName:'',
				policylist:[]
			}
		},
		created(){
			this.RoleName=this.$router.currentRoute.query.RoleName;
			this.review();
		},
		methods:{
			getSet(resource,action,checkstate){
				console.log(checkstate);
				if(checkstate==true){//添加
					this.$store.dispatch('P_RoleAddPolicy',{Role:this.RoleName,Resource:resource,Action:action})
					.then((response)=>{
						console.log(response);
						if(response.status==201){
							this.review();
						}else if(response.status==200){
							this.$Message.error({content:'系统未知错误，请刷新页面重新尝试',duration:2});
						}
					},(error)=>{
						console.log(error);this.$store.commit('ErrorTip',error);
					})
				}else{//取消
					this.$store.dispatch('P_RoleDeletePolicy',{Role:this.RoleName,Resource:resource,Action:action})
					.then((response)=>{
						console.log(response);
						if(response.status==201){
							this.review();
						}else if(response.status==200){
							this.$Message.error({content:'系统未知错误，请刷新页面重新尝试',duration:2});
						}
					},(error)=>{
						console.log(error);this.$store.commit('ErrorTip',error);
					})
				}
			},
			review(){//渲染页面
				this.$store.dispatch('P_RoleShowPolicy',{RoleName:this.RoleName})
				.then((response)=>{
					console.log(response);
					this.policylist=response.data.Data.policies;
				},(error)=>{
					console.log(error);this.$store.commit('ErrorTip',error);
				})
			}
		}
	}
</script>

<style lang="less" scoped>
div.pmanage_policymanage{
	padding:10px 10px 0 10px;
	>div.table{
		margin-top:10px;
		table{
			width:100%;
			tr{
				padding:10px 0;border-bottom:1px solid #eee;
				td{
					padding:10px 20px;
					&:first-child{width:200px;}line-height:30px;
				}
			}
			thead tr{background:#FdFdFd;}
			tbody tr{
				transition: all 0.2s linear 0s;
				&:hover{
					background:#EBF7FF;
					transition: all 0.2s linear 0s;
				}
			}
		}
	}
}
</style>