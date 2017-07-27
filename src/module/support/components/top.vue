<template>
	<div id='top'>
		<a class='left' href="/index.html">
			<img src="../assets/file/logo.png" alt="logo" />
		</a>
		<span class='lefttitle'>{{title}}</span>
		<div class='search'>
			<Input @on-click='fsearch' @on-enter='fsearch' v-model="$store.state.powerconfig.searchvalue" size='large' icon="ios-search-strong" placeholder="搜索" style="width: 400px"></Input>
		</div>
		<div class='right'>
			<a href="/support.html">控制台</a>
			<b></b>
			<div class='drop1'>
				<Dropdown @on-click='getname' placement='bottom-end'>
	       	 		<a href="javascript:void(0)">
						<img src="" alt="头像" />
			        </a>
			        <Dropdown-menu slot="list">
			            <Dropdown-item>
			            	<div class='droplist'>
			            		{{this.$store.state.powerconfig.personMsg.name}}
			            	</div>
			            </Dropdown-item>
			        </Dropdown-menu>
			        <Dropdown-menu slot="list">
			            <Dropdown-item name='out'>退出</Dropdown-item>
			        </Dropdown-menu>
		    	</Dropdown>
			</div>
			<b></b>
			<div class='drop2'>
				<Dropdown @on-click='getname' placement='bottom-end'>
					<a href="javascript:void(0)">
						<Icon type="android-hangout" size='20'></Icon>
			        </a>
			        <Dropdown-menu slot="list">
			            <Dropdown-item>
			            	<div class='droplist'>
							    <Steps :current="2" direction="vertical">
							        <Step title="已完成" content="这里是该步asdasdsadasd.."></Step>
							        <Step title="已完成" content="这里是该步.."></Step>
							        <Step title="进行中" content="这里是该步.."></Step>
							        <Step title="待进行" content="这里是该步.."></Step>
							    </Steps>
			            	</div>
			            </Dropdown-item>
			        </Dropdown-menu>
		    	</Dropdown>
			</div>
		</div>
	</div>
</template>

<script>
	import {routes} from '../RS/router';
	export default {
		data(){
			return{
				title:''
			}
		},
		created(){
			this.changetitle(this.$router.currentRoute.path);
		},
		methods:{
			fsearch(){
				this.$store.state.powerconfig.searchstate=!this.$store.state.powerconfig.searchstate;
			},
			getname(name){//右侧退出事件
				if(name=='out'){
					this.$store.dispatch('loginout')
					.then((response)=>{
						console.log(response);
						if(response.status==200){window.location.href='/login.html';}
					},(error)=>{
						console.log(error);
					})
				}
			},
			changetitle(path){//改变标题
				this.title='';
				for (let key in routes){
					if(routes[key].hidden){continue;}//不在左侧
					else if(routes[key].noDropdown){//不是下拉
						if((path.indexOf(routes[key].path)!==-1)&&(path.indexOf(routes[key].children[0].path)!==-1)){
							this.title=routes[key].name;
							return;
						}
					}else{//下拉
						if(path.indexOf(routes[key].path)!==-1){
							this.title+=routes[key].name;
							for(let k in routes[key].children){
								if(path.indexOf(routes[key].children[k].path)!==-1){
									this.title+='/'+routes[key].children[k].name;
									return;
								}
							}
						}
					}
				}
			}
		},
		watch:{
			'$route'(to,from){
				this.changetitle(to.path);//改变title的方法
			}
		}
	}
</script>

<style lang='less' scoped>
@import '../../../assets/css/variables.less';
#top{
	height:50px;
	background:#fff;z-index:999;
	position:fixed;top:0;left:0;right:0;
	>a.left{
		display:inline-block;width:180px;height:50px;background: @primary-color;
		padding:10px 0 0 25px;
		>img{width:120px;}
	}
	>span.lefttitle{
		margin-left:10px;display: inline-block;height:50px;line-height: 50px;vertical-align:top;color:#333;font-size:16px;
		font-weight:900;
	}
	>div.search{
		position:fixed;top:0;left:0;right:0;height:50px;text-align: center;padding-top:8px;z-index:-1;
		
	}
	>div.right{
		float:right;padding:5px 20px 0 0;
		>b{margin:0 20px;border-left:1px solid #e2e2e2;height:30px;display: inline-block;vertical-align: middle;}
		>div.drop1{
			a:hover{text-decoration: none;}
			display: inline-block;
			img{vertical-align: middle;width:40px;height:40px;border-radius: 50%;border:1px solid #ccc;}
			div.droplist{
			}
		}
		>div.drop2{
			display: inline-block;margin-right:50px;
			.ivu-dropdown-menu:hover>.ivu-dropdown-item,.ivu-dropdown-menu:hover{background:#fff;}
			.ivu-select-dropdown:hover{background:#fff;}
		}
	}
}
</style>