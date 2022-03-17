<template>
  <div id="app">
    <div>

    <input type="text"
     v-model="search"
     @keyup.enter="fetchData"
     placeholder="Type Here..."
     >
    <button @click="fetchData"
    >Go...</button>

    </div>
    
  
  <div v-for="movie in movies"
  :key="movie.id">
 
        <h3>Film</h3>
    <p>
      Titolo: {{ movie.title }} 
    </p>
    <p>
      Titolo Originale: {{ movie.original_title }}
    </p>
    <p>
      Lingua: {{ getFlag( movie.original_language ) }}
    </p>
    <p>
      Voto: {{ movie.vote_average }}
    </p>

  </div>

  <div v-for="serie in serieTv"
  :key="serie.id">
 
        <h3>TeleFilm</h3>
    <p>
      Titolo: {{serie.name}}
    </p>
    <p>
      Titolo Originale: {{ serie.original_name }}
    </p>
    <p>
      Lingua: {{ getFlag( serie.original_language ) }}
    </p>
    <p>
      Voto: {{ serie.vote_average }}
    </p>

  </div>
  </div>
</template>

<script>

import axios from 'axios'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'


export default {
  name: 'App',
  data(){
    return {
      search: this.search,
      movies:[],
      serieTv:[],
      baseUrl: 'https://api.themoviedb.org/3'
    }
  },
  methods:{
    getFlag: function(unicode){
      if( unicode === 'en'){
        unicode = 'gb';
      }

      return getUnicodeFlagIcon(unicode)

    },

   fetchData: function(){
      axios.get(`${this.baseUrl}/search/movie`,{
      params: {
        api_key: '5d4ef6c201c090629b1def178dcc3dee', 
        query: this.search,
        language: 'it-IT',
      }
    })
    .then(res => {
      console.log(res.data);
      this.movies = res.data.results ;
      this.search = '';
    }),
   
    axios.get(`${this.baseUrl}/search/tv`,{
      params: {
        api_key: '5d4ef6c201c090629b1def178dcc3dee', 
        query: this.search,
        language: 'it-IT',
      }
    })
    .then(res => {
      console.log(res.data)
      this.serieTv = res.data.results 

    })
   },
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
