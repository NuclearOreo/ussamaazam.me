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
          <div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .1em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">TreeNode</span><span style="color: #f8f8f2">:</span>
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">__init__</span><span style="color: #f8f8f2">(self,</span> <span style="color: #f8f8f2">val):</span>
        <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">val</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">val</span>
        <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">left</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">None</span>
        <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">right</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">None</span>
        
<span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Traversal</span><span style="color: #f8f8f2">:</span>
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">preorder</span><span style="color: #f8f8f2">(self,</span> <span style="color: #f8f8f2">root):</span>
        <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">root</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">None:</span> <span style="color: #66d9ef">return</span>
        <span style="color: #66d9ef">print</span><span style="color: #f8f8f2">(root</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">val)</span>
        <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">preorder(root</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">left)</span>
        <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">preorder(root</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">right)</span>
        
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">inorder</span><span style="color: #f8f8f2">(self,</span> <span style="color: #f8f8f2">root):</span>
        <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">root</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">None:</span> <span style="color: #66d9ef">return</span>
        <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">inorder(root</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">left)</span>
        <span style="color: #66d9ef">print</span><span style="color: #f8f8f2">(root</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">val)</span>
        <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">inorder(root</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">right)</span>

    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">postorder</span><span style="color: #f8f8f2">(self,</span> <span style="color: #f8f8f2">root):</span>
        <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">root</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">None:</span> <span style="color: #66d9ef">return</span>
        <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">postorder(root</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">left)</span>
        <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">postorder(root</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">right)</span>
        <span style="color: #66d9ef">print</span><span style="color: #f8f8f2">(root</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">val)</span>
</pre></div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "TreeTraversal",
  data() {
    return {
      problem:
        "# Binary Tree Traversal\n\n" +
        "- Preorder\n\n" +
        "![alt text](http://ceadserv1.nku.edu/longa/classes/mat385_resources/docs/traversal_files/PreOrderTrav.gif)\n\n" +
        "- Inorder\n\n" +
        "![alt text](http://ceadserv1.nku.edu/longa/classes/mat385_resources/docs/traversal_files/InorderTrav.gif)\n\n" +
        "- Postorder\n\n" +
        "![alt text](http://ceadserv1.nku.edu/longa/classes/mat385_resources/docs/traversal_files/PostorderTrav.gif)"
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
