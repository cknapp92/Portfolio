<template>
<div id="redditApp"> <!--always make sure to use an id. Necessary for connecting with the Vue instance in main.js file-->

<div class="reddit-list container col align-self-center">
<h3 class="header">Top Threads: /r/{{ subreddit }}   <span class="badge badge-secondary">New</span></h3>
  <h5><span class="glyphicon glyphicon-time"></span> September 7th, 2017</h5>
  <div class="row" v-for="post in posts">
    <div class="col-sm-4">
    <img v-bind:src="post.data.thumbnail" alt="">
    </div>
    <div class="col-sm-8">
    <a v-bind:href="post.data.url" class="text-success">{{ post.data.title }}</a>
   </div>
</div>
</div>

</div>
</template>

<script>

let axios = require('axios')

export default {
  name: 'day1',
  data () {
    return {
      posts: []
    }
  },
  props: ['subreddit', 'limit'],
  created () {
    let vm = this
    axios.get('https://www.reddit.com/r/' + this.subreddit + '/.json?limit=' + this.limit)
         .then(response => {
           vm.posts = response.data.data.children
         })
  }
}


</script>

<style>

#redditApp {
  margin-top: 50px;
  margin-bottom: 50px;
}

.reddit-list {
  width: 600px;
  background: lightgray;
  border: solid 2px #f5f5f5;
  border-radius: 10px;
  padding: 10px;
}

.reddit-list img {
  border-radius: 5px;
  border: solid 1px #000;
  margin: 10px;
}

.reddit-list .col-sm-8 {
  padding: 20px;
}

</style>
