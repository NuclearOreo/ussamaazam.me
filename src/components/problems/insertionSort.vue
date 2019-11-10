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
              ><span style="color: #66d9ef">def</span> <span style="color: #a6e22e">insertionSort</span><span style="color: #f8f8f2">(array):</span>
   <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">len(array)):</span>
      <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">i):</span>
         <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">array[j]</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">array[i]:</span>
             <span style="color: #f8f8f2">temp</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">array[j]</span>
             <span style="color: #f8f8f2">array[j]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">array[i]</span>
             <span style="color: #f8f8f2">array[i]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">temp</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">array</span>
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
  name: "InsertionSort",
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
        "- It repeats until no input elements remain.\n\n"
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
