<template>
  <div v-if="pics !== null" class="container">
    <br />
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
      page: 1
    };
  },
  methods: {
    async Page(page) {
      this.pics = await instance.get(`/users/ussamaazam/photos?page=${page}`);
      this.page = page;
    }
  },
  async mounted() {
    this.pics = await instance.get(`/users/ussamaazam/photos`);
  }
};
</script>

<style scoped></style>
