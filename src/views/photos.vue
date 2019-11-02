<template>
  <div v-if="pics !== null" class="container">
    <br />
    <center>
      <a href="https://unsplash.com/@ussamaazam">
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
              <p class="lead">
                <strong>
                  {{ formatNumber(stats.data.views.total) }}
                </strong>
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
              <p class="lead">
                <strong>
                  {{ formatNumber(stats.data.downloads.total) }}
                </strong>
              </p>
            </center>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item" v-bind:class="{ active: page === 1 }">
          <button v-on:click="Page(1)" class="page-link">
            1
          </button>
        </li>
        <li class="page-item" v-bind:class="{ active: page === 2 }">
          <button v-on:click="Page(2)" class="page-link">
            2
          </button>
        </li>
        <li class="page-item" v-bind:class="{ active: page === 3 }">
          <button v-on:click="Page(3)" class="page-link">
            3
          </button>
        </li>
        <li class="page-item" v-bind:class="{ active: page === 4 }">
          <button v-on:click="Page(4)" class="page-link">
            4
          </button>
        </li>
        <li class="page-item" v-bind:class="{ active: page === 5 }">
          <button v-on:click="Page(5)" class="page-link">
            5
          </button>
        </li>
        <li class="page-item" v-bind:class="{ active: page === 6 }">
          <button v-on:click="Page(6)" class="page-link">
            6
          </button>
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
  timeout: 1000,
  headers: {
    Authorization:
      ""
  }
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
</style>
