<template>
  <div class="day container">
   <h1 class="container text-center">{{ msg }} {{ $route.params.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'day',
  data () {
    return {
      msg: 'Day'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
