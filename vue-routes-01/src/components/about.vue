<template>
  <div class="about text-center">
   <h1 v-once>{{ msg }}</h1>
   <p><span class="glyphicon glyphicon-map-marker"></span> Columbus, OH</p>
   <p><span class="glyphicon glyphicon-phone"></span> 614-460-0509</p>
   <p><span class="glyphicon glyphicon-envelope"></span> conrad.knapp@bc.edu</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'About me'
    }
  }
}
</script>
