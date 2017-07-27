<template>
  <div id="index">
  	<top></top>
  	<leftnav :clickactive.sync='$store.state.powerconfig.clickactive'></leftnav>
  	<div class='routerView' :class='{clickactive:$store.state.powerconfig.clickactive}'>
  		<router-view></router-view>
  	</div>
  </div>
</template>

<script>
	import top from '../../components/top';
	import leftnav from	'../../components/leftnav';
	export default {
		data(){
			return{
			}
		},
		mounted(){
		},
		components:{top,leftnav}
	}
</script>

<style lang='less' scoped>
@import '../../../../assets/css/variables.less';
div#index{
	&:before,&:after{
			content: '';display: table;
	}
	background:@support-bg;min-height:100vh;
	div.routerView{
		&.clickactive{
			margin-left:37px;
		}
		margin:50px 0 0 180px;
	}
}
</style>
