<template>
	<section>
		<ul>
			<li v-for='data,index in datalist' @click='stepToDetail(data.tag_id)'>
				<div class='title'>{{data.title}}</div>
				<div class='img'>
					<img  v-for='imgdata in data.image_list' :src='imgdata.url'/>
				</div>
				<p class='media_name'>{{media[index]}}</p>
			</li>   
		</ul>	
	</section>
</template>

<script type="text/javascript">
	import entertainment from '@/assets/data/entertainment.js';
	import router from '@/router';
	export default {
		data(){
			return {

			}
		},
		computed:{
			datalist(){
				return entertainment;
			},
			media(){
				var arr = [];
				for(var i = 0 ; i < entertainment.length ; i++){
					if(entertainment[i].media_info){
						arr.push(entertainment[i].media_info.name);
					}else{
						arr.push('null');
					}
				}
				return arr;
			}
		},
		methods:{
			stepToDetail(id){
				router.push({name:'enterdetail',params:{id:id}});
			}
		}
	}
</script>

<style lang='scss' scoped>
	ul,p{
		padding: 0;
		margin: 0;
	}
	ul{
		list-style: none;
	}
	li{
		font:.3rem/.5rem '';
		border-bottom: 1px dashed #666;
	}
	.img{
		img{
			width:2.4rem;
			margin-right: .1rem;
		}
	}
	.media_name{
		color:red;
	}
</style>