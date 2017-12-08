<template>
	<div class='index'>
		<top></top>
		<navs></navs>
		<router-view></router-view>
	</div>
</template>

<script>
	import top from './header.vue';
	import navs from './nav.vue';
	export default {
		data(){
			return {
				
			}
		},
		computed:{
			/*soh(){
				return this.$store.state.soh;
			}*/
		},
		components:{
			top,
			navs
			// entertainment
			//recommend,
		},
		mounted(){

		}
	}
</script>

