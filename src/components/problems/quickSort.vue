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
              ><span style="color: #66d9ef">def</span> <span style="color: #a6e22e">quickSort</span><span style="color: #f8f8f2">(array):</span>
   <span style="color: #f8f8f2">helper(array,</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">len(array)</span> <span style="color: #f92672">-</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">)</span>
   <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">array</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">helper</span><span style="color: #f8f8f2">(array,</span> <span style="color: #f8f8f2">low,</span> <span style="color: #f8f8f2">high):</span>
   <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">low</span> <span style="color: #f92672">&lt;=</span> <span style="color: #f8f8f2">high:</span>
      <span style="color: #f8f8f2">pi</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">partion(array,</span> <span style="color: #f8f8f2">low,</span> <span style="color: #f8f8f2">high)</span>
	  <span style="color: #f8f8f2">helper(array,</span> <span style="color: #f8f8f2">low,</span> <span style="color: #f8f8f2">pi</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">)</span>
	  <span style="color: #f8f8f2">helper(array,</span> <span style="color: #f8f8f2">pi</span><span style="color: #f92672">+</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">high)</span>
	
<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">partion</span><span style="color: #f8f8f2">(array,</span> <span style="color: #f8f8f2">low,</span> <span style="color: #f8f8f2">high):</span>
   <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">low</span> <span style="color: #f92672">-</span> <span style="color: #ae81ff">1</span>
   <span style="color: #f8f8f2">pivot</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">array[high]</span>
	
   <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(low,</span> <span style="color: #f8f8f2">high):</span>
      <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">array[j]</span> <span style="color: #f92672">&lt;=</span> <span style="color: #f8f8f2">pivot:</span>
         <span style="color: #f8f8f2">i</span> <span style="color: #f92672">+=</span> <span style="color: #ae81ff">1</span>
		 <span style="color: #f8f8f2">array[i],</span> <span style="color: #f8f8f2">array[j]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">array[j],</span> <span style="color: #f8f8f2">array[i]</span>
      <span style="color: #f8f8f2">array[i</span><span style="color: #f92672">+</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">array[high]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">array[high],</span> <span style="color: #f8f8f2">array[i</span><span style="color: #f92672">+</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span>
   <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">+</span> <span style="color: #ae81ff">1</span>
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
  name: "QuickSort",
  data() {
    return {
      problem:
        "# Quick Sort\n\n" +
        "Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. The steps are:\n\n" +
        "1. Pick an element, called a pivot, from the array.\n\n" +
        "2. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.\n\n" +
        "3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.\n\n" +
        "The base case of the recursion is arrays of size zero or one, which are in order by definition, so they never need to be sorted.\n\n" +
        "The pivot selection and partitioning steps can be done in several different ways; the choice of specific implementation schemes greatly affects the algorithm's performance.\n\n" +
        "![alt text](https://upload.wikimedia.org/wikipedia/commons/a/af/Quicksort-diagram.svg)"
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
