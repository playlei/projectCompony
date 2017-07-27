const checklogin = function(){//判断登陆状态的方法 返回true false
	return new Promise((resolve,reject)=>{
		var XHR=null;  
		if (window.XMLHttpRequest) {XHR = new XMLHttpRequest();} 
		else if (window.ActiveXObject) {XHR = new ActiveXObject("Microsoft.XMLHTTP");} 
		else {XHR = null;}  
		if(XHR){  
		    XHR.open("GET", "/v1/user/login");  
		    XHR.onreadystatechange = function (response) {
				if(XHR.readyState==4){
					if(XHR.status == 200){resolve(true);}
					else{resolve(false);}
				}
		    };  
		    XHR.send();  
		} 
	})
}
const getPersonal = function(){//获取用户基本信息
	return new Promise((resolve,reject)=>{
		var XHR=null;  
		if (window.XMLHttpRequest) {XHR = new XMLHttpRequest();} 
		else if (window.ActiveXObject) {XHR = new ActiveXObject("Microsoft.XMLHTTP");} 
		else {XHR = null;}  
		if(XHR){  
		    XHR.open("GET", "/v1/user/personal");  
		    XHR.onreadystatechange = function (response) {
				if(XHR.readyState==4){
					if(XHR.status == 200){
						let data=JSON.parse(XHR.responseText).Data;
						let name=data.LoginUser.Name;
						let groupName=data.GroupInfo.Name;
						let isLeader=data.LoginUser.UserId==data.GroupInfo.Leader.Id?true:false;
						let isAdmin=data.LoginUser.Name=='admin'?true:false;
						resolve({name:name,groupName:groupName,isLeader:isLeader,isAdmin:isAdmin});
					}
					else{resolve(false);}
				}
		    };  
		    XHR.send();  
		} 
	})
}
export default {
	checklogin,getPersonal
}