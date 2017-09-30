<template>
  <div class="container-fluid">
  <div class="logo clearfix text-center">
  <img src="../../../images/us-flag.jpg" class="rounded float-left" alt="US flag" width="200" height="100">
  <img src="../../../images/presidents.jpg" class="rounded" alt="President's Logo" width="250" height="150">
  <img src="../../../images/intl-flag.jpg" class="rounded float-right" alt="International Flag" width="200" height="100">
  </div>
  <div class="panels">
    <div class="panel panel1" @click="opened1 = true" :class="[opened1 ? activeClass : '']">
      <p>Rank This Week: 4</p>
      <p>Fowler</p>
      <p>4 PGA Tour Wins</p>
    </div>
    <div class="panel panel2" @click="opened2 = true" :class="[opened2 ? activeClass : '']">
      <p>Rank This Week: 2</p>
      <p>Day</p>
      <p>10 PGA Tour Wins</p>
    </div>
    <div class="panel panel3" @click="opened3 = true" :class="[opened3 ? activeClass : '']">
      <p>Rank This Week: 1</p>
      <p>Johnson</p>
      <p>16 PGA Tour Wins</p>
    </div>
    <div class="panel panel4" @click="opened4 = true" :class="[opened4 ? activeClass : '']">
      <p>Rank This Week: 1</p>
      <p>MATSUYAMA</p>
      <p>5 PGA Tour Wins</p>
    </div>
    <div class="panel panel5" @click="opened5 = true" :class="[opened5 ? activeClass : '']">
      <p>Rank This Week: 2</p>
      <p>Spieth</p>
      <p>11 PGA Tour Wins</p>
    </div>
  </div>
  </div>
</template>

<script>

export default({
  data () {
    return {
      opened1: false,
      opened2: false,
      opened3: false,
      opened4: false,
      opened5: false,
      activeClass: 'open-active open'
    }
  }
})
</script>

<style>
    .logo {
      padding: 20px;
      margin-bottom: 0.5em;
      background-color: rgba(0, 0, 0, 0.05);
      height: 9em;
      padding: 20px;
    }
    
    html {
      box-sizing: border-box;
      background:#ffc600;
      font-size: 20px;
      font-weight: 200;
    }
    body {
      margin: 0;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    .panels {
      min-height:100vh;
      overflow: hidden;
      display: flex;
    }
    .panel {
      background:#6B0F9C;
      box-shadow:inset 0 0 0 5px rgba(255,255,255,0.1);
      color:white;
      text-align: center;
      align-items:center;
      transition:
        font-size 0.5s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        flex 0.3s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        background 0.2s;
      font-size: 15px;
      background-size:cover;
      background-position:center;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      opacity: 0.8;
    }
    .panel1 { background-image:url('../../../images/rickie-fowler.jpg'); }
    .panel2 { background-image:url('../../../images/jasonday2.jpg'); }
    .panel3 { background-image:url('../../../images/dustin-johnson.jpg'); }
    .panel4 { background-image:url('../../../images/hideki-matsuyama.jpg'); }
    .panel5 { background-image:url('../../../images/jordan-speith.jpg'); }
    
   
    .panel:hover {
      opacity: 1.0;    
    }
    
    .panel > * {
      margin:0;
      opacity: 0.7;
      width: 100%;
      transition:transform 0.6s;
      flex: 1 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .panel > *:first-child { transform: translateY(-100%); }
    .panel.open-active > *:first-child { transform: translateY(0); }
    .panel > *:last-child { transform: translateY(100%); }
     .panel.open-active > *:last-child { transform: translateY(0); }
    
    .panel p {
      text-transform: uppercase;
      font-family: 'myriad pro';
      text-shadow:0 0 5px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
      font-size: 1em;
    }
    .panel p:nth-child(2) {
      font-size: 2em;
    }
    .panel.open {
      flex: 3;
      font-size:30px;
    }
  </style>



