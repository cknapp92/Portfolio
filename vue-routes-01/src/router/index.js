import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import home from '@/components/home'
import about from '@/components/about'
import projects from '@/components/projects'
import axios from 'axios'
import VueAxios from 'vue-axios'
import footer from '@/components/footer'
import day1 from '@/components/day1'
import day2 from '@/components/day2'
import day3 from '@/components/day3'
import day4 from '@/components/day4'
import day5 from '@/components/day5.vue'
import day6 from '@/components/day6.vue'
import day7 from '@/components/day7.vue'

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
    },
    {
      path: '/day3/',
      name: 'day3',
      component: day3
    },
    {
      path: '/day4/',
      name: 'day4',
      component: day4
    },
    {
      path: '/day5/',
      name: 'day5',
      component: day5
    },
    {
      path: '/day6/',
      name: 'day6',
      component: day6
    },
    {
      path: '/day7/',
      name: 'day7',
      component: day7
    }
  ]
})
