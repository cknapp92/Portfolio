import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import home from '@/components/home'
import day from '@/components/day'
import about from '@/components/about'
import projects from '@/components/projects'
import test from '@/components/test'
import axios from 'axios'
import VueAxios from 'vue-axios'
import footer from '@/components/footer'

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
    }
  ]
})
