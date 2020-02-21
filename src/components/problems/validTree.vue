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
          >
            <i class="fa fa-pencil-square-o mr-2"></i>Problem
          </a>
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
          >
            <span
              class="iconify"
              data-icon="fa-brands:python"
              data-inline="false"
            ></span>
            Code
          </a>
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
              ><span style="color: #66d9ef">class</span> <span style="color: #a6e22e">Solution</span><span style="color: #f8f8f2">:</span>
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">isValidBST</span><span style="color: #f8f8f2">(self,</span> <span style="color: #f8f8f2">root:</span> <span style="color: #f8f8f2">TreeNode)</span> <span style="color: #f92672">-&gt;</span> <span style="color: #f8f8f2">bool:</span>
        <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">helper(root,</span> <span style="color: #f8f8f2">float(</span><span style="color: #e6db74">&#39;-inf&#39;</span><span style="color: #f8f8f2">),</span> <span style="color: #f8f8f2">float(</span><span style="color: #e6db74">&#39;inf&#39;</span><span style="color: #f8f8f2">))</span>
    
    <span style="color: #66d9ef">def</span> <span style="color: #a6e22e">helper</span><span style="color: #f8f8f2">(self,</span> <span style="color: #f8f8f2">node,</span> <span style="color: #f8f8f2">minVal,</span> <span style="color: #f8f8f2">maxVal):</span>
        <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">node</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">None:</span> <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">True</span>
        
        <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">val</span> <span style="color: #f92672">&lt;=</span> <span style="color: #f8f8f2">minVal</span> <span style="color: #f92672">or</span> <span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">val</span> <span style="color: #f92672">&gt;=</span> <span style="color: #f8f8f2">maxVal:</span>
            <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">False</span>
        
        <span style="color: #f8f8f2">left</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">helper(node</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">left,</span> <span style="color: #f8f8f2">minVal,</span> <span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">val)</span>
        <span style="color: #f8f8f2">right</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">self</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">helper(node</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">right,</span> <span style="color: #f8f8f2">node</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">val,</span> <span style="color: #f8f8f2">maxVal)</span>
        
        <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">left</span> <span style="color: #f92672">and</span> <span style="color: #f8f8f2">right</span> 
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
  name: "Valid-Tree",
  data() {
    return {
      problem:
        "#  Valid Binary Tree\n\n" +
        "Given a binary tree, determine if it is a valid binary search tree (BST).\n\n" +
        "Assume a BST is defined as follows:\n\n" +
        "- The left subtree of a node contains only nodes with keys less than the node's key.\n\n" +
        "- The right subtree of a node contains only nodes with keys greater than the node's key.\n\n" +
        "- Both the left and right subtrees must also be binary search trees.\n\n" +
        "**Example:**\n\n" +
        "![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/500px-Binary_tree.svg.png)\n\n" +
        "Is Valid"
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
