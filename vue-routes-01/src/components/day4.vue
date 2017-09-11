<template>
  <div class="my-guestbook text-center">
    <h3>Guestbook</h3>
    <div class="form">
      <label for="text">Add name</label>
      <br>
      <input type="text" v-model="newEntry.name" />
      <br>
      <label for="text">Add note</label>
      <br>
      <textarea rows="5" cols="20" v-model="newEntry.text"></textarea>
      <br>
      <button @click='addNewEntry'>Post</button>
    </div>
      <ul class="list-entries">
        <li v-for="entry in entries" style="list-style-type:none">
          <p class="text-info">{{ entry.text }}</p>
          <p class="text-warning">{{ `Posted by ${entry.name}` }}</p>
        </li>
      </ul>
  </div>
</template>

<script>

export default({
  data () {
    return {
      newEntry: {
        text: '',
        name: ''
      },
      entries: [{
        text: 'hello',
        name: 'Conrad'
      }, {
        text: 'hi Conrad',
        name: 'Chandler'
      }]
    }
  },
  methods: {
    addNewEntry () {
      this.entries.push({
        text: this.newEntry.text,
        name: this.newEntry.name
      })
    }
  }
})

</script>

<style>

.form {
  padding-bottom: 30px;
}

li {
  font-family: verdana;
}

</style>
