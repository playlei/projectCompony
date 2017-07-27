<template>
    <div class='keyManage_index'>
    	<div class='title'>
			<Card dis-hover>
			    <Button type="primary" icon="key" @click='addkey.isshow=true'>添加key</Button>
		    </Card>
		</div>
    	<div class='table'>
			<Card dis-hover>
				<table>
					<thead>
						<tr>
							<td>Access Key Id</td>
							<td>名称</td>
							<td>类型</td>
							<td>当前使用</td>
							<td>创建日期</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>123</td>
							<td>123</td>
							<td>123</td>
							<td>123</td>
							<td>123</td>
						</tr>
					</tbody>
				</table>
			</Card>
		</div>
    	<Modal v-model="addkey.isshow" title="添加密钥" @on-ok="addkeyok" @on-cancel="addkeycancel" :loading='addkey.btnloading'>
			<div class='addkey'>
				<div class='title'>
					添加组，即在当前组下创建一个子组，同时需创建一个成员作为创建组的管理员，
					<b>注：（今后该组内的所有操作将全权指派给此管理员）</b>
				</div>
				<div>
					<span>选择产品：<b>*</b></span>
					<Select v-model="addkey.provider" style="width:300px">
					    <Option v-for="item in addkey.options" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</div>
				<div>
					<span>key：<b>*</b></span>
					<Input placeholder="请填写密钥" style='width:300px' v-model='addkey.key'></Input>
				</div>
				<div>
					<span>secret：<b>*</b></span>
					<Input placeholder="secret" style='width:300px' v-model='addkey.secret'></Input>
				</div>
			</div>
		</Modal>
    </div>
</template>
<script>
	export default{
		data(){
			return{
				addkey:{
					isshow:false,
					btnloading:true,
					provider:'1',
					options:[{value:'1',label:'阿里云'}],
					key:'',
					secret:'',
				}
			}
		},
		methods:{
			addkeyok(){
				
			},
			addkeycancel(){
				
			}
		}
	}
</script>
<style scoped lang='less'>
	div.keyManage_index{
		padding:10px;
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
	div.addkey{
		>div.title{
			font-size:13px;line-height:25px;padding-bottom:10px;
			border-bottom:1px solid #4f6adc;
		}
		>div{
			margin-bottom:20px;
			>span{display: inline-block;width:100px;>b{color:#e20000;}}
		}
	}
</style>
