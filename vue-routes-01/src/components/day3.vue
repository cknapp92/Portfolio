<template>
<div id="app" class="container text-center">
<h3>Grocery List</h3>
<input id="itemBox" v-on:keyup.enter="addItem" />
<button @click="addItem">Add to list</button>
<div>
<div class="list-group">
  <a class="list-group-item" v-for="item in items">{{ item.text }}
    <button @click="removeItem(i)">x</button>
  </a>
</div>
</div>
</div>
</template>

<script>

export default({
  data () {
    return {
      items: [
        { text: 'coffee' },
        { text: 'eggs' },
        { text: 'bread' }
      ]
    }
  },
  methods: {
    addItem () {
      var input = document.getElementById('itemBox')
      if (input.value !== '') {
        this.items.push({
          text: input.value
        })
        input.value = ''
      }
    },
    removeItem (i) {
      this.items.splice(i, 1)
    }
  }
})
</script>

<style>

#app .container {
  background-color: lightblue;
  max-width: 400px;
}

#itemBox {
  margin-bottom: 10px;
}

</style>
