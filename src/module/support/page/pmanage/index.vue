<template>
	<div class='pmanage_index'>
		<div class='title'>
			<Card :bordered="false">
		        <p slot="title">{{this.$store.state.powerconfig.personMsg.groupName}}----管理中心</p>
		        <p class='bottomtitle'>
		        	为组分配管理员，添加成员，添加组需要的角色，分配成员在组中的角色，使其成员可以有限制的使用组中的资源
		        </p>
		    </Card>
		</div>
		<div class='content'>
		    <Tabs :animated='false' @on-click='changeTab'>
		    	<Tab-pane label="下级组" icon='steam' name='team'>
		    		<div class='team'>
		    			<div class='handle'>
		    				<Card>
		    					<Button type="primary" @click='addteam.isshow=true'><Icon type="android-add"></Icon><Icon type="person-stalker"></Icon> 添加组</Button>
		    					<Tooltip content="组内含有成员的组将无法删除" placement="top-start" :delay='200'>
						           	<Button type="error" icon="android-delete" @click='teamremoveplus'>删除组</Button>
						        </Tooltip>
		    				</Card>
		    			</div>
		    			<div class='table'>
		    				<Table @on-selection-change='teamselects' border :columns="teamtitle" :data="teamlist"></Table>
		    			</div>
		    		</div>
		    	</Tab-pane>
		        <Tab-pane label="所有成员" icon="android-people" name='member'>
		        	<div class='member'>
		        		<div class='handle'>
					    	<Card>
					    		<Button type="primary" icon='person-add' @click='addmember.isshow=true'>添加成员</Button>
					    		<Tooltip content="无法删除管理员本身" placement="top-start" :delay='200'>
						           	<Button type="error" icon="android-delete" @click='memberremoveplus'>删除</Button>
						        </Tooltip>
					    	</Card>
					    </div>
					    <div class='table'>
						    <Table @on-selection-change='memberselect' border :columns="membertitle" :data="memberlist"></Table>
					    </div>
		        	</div>
		        </Tab-pane>
		        <Tab-pane label="角色管理" icon="ios-body" name='role'>
		        	<div class='role'>
		        		<div class='handle'>
					    	<Card>
					    		<Button type="primary" icon='person-add' @click='addrole.isshow=true'>添加角色</Button>
					    		<Tooltip content="若有成员使用此角色，此角色将无法删除" placement="top-start" :delay='200'>
						           	<Button type="error" icon="android-delete" @click='roleremoveplus'>删除</Button>
						        </Tooltip>
					    	</Card>
					    </div>
					    <div class='table'>
						    <Table @on-selection-change='roleselect' border :columns="roletitle" :data="rolelist"></Table>
					    </div>
		        	</div>
		        </Tab-pane>
		    </Tabs>
		</div>
		<!--添加组-->
		<Modal v-model="addteam.isshow" title="添加组" @on-ok="addteamok" @on-cancel="addteamcancel" :loading='addteam.btnloading'>
			<div class='addteam'>
				<div class='title'>
					添加组，即在当前组下创建一个子组，同时需创建一个成员作为创建组的管理员，
					<b>注：（今后该组内的所有操作将全权指派给此管理员）</b>
				</div>
				<div>
					<span>组名填写：<b>*</b></span>
					<Input placeholder="请填写创建的组名" style='width:300px' v-model="addteam.teamname"></Input>
				</div>
				<div><span>管理员信息</span></div>
				<div>
					<span>管理员账号：<b>*</b></span>
					<Input placeholder="登陆账号" style='width:300px' v-model="addteam.username"></Input>
				</div>
				<div>
					<span>管理员密码：<b>*</b></span>
					<Input placeholder="密码" type='password' style='width:300px' v-model="addteam.pwd"></Input>
				</div>
				<div>
					<span>重复密码：<b>*</b></span>
					<Input placeholder="确认密码" type='password' style='width:300px' v-model="addteam.repwd"></Input>
				</div>
				<div>
					<span>管理员用户名：<b>*</b></span>
					<Input placeholder="管理员用户名" style='width:300px' v-model="addteam.leadername"></Input>
				</div>
			</div>
		</Modal>
		<!--修改组-->
		<Modal v-model="editorteam.isshow" title="修改组" @on-ok="editorteamok" @on-cancel="editorteamcancel" :loading='editorteam.btnloading'>
			<div class='editorteam'>
				<div class='title'>
					可修改群组的名字，以及其管理人员
				</div>
				<div>
					<span>组名：</span>
					<Input placeholder="请填写新的组名" style='width:300px' v-model="editorteam.teamname"></Input>
				</div>
				<div>
					<span>当前管理员：</span> {{editorteam.nowleader.name}} <a href="javascript:;" @click='editorteam.choicechange=!editorteam.choicechange'><span v-if='!editorteam.choicechange'>更改管理员</span><span v-if='editorteam.choicechange'>暂不更改</span></a>
				</div>
				<div class='changeleader' v-if='editorteam.choicechange'>
					<div class='old'>
						<Radio-group v-model="editorteam.radio">
					        <Radio label="新添加"></Radio>
					        <Radio label="已有"></Radio>
					    </Radio-group>
					</div>
					<div v-if='editorteam.radio=="已有"' class='old'>
						<span>旗下成员中选择：</span>
						<Select v-model="editorteam.choicemember" style="width:300px">
					        <Option v-for="item in editorteam.options" :value="item.value" :key="item.value">{{ item.label }}</Option>
					    </Select>
					</div>
					<div v-if='editorteam.radio=="新添加"' class='new'>
						<div>
							<span>管理员账号：</span>
							<Input placeholder="登陆账号" style='width:300px' v-model="editorteam.username"></Input>
						</div>
						<div>
							<span>管理员密码：</span>
							<Input placeholder="密码" type='password' style='width:300px' v-model="editorteam.pwd"></Input>
						</div>
						<div>
							<span>重复密码：</span>
							<Input placeholder="确认密码" type='password' style='width:300px' v-model="editorteam.repwd"></Input>
						</div>
						<div>
							<span>管理员用户名：</span>
							<Input placeholder="管理员用户名" style='width:300px' v-model="editorteam.leadername"></Input>
						</div>
					</div>
				</div>
			</div>
		</Modal>	
		<!--添加成员-->
		<Modal v-model="addmember.isshow" title="添加成员" @on-ok="addmemberok" @on-cancel="addmembercancel" :loading='addmember.btnloading'>
			<div class='addmember'>
				<div class='title'>
					添加成员，完成添加后可对成员赋予角色
				</div>
				<div>
					<span>登陆账号：</span>
					<Input placeholder="账号" style='width:300px' v-model="addmember.Username"></Input>
				</div>
				<div>
					<span>登陆密码：</span>
					<Input placeholder="密码" type='password' style='width:300px' v-model="addmember.Password"></Input>
				</div>
				<div>
					<span>重复密码：</span>
					<Input placeholder="再次输入之前相同的密码" type='password' style='width:300px' v-model="addmember.rePassword"></Input>
				</div>
				<div>
					<span>用户名称：</span>
					<Input placeholder="用户名称" style='width:300px' v-model="addmember.Name"></Input>
				</div>
			</div>
		</Modal>
		<!--修改成员-->
		<Modal v-model="editormember.isshow" title="修改成员信息" @on-ok="editormemberok" @on-cancel="editormembercancel" :loading='editormember.btnloading'>
			<div class='editormember'>
				<div class='title'>
					修改成员的基本信息
				</div>
				<div>
					<span>用户名称：</span>
					<Input placeholder="用户名称" style='width:300px' v-model="editormember.Name"></Input>
				</div>
				<div>
					<span>登陆密码：</span>
					<Input placeholder="新密码" type='password' style='width:300px' v-model="editormember.Password"></Input>
				</div>
				<div>
					<span>重复密码：</span>
					<Input placeholder="再次输入之前相同的密码" type='password' style='width:300px' v-model="editormember.rePassword"></Input>
				</div>
			</div>
		</Modal>	
		<!--成员角色设置-->
		<Modal v-model="editormemberrole.isshow" title="成员角色设置" @on-ok="editormemberroleok" @on-cancel="editormemberrolecancel" :loading='editormemberrole.btnloading'>
			<div class='addrole'>
				<div class='title'>
					成员的角色设置，直接在选择框上做添加删除，并保存即可。
				</div>
				<div>
					<span>角色设置：</span>
					<Select v-model="editormemberrole.selects" filterable multiple style='width:300px'>
		                <Option v-for="item in editormemberrole.policylist" :value="item.value" :key="item">{{ item.label }}</Option>
		            </Select>
				</div>
			</div>
		</Modal>	
		<!--添加角色-->
		<Modal v-model="addrole.isshow" title="角色添加" @on-ok="addroleok" @on-cancel="addrolecancel" :loading='addrole.btnloading'>
			<div class='addrole'>
				<div class='title'>
					添加角色，一个角色可以添加多个权限
				</div>
				<div>
					<span>角色名称：</span>
					<Input placeholder="请填写新建的角色名称" style='width:300px' v-model="addrole.name"></Input>
				</div>
				<div>
					<span>角色描述：</span>
					<Input placeholder="请填写对此角色的简短描述" style='width:300px' v-model='addrole.discribe'></Input>
				</div>
			</div>
		</Modal>
		<!--修改角色-->
		<Modal v-model="editorrole.isshow" title="修改角色" @on-ok="editorroleok" @on-cancel="editorrolecancel" :loading='editorrole.btnloading'>
			<div class='addrole'>
				<div class='title'>
					修改当前的角色的基本信息以及权限。
				</div>
				<div>
					<span>角色名称：</span>
					<Input placeholder="请填写修改后的角色名称" style='width:300px' v-model="editorrole.name"></Input>
				</div>
				<div>
					<span>角色描述：</span>
					<Input placeholder="请填写对此角色的简短描述" style='width:300px' v-model='editorrole.discribe'></Input>
				</div>
			</div>
		</Modal>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				GroupId:'',//当前的组的id
				addteam:{//添加组
            		isshow:false,
            		teamname:'',//组名
            		username:'',//账号
            		pwd:'',//密码
            		repwd:'',//重复密码
            		leadername:'',//管理员用户名
            		btnloading:true,//点击确认按钮显示loading
            	},
            	editorteam:{//修改组
            		isshow:false,
            		index:'',
            		teamId:'',
            		teamname:'',//组名
            		nowleader:{name:'admin',id:123},//当前管理员名字
            		choicechange:false,//是否需要修改管理员
            		radio:'新添加',
            		choicemember:'',//选择的人员id
            		options:[],
            		username:'',//账号
            		pwd:'',//密码
            		repwd:'',//重复密码
            		leadername:'',//管理员用户名
            		btnloading:true,//点击确认按钮显示loading
            	},
            	teamselectdata:[],//组左侧选择数据
            	teamtitle: [
                    {type: 'selection',width: 60,align: 'center'},
                    {title: '名称',key: 'name'},
                    {title: '管理员',key: 'admin'},
                    {title: '创建时间',key: 'createTime'},
                    {
                    	title:'操作',key:'action',width:150,align:'center',
                    	render:(h,params)=>{
                    		return h('div',
                    			[
                    				h('Button',{
                    					props:{type:'primary',size:'small'},
                    					style:{marginRight:'5px'},
                    					on:{
                    						click:()=>{
                    							this.teameditor(params)
                    						}
                    					}
                    				},'修改'),
                    				h('Button',{
                    					props:{type:'error',size:'small'},
                    					on:{
                    						click:()=>{
                    							this.teamremove(params)
                    						}
                    					}
                    				},'删除'),
                    			]
                    		)
                    	}
                    }
                ],
                teamlist: [],
				addmember:{//添加成员数据
					isshow:false,
					Username:'',//登陆名
					Password:'',//密码
					rePassword:'',//重复密码
					Name:'',//用户显示的名称
					btnloading:true,
				},
				editormember:{
					isshow:false,
					id:'',
					Password:'',//密码
					rePassword:'',//重复密码
					Name:'',//用户显示的名称
					btnloading:true,
				},
				editormemberrole:{
					isshow:false,
					id:'',
					selects:[],policylist:[],
                	btnloading:true,
				},
				memberselectdata:[],//成员左侧选择数据
				membertitle: [
                    {type: 'selection',width: 60,align: 'center'},
                    {title: '登陆账号',key: 'username'},
                    {title: '用户名',key: 'name'},
                    {title:'角色',key:'role'},
                    {title:'操作',key:'action',width:200,align:'center',
                    	render:(h,params)=>{
                    		return h('div',
                    			[
                    				h('Button',{
                    					props:{type:'primary',size:'small'},
                    					style:{marginRight: '5px'},
                    					on:{
                    						click:()=>{
                    							this.membereditor(params)
                    						}
                    					}
                    				},'修改'),
                    				h('Button',{
                    					props:{type:'primary',size:'small'},
                    					style:{marginRight: '5px'},
                    					on:{
                    						click:()=>{
                    							this.membereditorrole(params);
                    						}
                    					}
                    				},'角色设置'),
                    				h('Button',{
                    					props:{type:'error',size:'small'},
                    					on:{
                    						click:()=>{
                    							this.memberremove(params)
                    						}
                    					}
                    				},'删除'),
                    			]
                    		)
                    	}
                    }
                ],
                memberlist: [],
                addrole:{
                	isshow:false,name:'',discribe:'',
                	btnloading:true,
                },
                editorrole:{
                	isshow:false,name:'',discribe:'',id:'',
                	btnloading:true,
                },
                roleselectdata:[],//角色左侧选择数据
                roletitle: [
                    {type: 'selection',width: 60,align: 'center'},
                    {title: '名称',key: 'name'},
                    {title: '备注',key: 'mark'},
                    {title:'操作',key:'action',width:200,align:'center',
                    	render:(h,params)=>{
                    		return h('div',
                    			[
                    				h('Button',{
                    					props:{type:'primary',size:'small'},
                    					style:{marginRight: '5px'},
                    					on:{
                    						click:()=>{
                    							this.roleeditor(params)
                    						}
                    					}
                    				},'修改'),
                    				h('Button',{
                    					props:{type:'primary',size:'small'},
                    					style:{marginRight: '5px'},
                    					on:{
                    						click:()=>{
                    							this.enterpolicy(params)
                    						}
                    					}
                    				},'权限配置'),
                    				h('Button',{
                    					props:{type:'error',size:'small',},
                    					on:{
                    						click:()=>{
                    							this.roleremove(params);
                    						}
                    					}
                    				},'删除')
                    			]
                    		)
                    	}
                    }
                ],
                rolelist:[],
			}
		},
		created(){
			this.GetTeamList();
			this.GetRoleList();
		},
		methods:{
			changeTab(name){//改变tab页
				if(name=='team'){this.GetTeamList();}
				else if(name=='member'){this.GetMemberList();}
				else if(name=='role'){this.GetRoleList();}
			},
        	teameditor(row){//组修改
        		console.log(row);
        		this.editorteam.teamname=row.row.name;
        		this.editorteam.index=row.index;
        		this.editorteam.teamId=row.row.groupid;
        		this.editorteam.nowleader={name:row.row.admin,id:row.row.leaderid}
        		this.$store.dispatch('P_getChildGroupMember',row.row.groupid)
        		.then((response)=>{
        			console.log(response);
        			let data=response.data.Data.members;
        			for(let key in data){
        				this.editorteam.options.push({value:data[key].Id,label:data[key].Name})
        			}
        			this.editorteam.isshow=true;
        		},(error)=>{
        			console.log(error);
        		})
        	},
        	teamselects(selection){//组table选项发生变化时，返回的选择对象
        		this.teamselectdata=selection;
        	},
        	teamremove(row){//组单行删除，返回当前行数据,删除操作
        		this.removeTeamAjax([row.row.groupid]);
        	},
        	teamremoveplus(){//多选删除
        		let arr=[];
        		for(let key in this.teamselectdata){arr.push(this.teamselectdata[key].groupid)}
        		this.removeTeamAjax(arr);
        	},
        	removeTeamAjax(arr){//删除组请求
        		if(arr.length==0){return;}
        		this.$store.dispatch('P_DeleteGroup',{Id:arr})
        		.then((response)=>{
        			console.log(response);
        			if(response.status==200){
        				this.$Message.success('删除成功');
        				this.GetTeamList();
        			}
        		},(error)=>{console.log(error);this.$store.commit('ErrorTip',error);})
        	},
        	addteamok(){//确认添加组
        		console.log(this.addteam);
        		setTimeout(function(){
        			//模拟ajax请求。添加失败，添加成功，做判断
        			this.addteam.btnloading=false;
        			setTimeout(function(){this.addteam.btnloading=true;}.bind(this),0)
        		}.bind(this),500)
        		for(let key in this.addteam){
        			if(!this.addteam[key]){this.$Message.error({content:'内容填写不完整',duration:2});return;}
        		}
        		if(this.addteam.pwd!==this.addteam.repwd){
        			this.$Message.error({content:'两次密码不一致',duration:2});return;
        		}
        		this.$store.dispatch('P_addGroup',{Groupname:this.addteam.teamname,LeaderUsername:this.addteam.username,LeaderPassword:this.addteam.pwd,LeaderName:this.addteam.leadername})
        		.then((response)=>{
        			if(response.status==200){this.$Message.error({content:'系统未知错误，请尝试重新提交',duration:2});}
        			if(response.status==201){
        				console.log(response);
        				this.GetTeamList();
        				this.addteamcancel();
        			}
        		},(error)=>{
        			console.log(error);
        			this.$store.commit('ErrorTip',error);
        		})
        	},
        	addteamcancel(){//取消添加组
        		//重置数据
        		this.addteam={isshow:false,teamname:'',username:'',pwd:'',repwd:'',leadername:'',btnloading:true}
        	},
        	editorteamok(){//确认修改组
        		console.log(this.editorteam);
        		setTimeout(function(){
        			//模拟ajax请求。失败，成功，做判断
        			this.editorteam.btnloading=false;
        			setTimeout(function(){this.editorteam.btnloading=true;}.bind(this),0)
        		}.bind(this),500)
        		if(this.editorteam.teamname==''){this.$Message.error({content:'组名不能为空',duration:2});return;}
        		if(!this.editorteam.choicechange){//不修改管理员
        			//走不添加新成员的ajax，将老的leader传上去
        			this.$store.dispatch('P_editorGroupNoAdd',{Id:this.editorteam.teamId,Groupname:this.editorteam.teamname,Leader:this.editorteam.nowleader.id})
        			.then((response)=>{
        				console.log(response);
        				if(response.status==200){
	        				this.GetTeamList();
	        				this.editorteamcancel();
	        			}
        			},(error)=>{
        				console.log(error);
        			})
        		}else{//修改管理员
        			if(this.editorteam.radio=='新添加'){//新添加
        				if(this.editorteam.username==''||this.editorteam.pwd==''||this.editorteam.repwd==''||this.editorteam.leadername==''){this.$Message.error({content:'新添加用户信息不全',duration:2});return;}
        				if(this.editorteam.pwd!==this.editorteam.repwd){this.$Message.error({content:'两次密码不一',duration:2});return;}
        				//走新添加用户
        				this.$store.dispatch('P_editorGroupAdd',{Id:this.editorteam.teamId,Groupname:this.editorteam.teamname,LeaderUsername:this.editorteam.username,LeaderPassword:this.editorteam.pwd,LeaderName:this.editorteam.leadername})
        				.then((response)=>{
	        				console.log(response);
	        				this.GetTeamList();
	        			},(error)=>{
	        				console.log(error);
	        			})
        			}else{//已有中筛选
        				if(this.editorteam.choicemember==''){this.$Message.error({content:'请选择您要指派的管理员',duration:2});return;}
        				//走不添加新成员的ajax
        				this.$store.dispatch('P_editorGroupNoAdd',{Id:this.editorteam.teamId,Groupname:this.editorteam.teamname,Leader:this.editorteam.choicemember})
	        			.then((response)=>{
	        				console.log(response);
	        				if(response.status==200){
	        					this.GetTeamList();
	        					this.editorteamcancel();
	        				}
	        			},(error)=>{
	        				console.log(error);
	        				this.$store.commit('ErrorTip',error);
	        			})
        			}
        		}
        	},
        	editorteamcancel(){//取消修改组名
        		this.editorteam={isshow:false,index:'',teamId:'',teamname:'',nowleader:{name:'',id:''},choicechange:false,
            		radio:'新添加',choicemember:"",options:[],username:'',pwd:'',repwd:'',leadername:'',
            		btnloading:true,
            	}
        	},
			membereditor(row){//成员修改
				this.editormember.Name=row.row.name;
				this.editormember.id=row.row.userid;
				this.editormember.isshow=true;
				console.log(row);
			},
			membereditorrole(row){//成员角色设置
				console.log(row);
				this.editormemberrole.id=row.row.userid;
				for(let key in this.rolelist){
					this.editormemberrole.policylist.push({value:this.rolelist[key].id,label:this.rolelist[key].name});
				}
				for(let key in row.row.roles){
					this.editormemberrole.selects.push(row.row.roles[key].Id);
				}
				this.editormemberrole.isshow=true;
			},
			memberremove(row){//单个成员删除
				this.removeMemberAjax([row.row.userid])
			},
			memberselect(selection){//成员选择发生变化
				console.log(selection);
				this.memberselectdata=selection;
			},
			memberremoveplus(){//成员批量删除
				let arr=[];
				for(let key in this.memberselectdata){
					arr.push(this.memberselectdata[key].userid);
				}
				this.removeMemberAjax(arr);
			},
			removeMemberAjax(arr){//删除成员请求
				if(arr.length==0){return;}
        		this.$store.dispatch('P_DeleteMember',{Id:arr})
        		.then((response)=>{
        			console.log(response);
        			if(response.status==200){
        				this.$Message.success('删除成功');
        				this.GetMemberList();
        			}
        		},(error)=>{console.log(error);this.$store.commit('ErrorTip',error);})
			},
			addmemberok(){//确定添加成员
				console.log(this.addmember);
				setTimeout(function(){
        			//模拟ajax请求。添加失败，添加成功，做判断
        			this.addmember.btnloading=false;
        			setTimeout(function(){this.addmember.btnloading=true;}.bind(this),0)
        		}.bind(this),500)
				//开头重置btnloading
				for(let key in this.addmember){
					if(this.addmember[key]==""){this.$Message.error({content:'填写不全',duration:2});return;}
				}
				if(this.addmember.Password!==this.addmember.rePassword){this.$Message.error({content:'两次密码不一',duration:2});return;}
				//请求
				this.$store.dispatch('P_AddMember',{Username:this.addmember.Username,Password:this.addmember.Password,Name:this.addmember.Name})
				.then((response)=>{
					console.log(response);
					if(response.status==200){this.$Message.error({content:'未知错误，请重新提交',duration:2});}
					if(response.status==201){
						this.GetMemberList();
						this.addmembercancel();
					}
				},(error)=>{
					this.$store.commit('ErrorTip',error);
				})
			},
			addmembercancel(){//取消添加成员
				this.addmember={isshow:false,Username:'',Password:'',rePassword:'',Name:'',btnloading:true,}
			},
			editormemberok(){//确定修改成员
				setTimeout(function(){
        			//模拟ajax请求。添加失败，添加成功，做判断
        			this.editormember.btnloading=false;
        			setTimeout(function(){this.editormember.btnloading=true;}.bind(this),0)
        		}.bind(this),500)
				console.log(this.editormember);
				//开头重置btnloading
				for(let key in this.editormember){
					if(this.editormember[key]==""){this.$Message.error({content:'填写不全',duration:2});return;}
				}
				if(this.editormember.Password!==this.editormember.rePassword){this.$Message.error({content:'两次密码不一',duration:2});return;}
				//请求
				this.$store.dispatch('P_EditorMember',{UserId:this.editormember.id,Password:this.editormember.Password,Name:this.editormember.Name})
				.then((response)=>{
					console.log(response);
					if(response.status==200){
						this.GetMemberList();
						this.editormembercancel();
					}
				},(error)=>{console.log(error);this.$store.commit('ErrorTip',error);})
			},
			editormembercancel(){//取消修改成员
				this.editormember={isshow:false,id:'',Password:'',rePassword:'',Name:'',btnloading:true}
			},
			editormemberroleok(){//确定成员的角色设置
				setTimeout(function(){
        			//模拟ajax请求。添加失败，添加成功，做判断
        			this.editormemberrole.btnloading=false;
        			setTimeout(function(){this.editormemberrole.btnloading=true;}.bind(this),0)
        		}.bind(this),500)
				console.log(this.editormemberrole);
				this.$store.dispatch('P_EditorMemberRole',{UserId:this.editormemberrole.id,RoleIds:this.editormemberrole.selects})
				.then((response)=>{
					console.log(response);
					if(response.status==200){
						this.GetMemberList();
						this.editormemberrolecancel();
					}
				},(error)=>{
					console.log(error);
					this.$store.commit('ErrorTip',error);
				})
			},
			editormemberrolecancel(){//取消成员角色设置
				this.editormemberrole={isshow:false,id:'',selects:[],policylist:[],btnloading:true}
			},
			addroleok(){//确定添加角色
				setTimeout(function(){
        			//模拟ajax请求。添加失败，添加成功，做判断
        			this.addrole.btnloading=false;
        			setTimeout(function(){this.addrole.btnloading=true;}.bind(this),0)
        		}.bind(this),500)
				console.log(this.addrole);
				//设置loading
				if(this.addrole.name==""||this.addrole.discribe==""){
					this.$Message.error({content:'角色名或描述不能为空',duration:2});return;
				}
				//请求
				this.$store.dispatch('P_AddRole',{Name:this.addrole.name,Des:this.addrole.discribe})
				.then((response)=>{
					console.log(response);
					if(response.status==200){this.$Message.error({content:'未知错误',duration:2});}
					if(response.status==201){
						this.GetRoleList();
						this.addrolecancel();
					}
				},(error)=>{
					console.log(error);this.$store.commit('ErrorTip',error);
				})
			},
			addrolecancel(){//取消添加角色
				this.addrole={isshow:false,name:'',discribe:'',btnloading:true}
			},
			roleeditor(row){//角色修改
				console.log(row);
				this.editorrole.name=row.row.name;
				this.editorrole.discribe=row.row.mark;
				this.editorrole.id=row.row.id;
				this.editorrole.isshow=true;
			},
			editorroleok(){//确定修改角色信息
				setTimeout(function(){
        			//模拟ajax请求。添加失败，添加成功，做判断
        			this.editorrole.btnloading=false;
        			setTimeout(function(){this.editorrole.btnloading=true;}.bind(this),0)
        		}.bind(this),500)
				console.log(this.editorrole);
				//设置loading
				if(this.editorrole.name==""||this.editorrole.discribe==""){
					this.$Message.error({content:'角色名或描述不能为空',duration:2});return;
				}
				//请求
				this.$store.dispatch('P_EditorRole',{Name:this.editorrole.name,Des:this.editorrole.discribe,Id:this.editorrole.id})
				.then((response)=>{
					console.log(response);
					if(response.status==200){
						this.editorrolecancel();
						this.GetRoleList();
					}
				},(error)=>{
					console.log(error);this.$store.commit('ErrorTip',error);
				})
			},
			editorrolecancel(){//取消修改角色信息
				this.editorrole={isshow:false,name:'',discribe:'',id:'',btnloading:true}
			},
			roleremove(row){//单个角色删除
				this.removeRoleAjax([row.row.id])
			},
			roleselect(selection){//角色选择发生变化
				this.roleselectdata=selection;
			},
			roleremoveplus(){//角色批量删除
				console.log(this.roleselectdata);
				let arr=[];
				for(let key in this.roleselectdata){
					arr.push(this.roleselectdata[key].id);
				}
				this.removeRoleAjax(arr);
			},
			removeRoleAjax(arr){//删除角色ajax
				if(arr.length==0){return;}
        		this.$store.dispatch('P_DeleteRole',{Id:arr})
        		.then((response)=>{
        			console.log(response);
        			if(response.status==200){
        				this.$Message.success('删除成功');
        				this.GetRoleList();
        			}
        		},(error)=>{console.log(error);this.$store.commit('ErrorTip',error);})
			},
			enterpolicy(row){//进入权限配置
				console.log(row);
				this.$router.push({path:'/pmanage/app/policymanage',query:{RoleName:row.row.name}})
			},
			/******获取数据处理的方法******/
			GetTeamList(){//获取teamlist
				this.$store.dispatch('P_getOneStepTeam')
				.then((response)=>{
					console.log(response);
					this.teamlist.splice(0);
					let data=response.data.Data.groups;
					for(let key in data){
						let time=new Date(data[key].Created);
						time=time.toLocaleDateString()+' '+time.toTimeString().split(' ')[0];
						this.teamlist.push({name:data[key].Name,admin:data[key].Leader.Name,createTime:time,groupid:data[key].Id,leaderid:data[key].Leader.Id})
					}
				},(error)=>{console.log(error);this.$store.commit('ErrorTip',error);})
			},
			GetMemberList(){//获取成员list
				this.$store.dispatch('P_getGroupMember')
				.then((response)=>{
					console.log(response);
					this.memberlist.splice(0);
					let data=response.data.Data.members;
					for(let key in data){
						let arr=[];
						for(let k in data[key].Roles){arr.push(data[key].Roles[k].Name)}
						this.memberlist.push({name:data[key].Name,username:data[key].Username,role:arr.join(','),roles:data[key].Roles,userid:data[key].Id})
						arr=null;
					}
				},(error)=>{console.log(error);this.$store.commit('ErrorTip',error);})
			},
			GetRoleList(){//获取rolelist
				this.$store.dispatch('P_getGroupRole')
				.then((response)=>{
					console.log(response);
					this.rolelist.splice(0);
					let data=response.data.Data.roles;
					for(let key in data){
						this.rolelist.push({name:data[key].Name,mark:data[key].Des,id:data[key].Id})
					}
				},(error)=>{console.log(error);this.$store.commit('ErrorTip',error);})
			}
		}
	}
</script>

<style lang='less' scoped>
	div.pmanage_index{
		padding:10px 10px 0 10px;
		>div.title{
			p.bottomtitle{padding-left:20px;}
		}
		>div.content{
			background: #fff;margin-top:10px;
			padding:10px;
		}
	}
	div.addteam,div.editorteam,div.addmember{
		>div.title{
			font-size:13px;line-height:25px;padding-bottom:10px;
			border-bottom:1px solid #4f6adc;
		}
		>div{
			margin-bottom:20px;
			>span{display: inline-block;width:100px;>b{color:#e20000;}}
		}
	}
	div.editorteam{
		>div{
			>a{margin-left:10px;color:#2d8cf0;}
		}
		>div.changeleader{
			>div.old{
				margin-bottom:20px;
				>span{display: inline-block;width:100px;}
			}
			>div.new{
				>div{
					margin-bottom:20px;
					>span{display: inline-block;width:100px;}
				}
			}
		}
	}
	div.addrole,div.editormember{
		>div.title{
			font-size:13px;line-height:25px;padding-bottom:10px;
			border-bottom:1px solid #4f6adc;
		}
		>div{
			margin-bottom:20px;
		}
	}
</style>