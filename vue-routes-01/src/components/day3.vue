<template>
<div class="app container text-center">
<h3>{{ title }}</h3>
  <div class="typing">
    <input id="itemBox" size=8 v-model="input" v-on:keyup.enter="addItem" />
    <button @click="addItem">{{ 'Add ' + input }}</button>
    <p v-if="ifTyping">Typing...</p>
    <p v-else="!ifTyping">.</p>
  </div>

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
      title: 'Grocery List',
      input: '',
      ifTyping: false,
      items: [
        { text: 'coffee' },
        { text: 'eggs' },
        { text: 'bread' }
      ]
    }
  },
  watch: {
    input: function (query) {
      this.ifTyping = true
      let vm = this
      setTimeout(function () {
        vm.ifTyping = false
      }, 500)
    }
  },
  methods: {
    addItem () {
      if (this.input !== '') {
        this.items.push({
          text: this.input
        })
        this.input = ''
      }
    },
    removeItem (i) {
      this.items.splice(i, 1)
    }
  }
})
</script>

<style>

.app {
  background-color: lightblue;
  max-width: 300px;
  border-radius: 5px;
  margin-top: 50px;
  margin-bottom: 100px;
}

#itemBox {
  margin-bottom: 5px;
}

.typing {
  display: inline-block;
}


.list-group {
  margin-top: 5px;
}

</style>
