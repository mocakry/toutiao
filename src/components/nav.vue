<template>
	<nav>
		<ul v-hover>
			<router-link to='/recommend' tag='li' activeClass='active'>推荐</router-link>
			<router-link to='/entertainment' tag='li' activeClass='active'>娱乐</router-link>
			<router-link v-for="data in datalist" to='/other' tag='li'>{{data}}</router-link>
		</ul>
		<router-link to="/add" tag="span">+</router-link>		
	</nav>
</template>

<script type="text/javascript">
	//import router from '../router';
	export default {
		data(){
			return {
				
			}
		},
		computed:{
			datalist(){
				var data = this.$store.state.datalistHave.slice(2);
				return data;
			}
		},
		directives:{
			hover(el){
				console.log(el);
			}
		}
	}
</script>

<style lang='scss' scoped>
	.active{
		color:#f85959;
	}
	nav{
		overflow: hidden;
		background:#ddd;
		height:.6rem;
	}
	ul{
		float:left;	
		margin:0;
		padding:0;
		height:.6rem;
		width:6.5rem;
	}
	li{
		float:left;
		list-style:none;
		font:.3rem/.6rem '';
		width:1rem;
		text-align: center;
	}
	span{
		float: right;
		display: inline-block;
		font:.4rem/.6rem '';
		width:.5rem;
		text-align: center;
		color:#f85959;
	}
</style>