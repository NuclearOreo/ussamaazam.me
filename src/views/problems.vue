<template>
  <div class="container-fluid">
    <div class="sidenav">
      <h6>
        <strong>
          Sorting
        </strong>
      </h6>
      <a href="#about">Insertion Sort</a>
      <a href="#services">Bubble Sort</a>
      <a href="#clients">Selection Sort</a>
      <a href="#contact">Quick Sort</a>
      <a href="#contact">Merge Sort</a>
      <h6>
        <strong>
          Dynamic Programming
        </strong>
      </h6>
      <a href="#about">Insertion Sort</a>
      <a href="#services">Bubble Sort</a>
      <a href="#clients">Selection Sort</a>
      <a href="#contact">Quick Sort</a>
      <a href="#contact">Merge Sort</a>
    </div>
    <InsertionSort />
  </div>
</template>

<script>
import marked from "marked";
import InsertionSort from "../components/problems/insertionSort";

export default {
  components: {
    InsertionSort
  },
  data() {
    return {
      problem:
        "# Insertion Sort List\n" +
        "Sort a linked list using insertion sort.\n\n" +
        "![alt text](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif 'Insertion Sort')\n\n" +
        "A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.\n" +
        "With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list\n\n" +
        "**Algorithm of Insertion Sort:**\n" +
        "- Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.\n" +
        "- At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.\n" +
        "- It repeats until no input elements remain.\n"
    };
  },
  methods: {
    compiledMarkdown(text) {
      return marked(text);
    }
  }
};
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  left: 0;
  background-color: #f6f9fc;
  overflow-x: hidden;
  padding-top: 20px;
  border-right: 1px solid #e9ecef;
}

.sidenav h6 {
  padding: 10px 1px 1px 25px;
}

.sidenav a {
  padding: 1px 3px 3px 35px;
  text-decoration: none;
  font-size: 15px;
  color: #525f7f;
  display: block;
}

.sidenav a:hover {
  color: #212529;
}

.main {
  margin-left: 250px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
