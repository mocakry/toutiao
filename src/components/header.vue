<template>
	<header>
		<i class='iconfont icon-email' v-if='isShow'></i>
		<i class='iconfont icon-back' v-else @click='stepBack'></i>
		<span>{{title}}</span>
		<i class='iconfont icon-refresh' v-if='isShow'></i>
		<i class='iconfont icon-search' v-if='isShow'></i>
	</header>
</template>

<script type="text/javascript">
	import router from '@/router';
	export default {
		data(){
			return {
			
			}
		},
		computed:{
			isShow(){
				return this.$store.state.isShow;
			},
			title(){
				return this.$store.state.title;
			}
		},
		methods:{
			stepBack(){
				router.push('/recommend');
				this.$store.commit('title','今日头条');
				this.$store.commit('isShow',true);
			}
		}
	}
</script>

<style src="@/assets/iconfont/iconfont.css"></style>

<style lang='scss' scoped>
	header{
		height:.8rem;
		background:#d43d3d;
	}
	i{
		color:#fff;
		font:.3rem "";
		display: inline-block;
		text-align: center;
		position:relative;
		top:-.5rem;
	}
	i.icon-email{
		width:.25rem;
		left:.2rem;
	}
	i.icon-refresh{
		left:2rem;
	}
	i.icon-search{
		left:3.9rem;
	}
 	span{
	color:#fff;
	display: inline-block;
	left: 2.2rem;
	font:.3rem "";
	position: relative;
	top:-.5rem;
} 
</style>