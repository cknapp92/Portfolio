<template>
  <div id="app">
    <img src="../../images/lambda.jpg">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import header from '@/components/header.vue'
export default {
  components: {
    appHeader: header
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
