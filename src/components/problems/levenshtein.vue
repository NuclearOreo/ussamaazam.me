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
              ><span style="color: #66d9ef">def</span> <span style="color: #a6e22e">levenshteinDistance</span><span style="color: #f8f8f2">(str1,</span> <span style="color: #f8f8f2">str2):</span>
	<span style="color: #f8f8f2">m</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">*</span> <span style="color: #f8f8f2">(len(str1)</span><span style="color: #f92672">+</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">)</span> <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(len(str2)</span><span style="color: #f92672">+</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">)]</span>
	
	<span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(len(m)):</span>
		<span style="color: #f8f8f2">m[i][</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">i</span>
		
	<span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">i</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(len(m[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">])):</span>
		<span style="color: #f8f8f2">m[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">][i]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">i</span>
		
	<span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">r</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">len(m)):</span>
		<span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">c</span> <span style="color: #f92672">in</span> <span style="color: #f8f8f2">range(</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">len(m[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">])):</span>
			<span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">str1[c</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">==</span> <span style="color: #f8f8f2">str2[r</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]:</span>
				<span style="color: #f8f8f2">m[r][c]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">m[r</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">][c</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span>
			<span style="color: #66d9ef">else</span><span style="color: #f8f8f2">:</span>
				<span style="color: #f8f8f2">m[r][c]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">min(m[r</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">][c</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">m[r][c</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">m[r</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">][c])</span> <span style="color: #f92672">+</span> <span style="color: #ae81ff">1</span>
	
	<span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">m[len(str2)][len(str1)]</span>
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
  name: "Levenshtein",
  data() {
    return {
      problem:
        "# Levenshtein Distance\n\n" +
        "Mathematically, the Levenshtein distance between two strings a, b (of length |a| and |b| respectively) is given by leva,b(|a|,|b|) where:\n\n" +
        "![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/4520f5376b54613a5b0e6c6db46083989f901821)\n\n" +
        "where 1(ai≠bi) is the indicator function equal to 0 when ai≠bi and equal to 1 otherwise, and leva, b(i,j) is the distance between the first i characters of a and the first j characters of b. \n\n" +
        "Note that the first element in the minimum corresponds to deletion (from a to b), the second to insertion and the third to match or mismatch, depending on whether the respective symbols are the same.\n\n" +
        "The Levenshtein algorithm calculates the least number of edit operations that are necessary to modify one string to obtain another string. The most common way of calculating this is by the dynamic programming approach:\n\n" +
        "- A matrix is initialized measuring in the (m, n) cell the Levenshtein distance between the m-character prefix of one with the n-prefix of the other word.\n" +
        "- The matrix can be filled from the upper left to the lower right corner.\n" +
        "- Each jump horizontally or vertically corresponds to an insert or a delete, respectively\n" +
        "- The cost is normally set to 1 for each of the operations.\n" +
        "- The diagonal jump can cost either one, if the two characters in the row and column do not match else 0, if they match. Each cell always minimizes the cost locally.\n" +
        "- This way the number in the lower right corner is the Levenshtein distance between both words.\n\n" +
        'An example that features the comparison of "HONDA" and "HYUNDAI",\n\n' +
        "![alt text](https://23o0161033pm1289qo1hzrwi-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/L1.jpg)"
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
