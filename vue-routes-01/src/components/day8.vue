<template>
  
<div id="words">
 <div class="row">
  <div class="wordbox">
  <p>church</p>
  <p v-if="church === 'church'">Храм</p>
  <input v-model="church" type="text" style="width: 100px">
  </div>
  <div class="wordbox">word</div>
  <div class="wordbox">word</div>
  <div class="wordbox">word</div>
  <div class="wordbox">word</div>
 </div>
</div>


</template>
<script>

export default({
  data () {
    return {
      church: ''
    }
  }
})

</script>
<style>

#words {
  background: url('https://mypostalcards.files.wordpress.com/2012/07/red-square.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 600px;
  min-width: 1000px;
  position: fixed;
} 
    
.wordbox {
  border: .4rem solid black;
  border-radius: .5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem .5rem;
  transition: all .1s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
}
    
.clicked {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}
    
</style>
