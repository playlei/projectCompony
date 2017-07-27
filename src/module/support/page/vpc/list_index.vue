<template>
	<div class='vpc_list_index'>
		<div class='top'>
			<div class='left'>
				<a href="javascript:;">华北1</a><a href="javascript:;" class='active'>华北2</a>
			</div>
			<div class='right'>
				<a href="javascript:;" class='refresh'><Icon type="refresh"></Icon>刷新</a>
				<a href="javascript:;" class='create'>创建专有网络</a>
			</div>
		</div>
		<div class='table'>
			<table>
				<thead>
					<tr>
						<td>VPC ID/名称</td>
						<td>网段</td>
						<td>状态</td>
						<td>描述</td>
						<td>创建时间</td>
						<td>默认专有网络</td>
						<td>操作</td>
					</tr>
				</thead>
				<tbody>
					<tr class='content'>
						<td>1asdddddddddddddddddddddd</td>
						<td>2asdddddd</td>
						<td>3asddd</td>
						<td>4asddddd</td>
						<td>5asddddd</td>
						<td>6dadssssss</td>
						<td class='operation'>
							<a href="javascript:;">管理</a><span>|</span><a href="javascript:;">编辑</a><span>|</span><a href="javascript:;">删除</a>
						</td>
					</tr>
					<tr>
						<td colspan='7' class='lastPage'>
							<span>共{{pageData.total}}条，每页显示：{{pageData.pageSize}}条</span>
							<span>
								<Page :total="pageData.total" size="small" :page-size='pageData.pageSize'></Page>
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				pageData:{
					total:200,
					pageSize:10,
				}
			}
		}
	}
</script>

<style lang='less' scoped>
	div.vpc_list_index{
		padding:10px;font-size:12px;
		a:hover{text-decoration: none;}
		>div.top{
			overflow:hidden;padding:20px 15px;background:#fff;border-radius:3px;
			>div.left{
				float:left;
				>a{
					margin-right:10px;padding:#666;background-color:#D9DEE4;padding:6px;
					&:hover{background-color:#DCE2E7;color:#444;}
					&.active{background-color: #546478;color: #FFFFFF;}
				}
			}
			>div.right{
				float:right;
			}
		}
		>div.table{
			margin-top:10px;padding:10px;background: #fff;border-radius: 3px;
			>table{
				width:100%;border:1px solid #eee;
				>thead{
					tr{background: #F5F6FA;color:#999;}
				}
				tr.content{
					&:hover{
						background:#F9F9FA;
					}
				}
				td{
					border-bottom:1px solid #eee;padding:10px;font-size: 12px;
					&.operation{
						a{color:#0066CC;margin:0 15px;&:hover{color:#57a3f3;}}
						>span{color:#D6CCCC;}
					}
					&.lastPage{
						>span{display: inline-block;vertical-align: middle;color:#999;font-size:12px;margin-left:10px;}
					}
					&:last-child{text-align: right;}
				}
			}
		}
	}
</style>