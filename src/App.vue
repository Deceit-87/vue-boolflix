<template>
  <div id="app">
    <div>

    <input type="text"
     v-model="search"
     placeholder="Type Here...">
    <button @click="startSearch">Go...</button>

    </div>
    
  
  <div v-for="movie in movies"
  :key="movie.id">
  {{ movie.title }}

  </div>
  </div>
</template>

<script>

import axios from 'axios'


export default {
  name: 'App',
  data(){
    return {
      search:'rocco',
      movies:[],
      baseUrl: 'https://api.themoviedb.org/3'
    }
  },
  methods:{
   startSearch: function(){
      axios.get(`${this.baseUrl}/search/movie`,{
      params: {
        api_key: '5d4ef6c201c090629b1def178dcc3dee', 
        query: this.search,
        language: 'it-IT',
      }
    })
    .then(res => {
      console.log(res.data)
      this.movies = res.data.results 
    })
   }


  },
  created(){
   
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
