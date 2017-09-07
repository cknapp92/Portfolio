<template>
  <div class="home">
    <div class="container">
      <div class="jumbotron">
        <h1 class="text-success">Conrad Knapp</h1>
          <p class="text-success">111 Days, 111 Web Apps</p>
      </div>
   </div>

<!--<message-box></message-box>-->

  </div>
</template>

<script>
import message from '@/components/message.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home page'
    }
  },
  components: {
    messageBox: message // can clean this up by making key name === value and deleting the value
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
