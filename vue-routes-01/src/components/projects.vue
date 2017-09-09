<template>
  <div class="projects text-center container">
   <h1>{{ msg }}</h1>
  <div class="container-fluid bg-3 text-center">
    <div class="col-sm3">
   <router-link to="/day1" class="btn text"><a>Subreddit Client</a></router-link>
   </div>
   <div class="col-sm3">
     <router-link to="/day2" class="btn text"><a>New York Times Top Stories Client</a></router-link>
   </div>
   <div class="col-sm3">
     <router-link to="/day3" class="btn text"><a>Interactive Grocery List</a></router-link>
   </div>
  </div>
  </div>

</template>

<script>

export default({
  data () {
    return {
      msg: 'Projects'
    }
  }
})

</script>

<style>

.projects {
  background-color: lightgray;
}

.projects ul li {
  font-size: 20px;
  max-width: 300px;
}

</style>
