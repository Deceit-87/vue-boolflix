<template>
  <div class="nav-bar">
    <div class="search-input"
    :class="[isActive ? 'closed' : '']">
      <i 
       @click='isActive = !isActive' class="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        v-model="search"
        @keyup="searchData"
        placeholder="Titoli,persone,generi"
      />
    </div>
    <!-- <button @click="searchData"
    >Go...</button> -->
  </div>
</template>


<script>
import state from "../store.js";
import { fetchData } from "../store.js";

export default {
  data() {
    return {
      search: "",
      isActive: true,
    };
  },
  methods: {
    searchData: function () {
      if (this.search.length != 0) {
        state.search = this.search;
        fetchData();
        //   this.search = ''
        console.log(this.search.length);
        console.log(state.search.length);
      } else if (this.search.length == 0) {
        state.search = this.search;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  position: sticky;
  top: 0;
  height: 50px;
  background: rgba(255, 255, 255, 0.123);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  z-index: 999;
  padding: 10px;
  .search-input {
    width: 200px;
    overflow: hidden;
    position: relative;
    border:1px solid white;
    transition: all 1.5s;
    input {
        border: none;
      float: right;
      width: 100%;
      background-color: transparent;
      padding: 5px 5px 5px 30px;
      color: rgba(255, 255, 255, 0.315);
      &::placeholder{
          color: rgba(255, 255, 255, 0.315);
      }
    }
    i {
      float: right;
      position: absolute;
      left: 0%;
      top: 50%;
      transform: translateY(-50%);
      color: white;
      padding-left: 5px;
    
    }
  }
  .closed{
      width: 24px;
      border-color:transparent ;
      transition: all 1.5s;
  }
}
</style>