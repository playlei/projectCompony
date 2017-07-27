<template>
	<div id='viewtop'>
		<div class='container'>
			<img src="../assets/file/logo.png" alt="" />
			<ul>
				<li><a href="javascript:;">首页</a></li>
				<li><a href="javascript:;">产品</a></li>
				<li><a href="javascript:;">价格</a></li>
				<li><a href="javascript:;">文档</a></li>
				<li><a href="javascript:;">博客</a></li>
				<li><a href="javascript:;">常见问题</a></li>
				<li><a href="javascript:;">关于我们</a></li>
				<li><a :href="enter">登陆/控制中心</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import pub from '../../../assets/js';
	export default {
		data(){
			return{
				enter:''
			}
		},
		mounted(){
			var that = this ;
			var checklogin=async function(){
				let loginstate=await pub.checklogin();
				if(loginstate){that.enter='/support.html'}
				else{that.enter='/login.html'}
			}
			checklogin();
		}
	}
</script>

<style lang='less' scoped>
@import '../../../assets/css/variables.less';
#viewtop{
	background:@primary-color;padding:10px 20px;
	>div.container{
		>img{height:20px;}
		>ul{
			overflow: hidden;float:right;
			>li{
				float:left;margin-left:20px;
				>a{color:#fff;}
			}
		}
	}
}
</style>