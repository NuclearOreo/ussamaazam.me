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
              ><span style="color: #66d9ef">def</span> <span style="color: #a6e22e">primeSieve</span><span style="color: #f8f8f2">(N):</span>
    <span style="color: #f8f8f2">sieve</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[True]</span> <span style="color: #f92672">*</span> <span style="color: #f8f8f2">(N</span> <span style="color: #f92672">+</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">)</span>
    <span style="color: #f8f8f2">sieve[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">sieve[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">False</span>

    <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">N</span><span style="color: #f92672">+</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">):</span>
        <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">j</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(i</span><span style="color: #f92672">*</span><span style="color: #f8f8f2">i,</span> <span style="color: #f8f8f2">N</span><span style="color: #f92672">+</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">i):</span>
            <span style="color: #f8f8f2">sieve[j]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">False</span>
    
    <span style="color: #f8f8f2">prime</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[]</span>
    <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(len(sieve)):</span>
        <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">sieve[i]:</span>
            <span style="color: #f8f8f2">prime</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">append(i)</span>

    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">prime</span>
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
  name: "PrimeSieve",
  data() {
    return {
      problem:
        "# Prime Sieve\n\n" +
        "To find all the prime numbers less than or equal to a given integer n by Eratosthenes' method:\n\n" +
        "- Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).\n\n" +
        "- Initially, let p equal 2, the smallest prime number.\n\n" +
        "- numerate the multiples of p by counting in increments of p from 2p to n, and mark them in the list (these will be 2p, 3p, 4p, ...; the p itself should not be marked).\n\n" +
        "- Find the first number greater than p in the list that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.\n\n" +
        "- When the algorithm terminates, the numbers remaining not marked in the list are all the primes below n.\n\n" +
        "![alt text](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)\n\n"
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
