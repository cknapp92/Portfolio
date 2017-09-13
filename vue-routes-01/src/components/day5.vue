<template>
  <div id="card" class="container" style="width:40rem;">
  <h3>{{ title }}</h3>
  <button v-bind:disabled="disabled" v-bind:class="{'btn btn-secondary' : normal, 'btn btn-secondary active' : active, 'btn btn-outline-secondary' : outline, 'btn btn-secondary btn-sm' : small, 'btn btn-secondary btn-lg' : large, 'btn btn-secondary btn-block' : block }" v-bind:style="styles">Button</button>
  <hr>
  <ul>
    <li><input type="checkbox" v-model="disabled"><label>disabled</label></li>
    <li><input type="checkbox" v-model="active"><label>active</label></li>
    <li><input type="checkbox" v-model="normal"><label>normal</label></li>
    <li><input type="checkbox" v-model="outline"><label>outline</label></li>
    <li><input type="checkbox" v-model="small"><label>small</label></li>
    <li><input type="checkbox" v-model="large"><label>large</label></li>
    <li><input type="checkbox" v-model="block"><label>block</label></li>
    <li><input type="text" v-model="backgroundColor"><label>background color</label></li>
  </ul>
  </div>
</template>

<script>
export default({
  data () {
    return {
      title: 'Bootstrap Button Factory',
      disabled: false,
      active: false,
      normal: false,
      outline: false,
      block: false,
      small: false,
      large: false,
      backgroundColor: '#CCCCCC'
    }
  },
  computed: {
    styles: function () {
      return {
        background: this.backgroundColor
      }
    }
  }
})
</script>

<style>
#card ul label {
  margin-left: 10px;
}

#card ul {
  list-style-type: none;
}
</style>
