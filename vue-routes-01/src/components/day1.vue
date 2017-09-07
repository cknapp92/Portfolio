<template>
<div id="redditApp"> <!--always make sure to use an id. Necessary for connecting with the Vue instance in main.js file-->

<div class="reddit-list container col align-self-center">
<h3 class="header">Top Threads: /r/{{ subreddit }}   <span class="badge badge-secondary">New</span></h3>
<ul class="list-group">
    <li v-for="post in posts">
  <a v-bind:href="post.data.url" class="text-success">{{ post.data.title }}</a>
    </li>
</ul>
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
  mounted: function () {
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

}

.reddit-list {
  width: 600px;
  padding: 15px;
  background: black;
  border: solid 2px #f5f5f5;
  border-radius: 4px;
}

.header {
  margin-bottom: 30px;
}

.reddit-list h3 {
  font-weight: bold;
}

.reddit-list ul {
  font-size: 17px;
  list-style-type: none;
  padding: 0;
}

.reddit-list ul li {
  margin-bottom: .5rem;
}
</style>
