import Vue from 'vue'
import Router from 'vue-router'

import Add from '@/components/add.vue';
import Recommend from '@/components/recommend.vue';
import Recdeatil from '@/components/recdeatil.vue';
import Entertainment from '@/components/entertainment.vue';
import Enterdetail from '@/components/enterdetail.vue';
import Other from '@/components/other.vue';

Vue.use(Router)

export default new Router({
mode:'history',
  routes: [
    {
     	path:'/add',
     	component:Add
    },
    {
    	path:'/recommend',
    	component:Recommend
    },
    {
    	path:'/recdeatil/:id',
    	component:Recdeatil,
    	name:'recdeatil'
    },
    {
      path:'/entertainment',
      component:Entertainment
    },
    {
      path:'/enterdetail/:id',
      component:Enterdetail,
      name:'enterdetail'
    },
    {
      path:'/other',
      component:Other
    },
    {
    	path:'*',
    	redirect:'/recommend'
    }
  ]
})
