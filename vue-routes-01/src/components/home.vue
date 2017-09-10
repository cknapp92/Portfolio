<template>
  <div class="home">
    <div class="container">
      <div class="jumbotron">
        <h1 class="text-success">Conrad Knapp</h1>
          <p class="text-default">111 Days of Vue.js</p>
          <router-link to="/projects" class="btn btn-primary btn-lg">Have a look</router-link>
      </div>
   </div>

  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      msg: 'Home page'
    }
  }
}

</script>

<style>

.jumbotron {
  background-color: #2A52BE;
  color: #fff;
  padding: 50px;
}

</style>
