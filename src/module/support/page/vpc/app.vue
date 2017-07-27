<template>
	<div id='vpc'>
		<div class='leftNav' :class='{clickactive:$store.state.powerconfig.clickactive}'>
			<h6>专有网络</h6>
			<p v-for='v,k in leftdata' @click='go(v.path)' :class='{active:nowpage.includes(v.path)}'>{{v.name}}</p>
		</div>
		<div class='vpcRouter'>
			<router-view></router-view>
		</div>
  	</div>
</template>
<script>
	export default{
		data(){
			return{
				nowpage:'',//当前的所在页
				leftdata:[
					{name:'概览',path:'/cloud/vpc/index'},
					{name:'专有网络',path:'/cloud/vpc/list_app'},
					{name:'共享宽带',path:'/cloud/vpc/2'},
					{name:'NAT网关',path:'/cloud/vpc/3'},
				]
			}
		},
		created(){
			this.nowpage=this.$router.currentRoute.path;
		},
		methods:{
			go(name){
				this.$router.push({path:name});
				this.nowpage=name;
			}
		},
		watch:{
			'$route':function(to,from){
				this.nowpage=this.$router.currentRoute.path;
			}
		}
	}
</script>
<style scoped lang='less'>
	div#vpc{
		>div.leftNav{
			position:fixed;font-size:12px;
			width:180px;top:50px;bottom:0;left:180px;background:#ddd;
			&.clickactive{
				left:37px;
			}
			>h6{
				padding:20px 10px;font-weight:900;background:#ccc;
			}
			>p{
				cursor: pointer;padding:10px 20px;
				&:hover{background:#F4F6F8;}
				&.active{
					background:#f0f0f0;
				}
			}
		}
		>div.vpcRouter{
			margin-left:180px;
		}
	}
</style>