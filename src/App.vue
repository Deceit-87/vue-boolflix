<template>
  <div id="app">
    <NavBar/>
    <!-- <div>

    <input type="text"
     v-model="search"
     @keyup.enter="fetchData"
     placeholder="Type Here..."
     >
    <button @click="fetchData"
    >Go...</button>

    </div> -->
  
  
  <div v-show="searchLength > 0" class="card_wrapper">
    <CardItem v-for="movie in movies"
    :key="movie.id"
    :element='movie'/>
    <CardItem v-for="serie in serieTv"
    :key="serie.id"
    :element='serie'/>
    <!-- <div class="card_container"
    v-for="movie in movies"
    :key="movie.id">
        <div class="img-wrapper">
          <img v-if="movie.poster_path" :src="`${imgBaseUrl}${movie.poster_path}`" alt="">
          <img v-else
          src="./assets/img/original.gif" alt="">
          <div class="info-wrapper">
          <h3>Film</h3>
            <p>
              Titolo: {{movie.title}}
            </p>
            <p>
              Titolo Originale: {{ movie.original_title }}
            </p>
            <p>
              Lingua: {{ getFlag( movie.original_language ) }}
           
            </p>
            <div class="vote" >
              <span v-for="n in 5" :key="n">
                <i class="fa-star"
                :class="n <= vote(movie.vote_average) ? 'fa-solid' : 'fa-regular'"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
  

  
     <div class="card_container"
     v-for="serie in serieTv"
     :key="serie.id">
        <div class="img-wrapper">
         <img v-if="serie.poster_path" :src="`${imgBaseUrl}${serie.poster_path}`" alt="">
         <img v-else src="./assets/img/original.gif" alt="">
          <div class="info-wrapper">
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
              <div class="vote" >
                <span v-for="n in 5" :key="n">
                  <i class="fa-star"
                  :class="n <= vote(serie.vote_average) ? 'fa-solid' : 'fa-regular'"></i>
                </span>
              </div>
          </div>
        </div>
    </div> -->
  </div>
  </div>
</template>

<script>
import state from './store.js'
import NavBar from './components/NavBar.vue'
import CardItem from './components/CardItem.vue'





export default {
  name: 'App',
  components:{
    NavBar,
    CardItem,

  },

  computed:{
      searchLength: function(){
        return state.search.length
      },
      movies: function(){
        return state.movies
      },
      serieTv: function(){
        return state.serieTv
      },
      search: function() {
        return state.search
      }
  
  //  vote2: function (){
  //     return Math.ceil( this.serie.average_vote / 2 );
  //  },
   
  },
    // vote nelle computed non funziona
    // vote non prende this.el.vote_average
  // methods:{
  //    vote: ((num) =>{
  //     return Math.ceil( num / 2 );
  //   }),
   
  //   getFlag: function(unicode){
  //     if( unicode === 'en'){
  //       unicode = 'gb';
  //     }

  //     return getUnicodeFlagIcon(unicode)

  //   },

  //  fetchData: function(){
  //     axios.get(`${this.baseUrl}/search/movie`,{
  //     params: {
  //       api_key: '5d4ef6c201c090629b1def178dcc3dee', 
  //       query: this.search,
  //       language: 'it-IT',
  //     }
  //   })
  //   .then(res => {
  //     console.log(res.data);
  //     this.movies = res.data.results ;
  //     this.search = '';
  //   }),
   
  //   axios.get(`${this.baseUrl}/search/tv`,{
  //     params: {
  //       api_key: '5d4ef6c201c090629b1def178dcc3dee', 
  //       query: this.search,
  //       language: 'it-IT',
  //     }
  //   })
  //   .then(res => {
  //     console.log(res.data)
  //     this.serieTv = res.data.results 
  //      this.search = '';

  //   })
  //  },
//   },
//   created(){
   
//   },
// }
}
</script>

<style lang="scss" >


@import '~@fortawesome/fontawesome-free/css/all.css';
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #141414;
  min-height: 100vh;
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
  justify-content: flex-start;
  
}
.card_container{
    width: 23%;
    font-size: 12px;
    padding: 1%;
    margin: 1%;
    &:hover .info-wrapper{
      visibility: visible;
    }
    
  }

</style>
