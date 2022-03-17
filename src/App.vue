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
    
  
  <div class="card_wrapper">
    <div class="card_container"
    v-for="movie in movies"
    :key="movie.id">
          <h3>Film</h3>
            <div class="img-wrapper">
              <img :src="`${imgBaseUrl}${movie.poster_path}`" alt="">
             </div>
          <p>
            Titolo: {{movie.name}}
          </p>
          <p>
            Titolo Originale: {{ movie.original_name }}
          </p>
          <p>
            Lingua: {{ getFlag( movie.original_language ) }}
          </p>
          <p>
            Voto:{{ vote(movie.vote_average) }}
          </p>
          <div class="vote" >
            <span v-for="(n) in 5" :key="n">
              <i  :class="n <= vote(movie.vote_average)  ? 'fa-solid' : 'fa-regular' " 
              class="fa-star"></i>
            </span>
          </div>
      </div>
  

  
     <div class="card_container"
     v-for="serie in serieTv"
     :key="serie.id">
        <h3>TeleFilm</h3>
        <div class="img-wrapper">
        <img :src="`${imgBaseUrl}${serie.poster_path}`" alt="">
        </div>
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
          Voto:{{ vote(serie.vote_average) }}
        </p>
        <div class="vote" >
          <span v-for="n in 5" :key="n">
            <i class="fa-star"
            :class="n <= vote(serie.vote_average) ? 'fa-solid' : 'fa-regular'"></i>
          </span>
        </div>
    </div>
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
      baseUrl: 'https://api.themoviedb.org/3',
      imgBaseUrl: 'https://image.tmdb.org/t/p/w342',
    }
  },
  computed:{
   
   
  },
    // vote nelle computed non funziona
    // vote non prende this.el.vote_average
  methods:{
     vote: ((num) =>{
      return Math.ceil( num / 2 );
    }),
   
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
       this.search = '';

    })
   },
  },
  created(){
   
  },
}
</script>

<style lang="scss">


@import '~@fortawesome/fontawesome-free/css/all.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.vote {
  display: flex;
  justify-content: center;
}

.card_wrapper{
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
  .card_container{
    width: 24%;
    border: 1px solid lightgray;
    margin: 1px;
    font-size: 12px;
    
    }
  }
  .img-wrapper{
    width: 100%;
    height: 233px;
    img{
          width: 100%;
          height: 100%;
          object-position: bottom;
          object-fit: cover;
      }
}
</style>
