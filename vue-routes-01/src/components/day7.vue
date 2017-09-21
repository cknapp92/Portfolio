<template>
  <div class="text-center">
    <h3>What is your favorite car?</h3>
    <textarea v-model="car"></textarea>  
    <br>
    <button class="btn btn-large btn-success" v-if="car">Share!</button>
  </div>

</template>


<script>
    
export default({
  data () {
        return {
          car: ''
        }
  }
})
    
</script>