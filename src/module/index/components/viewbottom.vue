<template>
	<div id='viewbottom'>
		<div class='container'>
			<div class='left'>
				<ul>
					<li><span>关于我们</span></li>
					<li><a href="javascript:;">公司简介</a></li>
					<li><a href="javascript:;">发展历程</a></li>
					<li><a href="javascript:;">公司文化</a></li>
					<li><a href="javascript:;">加入网银</a></li>
					<li><a href="javascript:;">账号信息</a></li>
				</ul>
				<ul>
					<li><span>客户中心</span></li>
					<li><a href="javascript:;">服务指南</a></li>
					<li><a href="javascript:;">服务方式</a></li>
					<li><a href="javascript:;">自动服务中心</a></li>
					<li><a href="javascript:;">投诉建议</a></li>
				</ul>
				<ul>
					<li><span>咨询中心</span></li>
					<li><a href="javascript:;">公司动态</a></li>
					<li><a href="javascript:;">行业动态</a></li>
				</ul>
				<ul>
					<li><span>业务咨询</span></li>
					<li>0571-88915000</li>
				</ul>
				<ul>
					<li><span>客户服务</span></li>
					<li>400-8835-999</li>
				</ul>
			</div>
			<div class='right'>
				<div>
					<p>杭州网银互联科技股份有限公司</p>
					<p>地址：杭州市西湖区华星路 96 号互联网金融大厦 20F</p>
					<p>邮编：310012</p>
					<p>公司总机：0571-88915000</p>
					<p>业务咨询：0571-88915000</p>
					<p>客户服务：400-8835-999（24小时）</p>
					<p>传真：0571-89937091</p>
				</div>
			</div>
		</div>
		<div class='last'>
			<p>Copyright&copy;2016杭州网银互联科技股份有限公司 All Rights Reserved</p>
			<p>浙B2-20100146 浙公网安备 33010002000012号</p>
		</div>
	</div>
</template>

<script>
</script>

<style lang='less' scoped>
@import '../../../assets/css/variables.less';
#viewbottom{
	background:@primary-color;padding:30px;
	>div.container{
		width:100%;max-width:1400px;margin:0 auto;overflow:hidden;
		div.left{
			overflow:hidden;float:left;width:60%;
			>ul{
				float:left;color:#fff;a{color:#fff;}margin-left:60px;margin-top:10px;
				>li{
					line-height: 30px;
					span{font-size:16px;}
				}
			}
		}
		>div.right{
			width:40%;overflow:hidden;float:left;padding:0 60px;color:#fff;text-align: right;
			>div{
				padding:25px;border-radius:3px;border:1px dotted #fff;
				display: inline-block;text-align: left;
			}
		}
	}
	>div.last{
		text-align: center;color:#fff;font-size:12px;margin-top:30px;
	}
}
</style>