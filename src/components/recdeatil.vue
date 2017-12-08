<template>
	<section>
		<h3>{{info.title}}</h3>
		<div class='intro'>
			<img :src='info.media_info.avatar_url' class='media_image'/>
			<p class='name'>{{info.media_info.name}}</p>
			<p class='time'>{{info.datetime}}</p>
			<button>关注</button>
		</div>
		<div class='container'>
			{{info.abstract}}
			<a :href='info.share_url'>原文链接</a>
		</div>
		<p class='keywords'>关键词</p>
		<ul>
			<li v-for='data in keywords'>{{data}}</li>
		</ul>
	</section>
</template>

<script type="text/javascript">
	import recommend from '@/assets/data/recommend.js';
	export default {
		data(){
			return {

			}
		},
		computed:{
			info(){
				var id = this.$route.params.id;
				for(var i = 0 ; i < recommend.length ; i++){
					if(id == recommend[i].tag_id){
						return recommend[i];
					}
				}
			},
			keywords(){
				var arr = [];
				if(this.info.keywords){
					arr = this.info.keywords.split(',');
				}
				
				return arr;
			}
		},
		mounted(){
			this.$store.commit('isShow',false);
			this.$store.commit('title','详情页');
		}
	}
</script>

<style lang='scss' scoped>
	img,h3,div,p,a,ul{
		padding: 0;
		margin: 0;
	}
	h3{
		font:700 .26rem/.5rem '';
		margin-left: .5rem;
	}
	.intro{
		overflow: hidden;
	}
	.media_image{
		float: left;
		width:.5rem;
		height:.5rem;
		margin-top:-.5rem;
		position: relative;
		top:.5rem;
		left:.3rem;
		border-radius: 50%;
	}
	.name,.time{
		float: left;
		font:.2rem/.5rem '';
		margin-left: 1rem;
	}
	button{
		float: left;
		width:1rem;
		height:.45rem;
		margin-left: 1rem;
		margin-top: .1rem;
	}
	.container{
		font:.4rem/.6rem "";
		text-indent: 2em;
		padding:.3rem;
		a{
			display: block;
			text-decoration: none;
			color:#666;
			margin-left:-.8rem;
			margin-top:.2rem;
		}
	}
	ul{
		padding-left:.1rem;
		overflow: hidden;
		li{
			list-style:none;
			float: left;
			font:.16rem/.6rem "";
			width:1.2rem;
			height:.6rem;
			border:1px solid #000;
			text-align: center;
			margin:0 .2rem .2rem 0;
		}
	}
	.keywords{
		font:.3rem/.5rem '';
		margin-left: .2rem;
	}
</style>