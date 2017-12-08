<template>
	<section>
		<ul>
			<li v-for='data,index in datalist' @click='stepToDeatil(data.tag_id)'>
				<div class='title'>{{data.title}}</div>
				<div class='img'>
					<img  v-for='imgdata in data.image_list' :src='imgdata.url'/>
				</div>
			</li>   
		</ul>
	</section>
</template>

<script type="text/javascript">
	import recommend from '../assets/data/recommend.js';
	import router from '@/router';
	export default {
		data(){
			return {
					
			}
		},
		computed:{
			datalist(){
				return recommend ;
			}
		},
		methods:{
			stepToDeatil(id){
				router.push({name:'recdeatil',params:{id:id}});
			}
		},
		mounted(){
			//console.log(this.Show);
		}
	}
</script>

<style lang='scss' scoped>
	ul,li,img{
		padding:0;
		margin:0;
	}
	div{
		font:.3rem '';
	}
	.img{
		overflow: hidden;
		img{
			float: left;
			width:2.4rem;
			margin-right:.1rem;
		}
	}
</style>