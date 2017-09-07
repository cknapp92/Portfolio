<template>

<div id="nytApp" class="container text-center">
  <h3>New York Times Top Stories</h3>

  <div v-for="result in results">
        <div class="well">{{ result.title }}</div>
      <div class="well">{{ result.abstract }}</div>
    </div>
  </div>

</template>

<script>

let axios = require('axios')

export default ({
  data () {
    return {
      results: []
    }
  },
  mounted () {
    axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=7ad03a5364324ecfbb946d981e7fb7f0')
    .then(response => { this.results = response.data.results })
  }
})

</script>
