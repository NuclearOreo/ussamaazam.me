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
              style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .2em;padding:.2em .2em;"
            >
              <pre
                style="margin: 0; line-height: 125%"
              ><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span><span style="color: #f8f8f2">:</span>
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">numDecodings</span><span style="color: #f8f8f2">(self,</span> <span style="color: #f8f8f2">s:</span> <span style="color: #f8f8f2">str)</span> <span style="color: #f92672">-&gt;</span> <span style="color: #f8f8f2">int:</span>
        <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">memo</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{}</span>
        <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">helper(s)</span>

    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">helper</span><span style="color: #f8f8f2">(self,</span> <span style="color: #f8f8f2">s:</span> <span style="color: #f8f8f2">str)</span> <span style="color: #f92672">-&gt;</span> <span style="color: #f8f8f2">int:</span>
        <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">len(s)</span> <span style="color: #f92672">==</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">:</span> <span style="color: #66d9ef">return</span> <span style="color: #ae81ff">1</span>
        <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">s</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">memo:</span> <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">memo[s]</span>
        
        <span style="color: #f8f8f2">takeOne</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">takeTwo</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span>
        
        <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">int(s[:</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">])</span> <span style="color: #f92672">&gt;=</span> <span style="color: #ae81ff">1</span> <span style="color: #f92672">and</span> <span style="color: #f8f8f2">int(s[:</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">])</span> <span style="color: #f92672">&lt;=</span> <span style="color: #ae81ff">9</span><span style="color: #f8f8f2">:</span>
            <span style="color: #f8f8f2">takeOne</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">helper(s[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">:])</span>
        
        <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">int(s[:</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">])</span> <span style="color: #f92672">&gt;=</span> <span style="color: #ae81ff">10</span> <span style="color: #f92672">and</span> <span style="color: #f8f8f2">int(s[:</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">])</span> <span style="color: #f92672">&lt;=</span> <span style="color: #ae81ff">26</span><span style="color: #f8f8f2">:</span> 
            <span style="color: #f8f8f2">takeTwo</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">helper(s[</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">:])</span>
        
        <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">memo[s]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">takeOne</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">takeTwo</span>
        
        <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">memo[s]</span>
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
  name: "DecodeWays",
  data() {
    return {
      problem:
        "# Decode Ways\n\n" +
        "A message containing letters from A-Z is being encoded to numbers using the following mapping:\n\n" +
        "\t'A' -> 1\n\n" +
        "\t'B' -> 2\n\n" +
        "\t... \n\n" +
        "\t'Z' -> 26\n\n" +
        "Given a **non-empty** string containing only digits, determine the total number of ways to decode it.\n\n" +
        "##### Example\n\n" +
        `**Input:** "12"\n\n` +
        `**Output:** 2\n\n` +
        `**Explanation:** It could be decoded as "AB" (1 2) or "L" (12).`
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
