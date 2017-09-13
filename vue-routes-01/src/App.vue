<template>
  <div id="app">
    <img src="../../images/lambda.jpg">
    <app-header></app-header>
    <router-view></router-view>
    <footer-btm></footer-btm>
  </div>

</template>

<script>
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'

export default {
  name: 'app',
  components: {
    appHeader: header,
    footerBtm: footer
  }
}

</script>
