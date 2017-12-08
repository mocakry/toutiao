import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		//soh:true
		datalistHave:['推荐','娱乐','热点','社会','视频','科技','汽车'],
		datalistNot:[],
		isShow:true,
		title:'今日头条'
	},
	getters:{},
	actions:{},
	mutations:{
		datalist(state,payload){
			var datalist=['推荐','视频','热点','社会','娱乐','科技','汽车','体育','财经','军事','国际','时尚','游戏','旅游','历史','探索','美食','育儿','养生','故事','美文'];
			var datalistNot = [];
			for(var i = 0 ; i < datalist.length ; i++){
				var num = 0 ;
				for(var j = 0 ; j < payload.length ; j++){
					if(datalist[i] == payload[j]){
						break;
					}
					num++;
				}
				if(num == payload.length){
					datalistNot.push(datalist[i]);
				}
			}
			state.datalistNot = datalistNot ;
		},
		isShow(state,payload){
			state.isShow = payload ;
		},
		title(state,payload){
			state.title = payload ;
		}
	}
});

export default store ;