<template>
	<div>
		main2
	</div>
</template>

<script>
	export default{
		watch:{
			'$store.state.powerconfig.searchstate'(n,o){
        		console.log('处罚search拉');
        	}
		}
	}
</script>

<style>
</style>