// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import day1 from '@/components/day1'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

new Vue({
  el: '#redditApp',
  router,
  template: '<day1/>',
  components: { day1 },
  render: h => h(day1, {props: {subreddit: 'The_Donald', limit: 5}})
})
