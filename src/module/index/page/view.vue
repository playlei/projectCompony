<template>
  <div id="view">
  	<div class='banners'>
  		<table>
  			<tr>
  				<td class='left'>
  					<div>
		  				<div class='top'><img src="../assets/file/banner1_1.png" alt="" /></div>
		  				<div class='bottom'><img src="../assets/file/banner1_2.png" alt="" /></div>
		  			</div>	
  				</td>
  				<td class='right'>
  					<div>
  						<div>
  							<p>多云业务，统一平台管理</p>
  							<p>通过统一的多云管理平台，可获得最适合企业的云架构，可以是公有云，私有云，传统IDC架构等，通过统一的平台管理和调度，打破传统的单一产品架构的界限。</p>
  							<p class='next'>混合云是一种组合的云，它是一种公共云和私有云的组合，通过公有云和客户IDC数据中心托管设备搭建的私有云融合部署服务。</p>
  						</div>
  					</div>
  				</td>
  			</tr>
  		</table>
  	</div>
  	<div class='details'>
  		<div class='top'>
  			<img src="../assets/file/guid.png" alt="" />
  		</div>
  		<div class='adver gray'>
  			<table>
  				<tr>
  					<td class='text'>
  						<h1>标题一行，最多一行</h1>
  						<p>
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  						</p>
  					</td>
  					<td class='show'>
  						<img src="" alt="展示图片" />
  					</td>
  				</tr>
  			</table>
  		</div>
  		<div class='adver'>
  			<table>
  				<tr>
  					<td class='show'>
  						<img src="" alt="展示图片" />
  					</td>
  					<td class='text'>
  						<h1>标题一行，最多一行</h1>
  						<p>
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  						</p>
  					</td>
  				</tr>
  			</table>
  		</div>
  		<div class='advertip'>
  			<div>
  				<div>
  					<div><img src="" alt="图片" /></div>
  					<h1>四字标题</h1>
  					<p>内容二到三行内容两到三行</p>
  					<p>内容二到三行内容两到三行</p>
  					<p>内容二到三行</p>
  				</div>
  				<div>
  					<div><img src="" alt="图片" /></div>
  					<h1>四字标题</h1>
  					<p>内容二到三行内容两到三行</p>
  					<p>内容二到三行内容两到三行</p>
  					<p>内容二到三行</p>
  				</div>
  				<div>
  					<div><img src="" alt="图片" /></div>
  					<h1>四字标题</h1>
  					<p>内容二到三行内容两到三行</p>
  					<p>内容二到三行内容两到三行</p>
  					<p>内容二到三行</p>
  				</div>
  			</div>
  		</div>
  		<div class='adver'>
  			<table>
  				<tr>
  					<td class='show'>
  						<img src="" alt="展示图片" />
  					</td>
  					<td class='text'>
  						<h1>标题一行，最多一行</h1>
  						<p>
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  						</p>
  					</td>
  				</tr>
  			</table>
  		</div>
  		<div class='adver gray'>
  			<table>
  				<tr>
  					<td class='text'>
  						<h1>标题一行，最多一行</h1>
  						<p>
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  							内容最多五行，最少两行。。。内容最多五行，最少两行。。。
  						</p>
  					</td>
  					<td class='show'>
  						<img src="" alt="展示图片" />
  					</td>
  				</tr>
  			</table>
  		</div>
  	</div>
  </div>
</template>

<script>
 export default{
 	name:'view',
 	data(){
 		return{
 		}
 	},
 	mounted(){
 	},
 	methods:{
 	},
 	components:{
 	}
 }
</script>

<style lang='less' scoped>
@import '../../../assets/css/variables.less';
#view{
	>div.banners{
		height:550px;background:url('../assets/file/banner1.png') no-repeat 0 0;background-size:100%;
		>table{
			width:100%;
			td.left{
				width:50%;vertical-align:middle;height:550px;
				>div{
					>div.top{padding-left:180px;margin-bottom:30px;>img{width:380px;}}
					>div.bottom{padding-left:400px;>img{width:300px;}}
				}
			}
			td.right{
				vertical-align:middle;height:550px;
				>div{
					padding:30px;
					>div{
						padding:35px;background: rgba(50,50,50,0.2);border-radius: 5px;width:550px;
						p{
							color:#fff;line-height: 25px;&.next{margin-top:10px;}
						}
					}
				}
			}
		}
	}
	>div.details{
		>div.top{padding:20px 0;img{width:100%;}}
		>div.adver{
			padding:30px 0;
			&.gray{background:#f5f5f5;}
			>table{
				width:100%;max-width:1200px;margin-left:auto;margin-right:auto;
				td.text{
					width:60%;padding:30px;
					>h1{font-size:25px;font-weight:900;margin-bottom:30px;text-shadow: 200px 0px 3px #ccc;}
					>p{line-height: 20px;text-shadow: 5px 30px 3px #ccc;}
				}
				td.show{
					width:40%;padding:30px;>img{width:360px;height:360px;}
				}
				td.show:last-child{text-align: right;}
			}
		}
		>div.advertip{
			padding:50px 0;background:#f5f5f5;
			>div{
				width:100%;max-width:1200px;margin-left:auto;margin-right:auto;overflow: hidden;
				>div{
					float:left;width:33.3%;text-align: center;
					>div{
						>img{width:120px;height:120px;}
					}
					>h1{font-size:20px;margin:20px 0;}
					>p{margin:5px 0;color:#aaaaaa;}
				}
			}
		}
	}
}
</style>
