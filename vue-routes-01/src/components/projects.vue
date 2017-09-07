<template>
  <div class="projects container">
   <h1 class="text-center">{{ msg }}</h1>
     <ul class="text-center">
     <li><router-link to="/day1" class="btn text"><a>Subreddit Client</a></router-link></li>
     <li><router-link to="/day2" class="btn text"><a>New York Times Top Stories Client</a></router-link></li>
     </ul>
  </div>

</template>

<style>

.projects ul li {
  font-size: 20px;
}

</style>
