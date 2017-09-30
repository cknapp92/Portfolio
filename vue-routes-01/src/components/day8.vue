<template>
  
<div id="words" class="container-fluid">
<div class="container-fluid">
<transition name="fade">
<h1 class="display-4 text-center" v-if="show">Find your way around 
<span>Red </span>
Square</h1>
</transition>
 <div class="row">
  <div v-show="" class="wordbox"></div>
  
 <transition name="fade2">
   <div class="abox" v-bind:class="[rightAnswer ? activeClass : '']" v-if="show2">What is this?
    <button class="btn btn-warning" @click="rightClicked">Monument</button>
    <p v-show="rightAnswer" class="text-success">Right!</p>
    <button class="btn btn-warning" @click="wrongClicked">Green Guy</button>
    <p v-show="wrongAnswer" class="text-danger">Wrong!</p>
    <button class="btn btn-warning" @click="wrongClicked">Tourist</button>
    <p v-show="wrongAnswer" class="text-danger">Wrong!</p>
    </div>
  </transition>
  
  <div v-show="rightAnswer" class="bbox">Minin & Pozharsky Monument</div>
  <div v-show="right2Answer" class="bbox">Moscow State Historical Museum</div>
  
  
 </div>
</div>
</div>

</template>
<script>

export default({
  data () {
    return {
      rightAnswer: false,
      wrongAnswer: false,
      activeClass: 'clicked',
      show: false,
      show2: false
    }
  },
  methods: {
    rightClicked: function () {
      this.rightAnswer = !this.rightAnswer
      setTimeout(() => {
        this.show2 = !this.show2
      }, 3000)
    },
    wrongClicked: function () {
      this.wrongAnswer = !this.wrongAnswer
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.show = !this.show
      this.show2 = !this.show2
    })
  }
})

</script>
<style>

#words {
  background: url('../../../images/moskva3.jpg');
  background-size: cover;
  margin: 0;
  min-height: 600px;
} 
    
h1 {
  color: red;
}
    
h1 span {
  color: darkred; 
  font-weight: 400;
}
    
.abox {
  position: absolute;
  bottom: 100px;
  left: 550px;
  border: .2rem solid orange;
  border-radius: .5rem;
  margin: 0rem;
  padding: .5rem .25rem;
  transition: all .1s ease;
  width: 8rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
}

.abox .btn {
  margin: 2px;    
}

.abox p {
  margin: 0px;     
}
  
.bbox {
  position: absolute;
  bottom: 0px;
  left: 350px;
  border: .2rem solid darkred;
  border-radius: .5rem;
  margin: 0rem;
  padding: .5rem .25rem;
  transition: all .1s ease;
  width: 16rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
}
    
.clicked {
  transform: scale(1.05);
  border: .2rem solid green;
  border-color: green;
  box-shadow: 0 0 1rem green;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
    
.fade-enter, .fade-leave-to {
  opacity: 0
} 
    
.fade2-enter-active, .fade2-leave-active {
  transition: opacity 3s
}
    
.fade2-enter, .fade2-leave-to {
  opacity: 0
} 
    
</style>
