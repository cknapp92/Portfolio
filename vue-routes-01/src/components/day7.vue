<template>
  <div class="text-center">
    <h3>What is your favorite car?</h3>
    <textarea v-model="car"></textarea>  
    <br>
    <button class="btn btn-large btn-warning" v-show="car">Share!</button>
    <br>
    <input type="radio" value="yes" v-model="emoji">
    <label for="yes">I don't have a favorite car</label>
  <div v-if="emoji">
    <p v-if="emoji === 'yes'">;(</p>
  </div>
  </div>

</template>


<script>
    
export default({
  data () {
        return {
          car: '',
          emoji: ''
        }
  }
})
    
</script>