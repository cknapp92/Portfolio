import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import home from '@/components/home'
import about from '@/components/about'
import projects from '@/components/projects'
import test from '@/components/test'
import axios from 'axios'
import VueAxios from 'vue-axios'
import footer from '@/components/footer'
import day1 from '@/components/day1'
import day2 from '@/components/day2'

Vue.use(VueAxios, axios)

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about/',
      name: 'about',
      component: about
    },
    {
      path: '/projects/',
      name: 'projects',
      component: projects
    },
    {
      path: '/test/',
      name: 'test',
      component: test
    },
    {
      path: '/footer/',
      name: 'footer',
      component: footer
    },
    {
      path: '/day1/',
      name: 'day1',
      component: day1
    },
    {
      path: '/day2/',
      name: 'day2',
      component: day2
    }
  ]
})
