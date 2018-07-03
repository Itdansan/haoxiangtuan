import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index/index'
import Login from '@/views/user/Login'
Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
