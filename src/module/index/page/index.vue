<template>
  <div id="index">
  	<viewtop></viewtop>
  	<div class='content'>
  		<router-view></router-view>
  	</div>
  	<viewbottom></viewbottom>
  </div>
</template>

<script>
 import viewtop from '../components/viewtop.vue';
 import viewbottom from '../components/viewbottom.vue';
 export default{
 	name:'index',
 	data(){
 		return{
 		}
 	},
 	methods:{
 		
 	},
 	components:{
 		viewtop,viewbottom
 	}
 }
</script>

<style lang='less' scoped>
@import '../../../assets/css/variables.less';
#index{
	
}
</style>
