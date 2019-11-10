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
              ><span style="color: #66d9ef">def</span> <span style="color: #a6e22e">bubbleSort</span><span style="color: #f8f8f2">(array):</span>
   <span style="color: #f8f8f2">isSorted</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">False</span>
   <span style="color: #66d9ef">while</span> <span style="color: #f92672">not</span> <span style="color: #f8f8f2">isSorted:</span>
      <span style="color: #f8f8f2">isSorted</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">True</span>
      <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(len(array)</span> <span style="color: #f92672">-</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">):</span>
         <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">array[i]</span> <span style="color: #f92672">&gt;</span> <span style="color: #f8f8f2">array[i</span><span style="color: #f92672">+</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]:</span>
           <span style="color: #f8f8f2">temp</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">array[i]</span>
           <span style="color: #f8f8f2">array[i]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">array[i</span><span style="color: #f92672">+</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span>
           <span style="color: #f8f8f2">array[i</span><span style="color: #f92672">+</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">temp</span>
           <span style="color: #f8f8f2">isSorted</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">False</span>
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
  name: "BubbleSort",
  data() {
    return {
      problem:
        "# Bubble Sort\n\n" +
        "The bubble sort is also known as the ripple sort. The bubble sort is probably the first, reasonably complex module that any beginning programmer has to write. It is a very simple construct which introduces the student to the fundamentals of how sorting works.\n\n" +
        "A bubble sort makes use of an array and some sort of swapping mechanism. Most programming languages have a built-in function to swap elements of an array. Even if a swapping function does not exist, only a couple of extra lines of code are required to store one\n" +
        "array element in a temporary field in order to swap a second element into its place. Then the first element is moved out of the temporary field and back into the array at the second element's position.\n\n" +
        "Here is a simple example of how a bubble sort works: Suppose you have a row of children's toy blocks with letters on them. They are in random order and you wish to arrange them in alphabetical order from left to right.\n\n" +
        "1. Begin with the first block. In this case, the letter G.\n\n\t" +
        "![alt text](https://upload.wikimedia.org/wikibooks/en/1/19/Bubble01.png)\n\n" +
        "2. Look at the block just to the right of it.\n\n" +
        "3. If the block to the right should come before the block on the left, swap them so that they are in order\n\n\t" +
        "![alt text](https://upload.wikimedia.org/wikibooks/en/3/3b/Bubble02.png)\n\n" +
        "4. Compare the next block in line with the first, and repeat step 3. Do this until you run out of blocks. Then begin step one again with the second block.\n\n\t" +
        "![alt text](https://upload.wikimedia.org/wikibooks/en/b/bf/Bubble03.png)\n\n\t" +
        "![alt text](https://upload.wikimedia.org/wikibooks/en/2/27/Bubble04.png)\n\n\t" +
        "![alt text](https://upload.wikimedia.org/wikibooks/en/7/76/Bubble05.png)\n\n\t" +
        "![alt text](https://upload.wikimedia.org/wikibooks/en/a/a4/Bubble06.png)"
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
