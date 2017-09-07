<template>
  <div class="projects container">
   <h1 class="text-center">{{ msg }}</h1>
     <ul class="text-center">
     <router-link to="/day1" tag="li" class="btn text"><a>Reddit Client</a></router-link>
     </ul>
  </div>

</template>

<script>
export default {
  name: 'projects',
  data () {
    return {
      msg: 'My Projects'
    }
  }
}
</script>


<style>

.projects ul li {

font-size: 20px;

}

</style>
