<template>
  <div id="app">
    <img src="../../images/lambda.jpg">
    <app-header></app-header>
    <router-view></router-view>
    <div class="reddit-list container col align-self-center">
    <h3 class="header">Top Threads: /r/{{ subreddit }}   <span class="badge badge-secondary">New</span></h3>
    <ul class="list-group">
        <li v-for="post in posts">
      <a v-bind:href="post.data.url" class="text-success">{{ post.data.title }}</a>
        </li>
    </ul>
  </div>
  <footer-btm></footer-btm>
  </div>

</template>

<script>
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'

let axios = require('axios')
export default {
  name: 'app',
  data () {
    return {
      posts: []
    }
  },
  props: ['subreddit', 'limit'],
  mounted: function () {
    let self = this
    axios.get('https://www.reddit.com/r/' + this.subreddit + '/.json?limit=' + this.limit)
    .then(response => {
      self.posts = response.data.data.children
    })
  },
  components: {
    appHeader: header,
    footerBtm: footer
  }
}

</script>

<style>

.reddit-list {
  font-family: sans-serif;
  width: 500px;
  padding: 15px;
  background: black;
  border: solid 2px #ccc;
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
