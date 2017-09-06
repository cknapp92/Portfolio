import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import day from '@/components/day'
import about from '@/components/about'
import blog from '@/components/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/day/:name',
      name: 'day',
      component: day
    },
    {
      path: '/about/',
      name: 'about',
      component: about
    },
    {
      path: '/blog/',
      name: 'blog',
      component: blog
    }
  ]
})
