import Vue from 'vue'
import axios from 'axios'

const state = Vue.observable({
    search:'',
    movies:[],
    serieTv:[],
    baseUrl: 'https://api.themoviedb.org/3',
    
})


export default state


export function fetchData(){

    axios.get(`${state.baseUrl}/search/movie`,{
    params: {
      api_key: '5d4ef6c201c090629b1def178dcc3dee', 
      query: state.search,
      language: 'it-IT',
    }
  })
  .then(res => {
    console.log(res.data);
    state.movies = res.data.results ;
    // state.search = '';
  }),
 
  axios.get(`${state.baseUrl}/search/tv`,{
    params: {
      api_key: '5d4ef6c201c090629b1def178dcc3dee', 
      query: state.search,
      language: 'it-IT',
    }
  })
  .then(res => {
    console.log(res.data)
    state.serieTv = res.data.results 
    //  state.search = '';

  })
 }
