<template>
  <div id="app">
    <img src="../../images/heraldry.jpg">
    <router-view></router-view>
    <app-header></app-header>
  </div>
</template>

<script>
import header from '@/components/header.vue'
export default {
  name: 'app',
  components: {
    appHeader: header
  }
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
