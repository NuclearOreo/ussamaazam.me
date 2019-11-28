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
              ><span style="color: #66d9ef">def</span> <span style="color: #a6e22e">kadane</span><span style="color: #f8f8f2">(nums):</span>
    <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">len(nums)):</span>
        <span style="color: #f8f8f2">nums[i]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">max(nums[i],</span> <span style="color: #f8f8f2">nums[i]</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">nums[i</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">])</span>
    <span style="color: #66d9ef">return</span> <span style="color: #ae81ff">0</span> <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">nums[</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">&lt;</span> <span style="color: #ae81ff">0</span> <span style="color: #66d9ef">else</span> <span style="color: #f8f8f2">nums[</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span> 
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
  name: "Kadane",
  data() {
    return {
      problem:
        "# Kadane's Algorithm\n\n" +
        "The array can be of any dimension. For simplicity, let’s start with a 1D array.\n\n" +
        "Let’s take a 0-indexed array:\n\n" +
        "arr: [5, 7, -3, 2, 9, 6, 16, 22, 21, 29, -14, 10, 12]\n\n" +
        "We can start the subarray at any point. Let’s say we start at index 2 i.e., arr[2] = -3. Now, at index 3, the sum will be -3 + 2 = -1. If we started the subarray at index 3 instead, the sum at index 3 is 2, which is greater than the previous sum.\n\n" +
        "So we have two choices: either start at the current index or add the current element to the previous sum.\n\n" +
        "And since we want the maximum subarray sum, we add the current element to the maximum of 0 and previous sum (zero here denotes that we’re starting anew from the current element).\n\n" +
        "This problem falls under Dynamic Programming Paradigm.\n\n" +
        "Let’s take an array dp[] where each dp[i] denotes maximum subarray sum ending at index i (including i).\n\n" +
        "We can say that\n\n" +
        "![alt text](https://hackernoon.com/hn-images/1*T4JsrEKrbZcwmFDz3R2ooQ.jpeg)"
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
