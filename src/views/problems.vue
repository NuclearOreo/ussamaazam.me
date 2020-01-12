<template>
  <div class="container-fluid">
    <div class="sidenav">
      <div class="buffer"></div>
      <h6>
        <strong>
          Sorting
        </strong>
      </h6>
      <a class="hvr-forward" v-on:click="selected = 'insertion'"
        >Insertion Sort</a
      >
      <a class="hvr-forward" v-on:click="selected = 'selection'"
        >Selection Sort</a
      >
      <a class="hvr-forward" v-on:click="selected = 'bubble'">Bubble Sort</a>
      <a class="hvr-forward" v-on:click="selected = 'quick'">Quick Sort</a>
      <a class="hvr-forward" v-on:click="selected = 'merge'">Merge Sort</a>
      <h6>
        <strong>
          Dynamic Programming
        </strong>
      </h6>
      <a class="hvr-forward" v-on:click="selected = 'kadane'"
        >Kadane's algorithm</a
      >
      <a class="hvr-forward" v-on:click="selected = 'levenshtein'"
        >Levenshtein Distance</a
      >
      <a class="hvr-forward" v-on:click="selected = 'waterArea'">Water Area</a>
      <a class="hvr-forward" v-on:click="selected = 'decodeWays'"
        >Decode Ways</a
      >
      <a class="hvr-forward" v-on:click="selected = 'primeSieve'"
        >Prime Sieve</a
      >
      <h6>
        <strong>
          Binary Tree
        </strong>
      </h6>
      <a class="hvr-forward" v-on:click="selected = 'treeTraversal'"
        >Binary Tree Traveral</a
      >
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
    <div v-if="selected === 'levenshtein'">
      <Levenshtein />
    </div>
    <div v-if="selected === 'waterArea'">
      <WaterArea />
    </div>
    <div v-if="selected === 'decodeWays'">
      <DecodeWays />
    </div>
    <div v-if="selected === 'primeSieve'">
      <PrimeSieve />
    </div>
    <div v-if="selected === 'treeTraversal'">
      <TreeTraversal />
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
import Levenshtein from "../components/problems/levenshtein";
import WaterArea from "../components/problems/waterArea";
import DecodeWays from "../components/problems/decodeWays";
import PrimeSieve from "../components/problems/primeSieve";
import TreeTraversal from "../components/problems/treeTraversal";

export default {
  components: {
    InsertionSort,
    SelectionSort,
    BubbleSort,
    QuickSort,
    MergeSort,
    Kadane,
    Levenshtein,
    WaterArea,
    DecodeWays,
    PrimeSieve,
    TreeTraversal
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

.hvr-forward {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-forward:hover,
.hvr-forward:focus,
.hvr-forward:active {
  -webkit-transform: translateX(8px);
  transform: translateX(8px);
}
</style>
