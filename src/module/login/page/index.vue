<template>
  <div id="index" @keyup.enter="submit">
  	<div class='top'>
  		<div class='title'>
  			<img src="../assets/file/logo.png" alt="" />
  			<a href="/index.html">首页</a>
  		</div>
  		<div class='form'>
  			<span :class='{active:showerror}'>{{showerror}}</span>
  			<div class='input'>
  				<input type="text" placeholder="用户名" v-model="username"/>
  			</div>
  			<div class='input'>
  				<input type="password" placeholder="密码" v-model='pwd'/>
  			</div>
  			<div class='btn'>
  				<a href="javascript:;" @click='submit'>登陆</a>
  			</div>
  		</div>
  	</div>
  	<div class='bottom'>
  		<div class='last'>
				<p>Copyright&copy;2016杭州网银互联科技股份有限公司 All Rights Reserved</p>
				<p>浙B2-20100146 浙公网安备 33010002000012号</p>
			</div>
  	</div>
  </div>
</template>

<script>
 export default{
 	name:'index',
 	data(){
 		return{
 			username:'',
 			pwd:'',
 			showerror:'',//显示错误
 		}
 	},
 	methods:{
 		submit(){
 			if(this.username==''){this.showerror='用户名不能为空';return;}
 			if(this.pwd==''){this.showerror='密码不能为空';return;}
 			this.$store.dispatch('login',{Username:this.username,Password:this.pwd})
 			.then((response)=>{
 				console.log(response);
 				if(response.status==200){
   				window.location.replace('/support.html');
   			}else{
   				this.showerror='用户名或密码错误';
   			}
 			},(error)=>{
 				console.log(error);
   			this.showerror='用户名或密码错误';
 			})
 		}
 	},
 	watch:{
 		'username'(n,o){this.showerror=false;},
 		'pwd'(n,o){this.showerror=false;}
 	}
 }
</script>

<style lang='less' scoped>
@import '../../../assets/css/variables.less';
#index{
	height:100vh;position:relative;
	>div.top{
		height:80vh;background:url('../assets/file/bg.png') no-repeat 0 0;background-size:100% 100%;
		>div.title{
			line-height: 60px;height:60px;padding:0 30px;overflow:hidden;border-bottom:1px solid #8da3ff;
			>img{float:left;width:180px;margin-top:10px;}
			>a{float:right;color:#fff;}
		}
		>div.form{
			position:absolute;width:350px;min-height:300px;background:#fff;
			top:50%;left:50%;margin-left:-175px;margin-top:-200px;
			border-radius:5px;box-shadow:1px 2px 10px rgba(0,0,0,0.5);text-align: center;
			padding-top:50px;
			>span{color:#e20000;position:absolute;top:35px;left:115px;display:none;&.active{display:block}}
			>div{
				margin-top:30px;
				>input{
					padding:3px 0;border:none;outline: none;width:200px;border-bottom:1px solid #aaaaaa;
					&:focus{
						border-bottom:1px solid #2942ac;
					}
				}
				>a{
					display:inline-block;width:200px;padding:10px 0;background:@primary-color;
					color:#fff;border-radius: 20px;
				}
			}
		}
	}
	>div.bottom{
		height:20vh;
		text-align: center;font-size: 12px;color:@primary-color;
		>div{position:absolute;bottom:20px;left:0;right:0;}
	}
}
</style>
