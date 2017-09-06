import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import day from '@/components/day'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/day/:name',
      name: 'day',
      component: day
    }
  ]
})
