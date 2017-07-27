const memberLimitedPath=[//成员限制路径
	'/pmanage/app/index',
	'/pmanage/app/policymanage',
]
const leaderLimitedPath=[//领导限制路径
]
const adminLimitedPath=[//管理员限制路径

]
export const FILTERPOWER=function(json,routes){
	let foreachArr='';
	if(json.isAdmin){foreachArr=adminLimitedPath;}
	else if(json.isLeader){foreachArr=leaderLimitedPath;}
	else{foreachArr=memberLimitedPath;}
	for(let key in foreachArr){
		let arr=foreachArr[key].split('/');
		arr.splice(0,1);arr[0]='/'+arr[0];
		const ok=[false];
		deleteSearch(routes,arr,0,ok);
	}
}
function deleteSearch(routesPart,arr,nowindex,ok){//要遍历的数组,判断路径的arr,寻找的当前的arr的下标,是否找到了
	for(let key in routesPart){
		if(ok[0]==true){return;}
		if(routesPart[key].path==arr[nowindex]){
			if(nowindex==arr.length-1){//已经遍历到最后了
				routesPart.splice(key,1);
				ok[0]=true
			}else{//继续便利
				fone(routesPart[key].children,arr,nowindex+1,ok);
			}
		}
	}
}
