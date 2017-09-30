<template>
  
<div id="words" class="container-fluid">
<transition name="fade">
<h1 class="display-4 text-center" v-if="show">Find your way around 
<span>Red </span>
Square</h1>
</transition>
 <div class="row">
   
 <transition name="fade2">
   <div class="abox" v-bind:class="[rightAnswer ? activeClass : '']" v-if="show2">What is this?
    <button class="btn btn-warning" @click="rightClicked">Monument</button>
    <p v-show="rightAnswer" class="text-success">Right!</p>
    <button class="btn btn-warning" @click="wrongClicked">Green Guy</button>
    <button class="btn btn-warning" @click="wrongClicked">Tourist</button>
    <p v-show="wrongAnswer" class="text-danger">Wrong!</p>
    </div>
  </transition>
  
  <div v-show="rightAnswer" class="bbox"><a href="https://en.wikipedia.org/wiki/Monument_to_Minin_and_Pozharsky">Monument to Minin and Pozharsky</a></div>
 
 <transition name="fade3">
   <div class="cbox" v-bind:class="[right2Answer ? activeClass : '']" v-if="show3">What is this?
    <button class="btn btn-warning" @click="right2Clicked">State museum</button>
    <p v-show="right2Answer" class="text-success">Right!</p>
    <button class="btn btn-warning" @click="wrong2Clicked">Lenin's House</button>
    <button class="btn btn-warning" @click="wrong2Clicked">Church</button>
    <p v-show="wrong2Answer" class="text-danger">Wrong!</p>
    </div>
 </transition>
 
  <div v-show="right2Answer" class="dbox"><a href="https://en.wikipedia.org/wiki/State_Historical_Museum">Moscow State Historical Museum</a></div>
  
  <transition name="fade4">
   <div class="ebox" v-bind:class="[right3Answer ? activeClass : '']" v-if="show4">What is this?
    <button class="btn btn-warning" @click="right3Clicked">Store</button>
    <p v-show="right3Answer" class="text-success">Right!</p>
    <button class="btn btn-warning" @click="wrong3Clicked">Mansion</button>
    <button class="btn btn-warning" @click="wrong3Clicked">Museum</button>
    <p v-show="wrong3Answer" class="text-danger">Wrong!</p>
    </div>
 </transition>
  
  <div v-show="right3Answer" class="fbox"><a href="https://en.wikipedia.org/wiki/GUM_(department_store)">GUM Department Store</a></div>
  
  <transition name="fade5">
   <div class="gbox" v-bind:class="[right4Answer ? activeClass : '']" v-if="show5">What is this?
    <button class="btn btn-warning" @click="right4Clicked">Tomb</button>
    <button class="btn btn-warning" @click="right4Clicked">Mausoleum</button>
    <p v-show="right4Answer" class="text-success">Right!</p>
    <button class="btn btn-warning" @click="wrong4Clicked">Big Staircase</button>
    <p v-show="wrong4Answer" class="text-danger">Wrong!</p>
    </div>
 </transition>
  
  <div v-show="right4Answer" class="hbox"><a href="https://en.wikipedia.org/wiki/Lenin%27s_Mausoleum">Lenin's Mausoleum</a></div>
  
  
   
 </div>
</div>

</template>
<script>

export default({
  data () {
    return {
      rightAnswer: false,
      wrongAnswer: false,
      right2Answer: false,
      wrong2Answer: false,
      right3Answer: false,
      wrong3Answer: false,
      right4Answer: false,
      wrong4Answer: false,
      activeClass: 'clicked',
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    }
  },
  methods: {
    rightClicked: function () {
      this.rightAnswer = !this.rightAnswer
      setTimeout(() => {
        this.show2 = !this.show2
      }, 3000)
      setTimeout(() => {
        this.show3 = !this.show3
      }, 3000)
    },
    wrongClicked: function () {
      this.wrongAnswer = !this.wrongAnswer
    },
    right2Clicked: function () {
      this.right2Answer = !this.right2Answer
      setTimeout(() => {
        this.show3 = !this.show3
      }, 3000)
      setTimeout(() => {
        this.show4 = !this.show4
      }, 3000)
    },
    wrong2Clicked: function () {
      this.wrong2Answer = !this.wrong2Answer
    },
    right3Clicked: function () {
      this.right3Answer = !this.right3Answer
      setTimeout(() => {
        this.show4 = !this.show4
      }, 3000)
      setTimeout(() => {
        this.show5 = !this.show5
      }, 3000)
    },
    wrong3Clicked: function () {
      this.wrong3Answer = !this.wrong3Answer
    },
    right4Clicked: function () {
      this.right4Answer = !this.right4Answer
      setTimeout(() => {
        this.show5 = !this.show5
      }, 3000)
    },
    wrong4Clicked: function () {
      this.wrong4Answer = !this.wrong4Answer
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
  font-weight: 500;
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
  bottom: -10px;
  left: 750px;
  border: .2rem solid darkred;
  border-radius: .5rem;
  margin: 0rem;
  padding: .5rem .25rem;
  transition: all .1s ease;
  width: 14rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
}
    
.bbox a {
  color: white;      
}
    
.cbox {
  position: absolute;
  bottom: 260px;
  left: 50px;
  border: .2rem solid orange;
  border-radius: .5rem;
  margin: 0rem;
  padding: .5rem .25rem;
  transition: all .1s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;      
}
.cbox .btn {
  margin: 2px;    
}
.cbox p {
  margin: 0px;
}
    
.dbox {
  position: absolute;
  top: 400px;
  left: 300px;
  border: .2rem solid darkred;
  border-radius: .5rem;
  margin: 0rem;
  padding: .5rem .25rem;
  transition: all .1s ease;
  width: 14rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
}
    
.dbox a {
  color: white;      
}
    
.ebox {
  position: absolute;
  right:50px;
  bottom: 250px;
  border: .2rem solid orange;
  border-radius: .5rem;
  margin: 0rem;
  padding: .5rem .25rem;
  transition: all .1s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;      
}
.ebox .btn {
  margin: 2px;    
}
.ebox p {
  margin: 0px;
}
    
.fbox {
  position: absolute;
  top: 450px;
  right: 300px;
  border: .2rem solid darkred;
  border-radius: .5rem;
  margin: 0rem;
  padding: .5rem .25rem;
  transition: all .1s ease;
  width: 14rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
}
    
.fbox a {
  color: white;      
}
    
.gbox {
  position: absolute;
  left: 30px;
  bottom: 30px;
  border: .2rem solid orange;
  border-radius: .5rem;
  margin: 0rem;
  padding: .5rem .25rem;
  transition: all .1s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;      
}
.gbox .btn {
  margin: 2px;    
}
.gbox p {
  margin: 0px;
}
    
.hbox {
  position: absolute;
  right: 900px;
  top: 300px;
  border: .2rem solid darkred;
  border-radius: .5rem;
  margin: 0rem;
  padding: .5rem .25rem;
  transition: all .1s ease;
  width: 14rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
}
    
.hbox a {
  color: white;      
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
    
.fade3-enter-active, .fade3-leave-active {
  transition: opacity 3s
}    
.fade3-enter, .fade3-leave-to {
  opacity: 0
} 
    
.fade4-enter-active, .fade4-leave-active {
  transition: opacity 3s
}   
.fade4-enter, .fade4-leave-to {
  opacity: 0
} 
    
.fade5-enter-active, .fade5-leave-active {
  transition: opacity 3s
}   
.fade5-enter, .fade5-leave-to {
  opacity: 0
} 
    
</style>
