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
              style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"
            >
              <pre
                style="margin: 0; line-height: 125%"
              ><span style="color: #66d9ef">def</span> <span style="color: #a6e22e">selectionSort</span><span style="color: #f8f8f2">(array):</span>
   <span style="color: #f8f8f2">i</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span>
   <span style="color: #66d9ef">while</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">len(array):</span>
	<span style="color: #f8f8f2">smallest,</span> <span style="color: #f8f8f2">index</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">float(</span><span style="color: #e6db74">&#39;inf&#39;</span><span style="color: #f8f8f2">),</span> <span style="color: #f92672">-</span><span style="color: #ae81ff">1</span>
	<span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(i</span> <span style="color: #f8f8f2">,len(array)):</span>
		<span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">array[j]</span> <span style="color: #f92672">&lt;</span> <span style="color: #f8f8f2">smallest:</span>
			<span style="color: #f8f8f2">smallest</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">array[j]</span>
			<span style="color: #f8f8f2">index</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">j</span>
	<span style="color: #f8f8f2">temp</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">array[i]</span>
	<span style="color: #f8f8f2">array[i]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">smallest</span>
	<span style="color: #f8f8f2">array[index]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">temp</span>
	<span style="color: #f8f8f2">i</span> <span style="color: #f92672">+=</span> <span style="color: #ae81ff">1</span>
	
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
  name: "SelectionSort",
  data() {
    return {
      problem:
        "# Selection Sort\n\n" +
        "Consider the following depicted array as an example.\n\n" +
        "![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/unsorted_array.jpg)\n\n" +
        "For the first position in the sorted list, the whole list is scanned sequentially. The first position where 14 is stored presently, we search the whole list and find that 10 is the lowest value.\n\n" +
        "![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/selection_sort_1.jpg)\n\n" +
        "So we replace 14 with 10. After one iteration 10, which happens to be the minimum value in the list, appears in the first position of the sorted list.\n\n" +
        "![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/selection_sort_2.jpg)\n\n" +
        "For the second position, where 33 is residing, we start scanning the rest of the list in a linear manner.\n\n" +
        "![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/selection_sort_3.jpg)\n\n" +
        "We find that 14 is the second lowest value in the list and it should appear at the second place. We swap these values.\n\n" +
        "![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/selection_sort_4.jpg)\n\n" +
        "After two iterations, two least values are positioned at the beginning in a sorted manner.\n\n" +
        "![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/selection_sort_5.jpg)\n\n" +
        "The same process is applied to the rest of the items in the array.\n\n" +
        "Following is a pictorial depiction of the entire sorting process −\n\n" +
        "![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/selection_sort.jpg)\n\n"
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
