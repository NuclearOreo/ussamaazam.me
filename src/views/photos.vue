<template>
  <div v-if="pics !== null" class="container">
    <br />
    <div class="alert alert-info" role="alert">
      <strong>Hey,</strong> this is a showcase of photos I've taken. If you like
      the photos I've been taking then checkout my unsplash account with the
      lint below.
    </div>
    <center>
      <a class="hvr-buzz" href="https://unsplash.com/@ussamaazam">
        <span
          class="iconify unsplash"
          data-icon="simple-icons:unsplash"
          data-inline="false"
        ></span>
        <h1 class="display-4 unsplash">Unsplash</h1>
      </a>
    </center>
    <br />
    <div v-if="stats !== null" class="row">
      <div class="col">
        <div class="jumbotron">
          <div class="container">
            <center>
              <h1 class="display-4">Total Views</h1>
              <p class="hvr-bounce-in lead">
                <strong>{{ formatNumber(stats.data.views.total) }}</strong>
              </p>
            </center>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="jumbotron">
          <div class="container">
            <center>
              <h1 class="display-4">Total Downloads</h1>
              <p class="hvr-bounce-in lead">
                <strong>{{ formatNumber(stats.data.downloads.total) }}</strong>
              </p>
            </center>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item" v-bind:class="{ active: page === 1 }">
          <button v-on:click="Page(1)" class="page-link">1</button>
        </li>
        <li class="page-item" v-bind:class="{ active: page === 2 }">
          <button v-on:click="Page(2)" class="page-link">2</button>
        </li>
        <li class="page-item" v-bind:class="{ active: page === 3 }">
          <button v-on:click="Page(3)" class="page-link">3</button>
        </li>
        <li class="page-item" v-bind:class="{ active: page === 4 }">
          <button v-on:click="Page(4)" class="page-link">4</button>
        </li>
        <li class="page-item" v-bind:class="{ active: page === 5 }">
          <button v-on:click="Page(5)" class="page-link">5</button>
        </li>
        <li class="page-item" v-bind:class="{ active: page === 6 }">
          <button v-on:click="Page(6)" class="page-link">6</button>
        </li>
      </ul>
    </nav>
    <div class="card-columns">
      <a v-for="(pic, index) in pics.data" :key="index" :href="pic.links.html">
        <Photo :url="pic.urls.regular" />
      </a>
    </div>
  </div>
</template>

<script>
import Photo from "../components/photo";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  timeout: 2000,
  headers: { Authorization: process.env.VUE_APP_UNSPLASH }
});

export default {
  name: "Photos",
  components: {
    Photo
  },
  data() {
    return {
      pics: null,
      stats: null,
      page: 1
    };
  },
  methods: {
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    async Page(page) {
      this.pics = await instance.get(`/users/ussamaazam/photos?page=${page}`);
      this.page = page;
    }
  },
  async mounted() {
    this.pics = await instance.get("/users/ussamaazam/photos");
    this.stats = await instance.get("/users/ussamaazam/statistics");
  }
};
</script>

<style scoped>
.jumbotron {
  padding-bottom: 5%;
  padding-top: 5%;
}
.iconify {
  font-size: 50px;
}
.unsplash {
  color: #000000;
}
/* Buzz */
@-webkit-keyframes hvr-buzz {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}
@keyframes hvr-buzz {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}
.hvr-buzz {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-buzz:hover,
.hvr-buzz:focus,
.hvr-buzz:active {
  -webkit-animation-name: hvr-buzz;
  animation-name: hvr-buzz;
  -webkit-animation-duration: 0.15s;
  animation-duration: 0.15s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

/* Bounce In */
.hvr-bounce-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.hvr-bounce-in:hover,
.hvr-bounce-in:focus,
.hvr-bounce-in:active {
  -webkit-transform: scale(1.4);
  transform: scale(1.4);
  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}
</style>
