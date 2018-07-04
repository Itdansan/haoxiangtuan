import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index/index'
import Login from '@/views/user/Login'
import ForgetPass from '@/views/user/ForgetPass'
import Register from '@/views/user/Register'
import Agreement from '@/views/user/Agreement'
import SetPass from '@/views/user/SetPass'
import ResetPass from '@/views/user/ResetPass'
Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
  	//首页
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/ForgetPass',
      name:'ForgetPass',
      component:ForgetPass
    },
    {
      path:'/Register',
      name:'Register',
      component:Register
    },
    {
      path:'/Agreement',
      name:'Agreement',
      component:Agreement
    },
    {
      path:'/SetPass',
      name:'SetPass',
      component:SetPass
    },
    {
      path:'/ResetPass',
      name:'ResetPass',
      component:ResetPass
    }
  ]
})
