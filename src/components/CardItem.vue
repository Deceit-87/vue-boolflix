<template>
  <div class="card_container">
    <div class="img-wrapper">
      <img
        v-if="element.poster_path"
        :src="`${imgBaseUrl}${element.poster_path}`"
        alt=""
      />
      <img v-else src="../assets/img/original.gif" alt="" />
      <div class="info-wrapper">
        <h3>{{ genre }}</h3>
        <p>Titolo: {{ title }}</p>
        <p v-show="title != originalTitle">
          Titolo Originale: {{ originalTitle }}
        </p>
        <p>Lingua: {{ getFlag(element.original_language) }}</p>
        <div class="vote">
          <span v-for="n in 5" :key="n">
            <i
              class="fa-star"
              :class="
                n <= vote(element.vote_average) ? 'fa-solid' : 'fa-regular'
              "
            ></i>
          </span>
        </div>
        <div  class="trama-wrapper">
            <details id="det" @mouseleave="toggle" v-if="element.overview != ''">
              
              {{ element.overview }}
              <summary>Overview</summary>
            </details>
            <p v-else>Overview non disponibile</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import getUnicodeFlagIcon from "country-flag-icons/unicode";

export default {
  data() {
    return {
      imgBaseUrl: "https://image.tmdb.org/t/p/w342",
    };
  },
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
  computed: {
    genre: function () {
      if (this.element.name !== undefined) {
        return "TeleFilm";
      } else {
        return "Film";
      }
    },
    title: function () {
      if (this.element.name !== undefined) {
        return this.element.name;
      } else {
        return this.element.title;
      }
    },
    originalTitle: function () {
      if (this.element.original_name !== undefined) {
        return this.element.original_name;
      } else {
        return this.element.original_title;
      }
    },
  },

  methods: {
    toggle: function(){
      const details = document.querySelectorAll('details')
      details.forEach(function(details){
      details.removeAttribute('open','')
      console.log(details)
      console.log('sto cazzo')
      })
    },
    vote: (num) => {
      return Math.ceil(num / 2);
    },

    getFlag: function (unicode) {
      if (unicode === "en") {
        unicode = "gb";
      }

      return getUnicodeFlagIcon(unicode);
    },
  },
};
</script>

<style scoped>
.vote {
  display: flex;
  justify-content: center;
}

.card_container {
  width: 23%;
  font-size: 12px;
  padding: 1%;
  margin: 1%;
}
.info-wrapper {
  visibility: hidden;
  position: absolute;
  color: white;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.5vw;
  padding: 5px;
  background: rgba(0, 0, 0, 0.541);
  bottom: 0;
  right: 0;
}
.img-wrapper {
  overflow: scroll;
  width: 100%;
  position: relative;
}
img {
  width: 100%;
  object-position: center;
  object-fit: cover;
  aspect-ratio: 2/3;
  display: block;
}
.fa-solid {
  color: gold;
}
.trama-wrapper {
  display: block;
}
</style>