<template>
	<div class='nav' :class='{clickactive:clickactive}'>
  		<div class='content'>
  			<div class='topmenu' @click='changeactive' :class='{clickactive:clickactive}'><Icon type="navicon" size='15'></Icon></div>
  			<Row>
	  			<Col width='180'>
		            <Menu ref='leftnav' @on-select='go' :mode='options.mode' :theme='options.theme' :active-name='options.activeName' :open-names='options.openNames' :accordion='options.accordion' :width='options.width'>
		                <template v-for='val,key in datajson'>
		                	<template v-if='!val.hidden'>
		                		<Menu-item :name="val.path+'/'+val.children[0].path" v-if='val.noDropdown'>
					                <Icon v-if='val.icon' :type="val.icon" size='15'></Icon>&nbsp;&nbsp;{{val.name}}
					            </Menu-item>
				                <Submenu :name="val.path" v-else>
				                    <template slot="title">
				                        <Icon v-if='val.icon' :type="val.icon" size='15'></Icon> {{val.name}}
				                    </template>
				                    <Menu-item :name="val.path+'/'+v.path" v-for='v,k in val.children' :key='v'>{{v.name}}</Menu-item>
				                </Submenu>
		                	</template>
		                </template>
		            </Menu>
		        </Col>
	  		</Row>
	  		<!--私有权限模块导航-->
  		</div>
  	</div>
</template>

<script>
	/*左侧栏的导航，共有权限放到组件里面，不是公有的权限，重新添加*/
	import {routes} from '../RS/router';
	export default{
		mounted(){
			
		},
		props:{
			clickactive:{
				type:Boolean,
				default:false,
			}
		},
		data(){
			return{
				datajson:routes,
				options:{
					mode:'vertical',theme:'dark',
					activeName:'',
					openNames:[],
					accordion:true,
					width:'180',
				}
			}
		},
		created(){
			//左侧栏根据url做相应显示
			let patharr=this.$router.currentRoute.path.split('/');
			this.options.activeName='/'+patharr[1]+'/'+patharr[2];
			this.options.openNames.push('/'+this.$router.currentRoute.path.split('/')[1]);
		},
		methods:{
			go(name){
				this.$router.push({path:name})
			},
			changeactive(){
				this.$emit('update:clickactive',!this.clickactive);
				setTimeout(function(){//这个函数是为了table插件不完善化设置的，后期自己写删掉
					if( document.createEvent) { 
						var event = document.createEvent ("HTMLEvents"); 
						event.initEvent("resize", true, true); 
						window.dispatchEvent(event); 
					} else if(document.createEventObject){ 
						window.fireEvent("onresize"); 
					}
				},0);
			}
		},
		watch:{
			'$route'(to,from){
				//监控路由，对左侧做出相应调整
				this.options.openNames.splice(0);
				let patharr=to.path.split('/');
				this.options.activeName='/'+patharr[1]+'/'+patharr[2];
				this.options.openNames.push('/'+to.path.split('/')[1]);
				this.$refs.leftnav.updateOpened();
		    	this.$refs.leftnav.updateActiveName();
			}
		}
	}
</script>
<style lang='less'>
@import '../../../assets/css/variables.less';
.nav{
	width:180px;position:fixed;top:50px;left:0;bottom:0;overflow:hidden;z-index: 999;
		background:#363e4f;
		&.clickactive{
			ul ul li.ivu-menu-item{padding-left:50px;}
			left:-10px;width:47px;
		}
		>div.content{
			>div.topmenu{
				&:hover{>i{color:#fff;}}
				&.clickactive{
					width:60px;
					>i{transform: rotate(0deg);}
				}
				width:100%;background:#42485B;padding:5px 0;text-align: center;cursor:pointer;
				>i{transform: rotate(90deg);color:#ccc;}
			}
	    	overflow-y: scroll;width:201px;
	    	position:absolute;top:0;left:0;bottom:0;right:-22px;
	    	.ivu-menu-submenu-title{font-size:12px;}
	    	.ivu-menu-item{font-size:12px;padding-top:10px;padding-bottom:10px;}
		}
}
</style>