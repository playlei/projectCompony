/*support入口页面*/
const index = r =>require(['../page/index/index.vue'],r);
/*主页面*/
const main = r =>require(['../page/main/index.vue'],r);
/*人员管理*/
const pmanage_app = r =>require(['../page/pmanage/app.vue'],r);
const pmanage_index = r =>require(['../page/pmanage/index.vue'],r);
const pmanage_indexmember = r =>require(['../page/pmanage/mindex.vue'],r);
const pmanage_policymanage = r =>require(['../page/pmanage/policymanage.vue'],r);
/*VPC页面*/
const vpc_app = r =>require(['../page/vpc/app.vue'],r);
const vpc_index = r =>require(['../page/vpc/index.vue'],r);
const vpc_list_app = r =>require(['../page/vpc/list_app.vue'],r);
const vpc_list_index = r =>require(['../page/vpc/list_index.vue'],r);
/**/
const keyManage_index = r =>require(['../page/keyManage/index.vue'],r);
const main2 = r =>require(['../page/main2/index.vue'],r);
const error404 = r =>require(['../page/error/index'],r);
export const routes=//****此对象也作为主页面的左侧栏配置,数据格式严格遵守,左侧识别的数据只在第一级别的children下的直接数据
[
	{
		path:'/',component:index,hidden:true,redirect:'/main',name:'首页',
		children:[{path:'main',component:main}]
	},
	{
		path:'/pmanage',component:index,redirect:'/pmanage/app',name:'我的小组',icon:'person-stalker',noDropdown:true,
		children:[{path:'app',component:pmanage_app,
					children:[
						{path:'index',component:pmanage_index},
						{path:'policymanage',component:pmanage_policymanage},
						{path:'mindex',component:pmanage_indexmember},
					]
				}]
	},
	{
		path:'/keyManage',component:index,hidden:true,redirect:'/keyManage/index',name:'Key管理',
		children:[{path:'index',component:keyManage_index}]
	},
	{
		path:'/cloud',component:index,redirect:'/share/github',name:'云计算基础服务',icon:'cloud',
		children:[
			{path:'github',component:main2,name:'云服务ECS'},
			{path:'vpc',component:vpc_app,name:'专有网络VPC',redirect:'/cloud/vpc/index',
				children:[
					{path:'index',component:vpc_index},
					{path:'list_app',component:vpc_list_app,redirect:'/cloud/vpc/list_app/index',
						children:[
							{path:'index',component:vpc_list_index}
						]
					},
				]
			},
		]
	},
	{
		path:'/error',component:error404,hidden:true,
	},
	{
		path:'*',component:error404,hidden:true,
	}
]

