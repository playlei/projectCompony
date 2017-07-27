<template>
  <div id="error">
  	<div>
  		<img src="../../assets/file/404.png" alt="" />
  		<div class='say'><span>此页面未找到或您无权限进入。。。</span></div>
  		<p>请检查您输入的网址是否正确，点击下面按钮返回首页</p>
  		<div class='btn'>
  			<a href="/">返回首页</a>
  		</div>
  	</div>
  </div>
</template>

<script>
	
</script>

<style lang='less' scoped>
div#error{
	background: rgb(240, 242, 245);min-height:100vh;
	&:before{content: '';display: table;}
	&:after{content: '';display: table;}
	>div{
		width:800px;text-align: center;margin:100px auto;
		>img{width:500px;}
		>div.say{
			margin-top:10px;
			>span{color:#1482f0;font-size:20px;margin-right:20px;}
			>img{width:100px;vertical-align:bottom;}
		}
		>p{margin:20px 0;color:#999;}
		>div.btn{
			a{color:#ffffff;background:#1482f0;padding:8px 30px;border-radius: 20px;}
		}
	}
}
</style>
