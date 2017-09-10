<template>
<div class="app container text-center">
<h3 v-once>{{ title }}</h3>
  <div class="inputBox">
    <input id="itemBox" size=8 v-model="input" v-on:keypress.enter="addItem" />
    <button type="button" class="btn btn-primary btn-sm" @click="addItem">{{ 'Add ' + input }}</button>
    <p v-if="ifTyping">Typing...</p>
    <p v-else="!ifTyping">.</p>
  </div>

<div class="list-group" v-for="item in items">
    <a class="list-group-item">{{ item.text }}<button type="button" class="smallButton btn btn-primary btn-xs" @click="removeItem(i)">x</button></a>
    </label>
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
      checked: false,
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

.inputBox {
  display: inline-block;
}

.smallButton {
  margin-left: 10px;
}

.list-group {
  margin-top: 5px;
}

</style>
