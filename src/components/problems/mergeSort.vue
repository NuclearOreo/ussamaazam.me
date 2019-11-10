<template>
  <div class="main">
    <div class="nav-wrapper">
      <ul
        class="nav nav-pills nav-fill flex-column flex-md-row"
        id="tabs-icons-text"
        role="tablist"
      >
        <li class="nav-item">
          <a
            class="nav-link mb-sm-3 mb-md-0"
            id="tabs-icons-text-2-tab"
            data-toggle="tab"
            href="#tabs-icons-text-2"
            role="tab"
            aria-controls="tabs-icons-text-2"
            aria-selected="false"
            ><i class="fa fa-pencil-square-o mr-2"></i>Problem</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link mb-sm-3 mb-md-0"
            id="tabs-icons-text-3-tab"
            data-toggle="tab"
            href="#tabs-icons-text-3"
            role="tab"
            aria-controls="tabs-icons-text-3"
            aria-selected="false"
            ><span
              class="iconify"
              data-icon="fa-brands:python"
              data-inline="false"
            ></span>
            Code</a
          >
        </li>
      </ul>
    </div>
    <div class="card shadow">
      <div class="card-body">
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="tabs-icons-text-1"
            role="tabpanel"
            aria-labelledby="tabs-icons-text-1-tab"
          >
            <div v-html="compiledMarkdown(problem)"></div>
          </div>
          <div
            class="tab-pane fade"
            id="tabs-icons-text-2"
            role="tabpanel"
            aria-labelledby="tabs-icons-text-2-tab"
          >
            <div v-html="compiledMarkdown(problem)"></div>
          </div>
          <div
            class="tab-pane fade"
            id="tabs-icons-text-3"
            role="tabpanel"
            aria-labelledby="tabs-icons-text-3-tab"
          >
            <div
              style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .1em;padding:.2em .6em;"
            >
              <pre
                style="margin: 0; line-height: 125%"
              ><span style="color: #66d9ef">def</span> <span style="color: #a6e22e">mergeSort</span><span style="color: #f8f8f2">(arr):</span> 
   <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">len(arr)</span> <span style="color: #f92672">&gt;</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">:</span> 
      <span style="color: #f8f8f2">mid</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">len(arr)</span> <span style="color: #f92672">//</span> <span style="color: #ae81ff">2</span>
      <span style="color: #f8f8f2">L</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">arr[:mid]</span> 
      <span style="color: #f8f8f2">R</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">arr[mid:]</span>
      
      <span style="color: #f8f8f2">mergeSort(L)</span>
      <span style="color: #f8f8f2">mergeSort(R)</span> 
      
      <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">k</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span>
      
      <span style="color: #66d9ef">while</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">len(L)</span> <span style="color: #f92672">and</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">len(R):</span> 
         <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">L[i]</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">R[j]:</span> 
            <span style="color: #f8f8f2">arr[k]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">L[i]</span> 
            <span style="color: #f8f8f2">i</span><span style="color: #f92672">+=</span><span style="color: #ae81ff">1</span>
         <span style="color: #66d9ef">else</span><span style="color: #f8f8f2">:</span> 
            <span style="color: #f8f8f2">arr[k]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">R[j]</span> 
            <span style="color: #f8f8f2">j</span><span style="color: #f92672">+=</span><span style="color: #ae81ff">1</span>
         <span style="color: #f8f8f2">k</span><span style="color: #f92672">+=</span><span style="color: #ae81ff">1</span>
          
      <span style="color: #66d9ef">while</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">len(L):</span> 
         <span style="color: #f8f8f2">arr[k]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">L[i]</span> 
         <span style="color: #f8f8f2">i</span><span style="color: #f92672">+=</span><span style="color: #ae81ff">1</span>
         <span style="color: #f8f8f2">k</span><span style="color: #f92672">+=</span><span style="color: #ae81ff">1</span>
          
      <span style="color: #66d9ef">while</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">len(R):</span> 
         <span style="color: #f8f8f2">arr[k]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">R[j]</span> 
         <span style="color: #f8f8f2">j</span><span style="color: #f92672">+=</span><span style="color: #ae81ff">1</span>
         <span style="color: #f8f8f2">k</span><span style="color: #f92672">+=</span><span style="color: #ae81ff">1</span>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "MergeSort",
  data() {
    return {
      problem:
        "# Merge Sort\n\n" +
        "Conceptually, a merge sort works as follows:\n\n" +
        "1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).\n\n" +
        "2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.\n\n" +
        "![alt text](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)"
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
.main {
  margin-left: 250px;
}
</style>
