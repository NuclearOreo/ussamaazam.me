<template>
  <div class="container-fluid">
    <div class="sidenav">
      <div class="buffer"></div>
      <h6>
        <strong>
          Sorting
        </strong>
      </h6>
      <a v-on:click="selected = 'insertion'">Insertion Sort</a>
      <a v-on:click="selected = 'selection'">Selection Sort</a>
      <a v-on:click="selected = 'bubble'">Bubble Sort</a>
      <a v-on:click="selected = 'quick'">Quick Sort</a>
      <a v-on:click="selected = 'merge'">Merge Sort</a>
      <h6>
        <strong>
          Dynamic Programming
        </strong>
      </h6>
      <a v-on:click="selected = 'kadane'">Kadane's algorithm</a>
      <a v-on:click="selected = 'Levenshtein'">Levenshtein Distance</a>
      <a v-on:click="selected = 'Water'">Water Area</a>
    </div>
    <div v-if="selected === 'insertion'">
      <InsertionSort />
    </div>
    <div v-if="selected === 'selection'">
      <SelectionSort />
    </div>
    <div v-if="selected === 'bubble'">
      <BubbleSort />
    </div>
    <div v-if="selected === 'quick'">
      <QuickSort />
    </div>
    <div v-if="selected === 'merge'">
      <MergeSort />
    </div>
    <div v-if="selected === 'kadane'">
      <Kadane />
    </div>
  </div>
</template>

<script>
import InsertionSort from "../components/problems/insertionSort";
import SelectionSort from "../components/problems/selectionSort";
import BubbleSort from "../components/problems/bubbleSort";
import QuickSort from "../components/problems/quickSort";
import MergeSort from "../components/problems/mergeSort";
import Kadane from "../components/problems/kadane";

export default {
  components: {
    InsertionSort,
    SelectionSort,
    BubbleSort,
    QuickSort,
    MergeSort,
    Kadane
  },
  data() {
    return {
      selected: "insertion"
    };
  }
};
</script>

<style scoped>
.buffer {
  margin-top: 30%;
}

.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  bottom: auto;
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
