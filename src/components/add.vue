<template>
	<section>
		<p>点击删除以下频道</p>
		<ul>
			<li v-for='data,index in datalistHave'  @click='remove(index)'>{{data}}</li>
		</ul>
		<p>点击添加以下频道</p>
		<ul>
			<li v-for='data,index in datalistNot'  @click='add(index)'>{{data}}</li>
		</ul>
	</section>
</template>

<script type="text/javascript">
	import {mapState} from 'vuex';
	export default {
		data(){
			return {
				show:true
			}
		},
		computed:{
			...mapState(['datalistHave','datalistNot'])
		},
		methods:{
			remove(index){
				if(index != 0 && index != 1){
					this.datalistNot.push(this.datalistHave[index]);
					this.datalistHave.splice(index,1);
					this.$store.commit('datalist',this.datalistHave);
				}
			},
			add(index){
				this.datalistHave.push(this.datalistNot[index]);
				this.datalistNot.splice(index,1);
				this.$store.commit('datalist',this.datalistHave);
			}
		},
		mounted(){
			this.$store.commit('datalist',this.datalistHave);
			this.$store.commit('isShow',false);
			this.$store.commit('title','频道管理');
		}
	}
</script>

<style lang='scss' scoped>
	p{
		margin:0;
		padding:0;
		font:.2rem/.3rem "";
		color:#666;
	}	
	ul{
		margin:10px 0 0;
		padding:0;
		overflow: hidden;
	}
	li{
		float: left;
		list-style: none;
		font:.2rem/.5rem '';
		width:1rem;
		height:.5rem;
		text-align: center;
		border:1px solid #000;
		margin:0.1rem 0.1rem;
	}
</style>