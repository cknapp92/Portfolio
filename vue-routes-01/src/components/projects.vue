<template>
 <div class="projects text-center container">
     <h1 v-bind:style="[accentColor, headers]" v-once>{{ msg }}</h1>
  <div class="row text-center">
    <div class="col-sm-3">
    <div class="thumbnail">
      <img src="../../../images/lambda.jpg">
      <router-link to="/day1" class="btn text"><a>Subreddit Client</a></router-link>
     </div>
   </div>
    <div class="col-sm-3">
    <div class="thumbnail">
      <img src="../../../images/lambda.jpg">
      <router-link to="/day2" class="btn text"><a>NYT Top Stories Client</a></router-link>
     </div>
   </div>
    <div class="col-sm-3">
      <div class="thumbnail">
      <img src="../../../images/lambda.jpg">
      <router-link to="/day3" class="btn text"><a>Interactive Grocery List</a></router-link>
    </div>
  </div>
    <div class="col-sm-3">
    <div class="thumbnail">
      <img src="../../../images/lambda.jpg">
      <router-link to="/day4" class="btn text"><a>Something else</a></router-link>
    </div>
  </div>
  </div>
 </div>

</template>

<script>

export default({
  data () {
    return {
      msg: 'Projects',
      accentColor: {
        color: '#2A52BE'
      },
      headers: {
        fontFamily: 'helvetica',
        margin: '10px',
        fontWeight: 'bold'
      }
    }
  }
})

</script>

<style>

.projects {
  background-color: lightgray;
}

.thumbnail {
  padding: 0 0 15px 0;
  border: none;
  border-radius: 0;
}

.thumbnail img {
    width: 100%;
    height: 100%;
    margin-bottom: 0px;
}

</style>
