<template>
  <div class="container-fluid">
    <div class="sidenav">
      <h6>
        <strong>
          Sorting
        </strong>
      </h6>
      <a href="#about">Insertion Sort</a>
      <a href="#services">Bubble Sort</a>
      <a href="#clients">Selection Sort</a>
      <a href="#contact">Quick Sort</a>
      <a href="#contact">Merge Sort</a>
      <h6>
        <strong>
          Sorting
        </strong>
      </h6>
      <a href="#about">Insertion Sort</a>
      <a href="#services">Bubble Sort</a>
      <a href="#clients">Selection Sort</a>
      <a href="#contact">Quick Sort</a>
      <a href="#contact">Merge Sort</a>
    </div>
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
              ><i class="ni ni-bell-55 mr-2"></i>Profile</a
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
              ><i class="ni ni-briefcase-24 mr-2"></i>Coding</a
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
              <p class="description">
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth.
              </p>
              <p class="description">
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="tabs-icons-text-2"
              role="tabpanel"
              aria-labelledby="tabs-icons-text-2-tab"
            >
              <p class="description">
                Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                cardigan american apparel, butcher voluptate nisi qui.
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="tabs-icons-text-3"
              role="tabpanel"
              aria-labelledby="tabs-icons-text-3-tab"
            >
              <p class="description">
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  left: 0;
  background-color: #f6f9fc;
  overflow-x: hidden;
  padding-top: 20px;
  border-right: 1px solid #e9ecef;
}

.sidenav h6 {
  padding: 10px 1px 1px 25px;
}

.sidenav a {
  padding: 1px 3px 3px 35px;
  text-decoration: none;
  font-size: 15px;
  color: #525f7f;
  display: block;
}

.sidenav a:hover {
  color: #212529;
}

.main {
  margin-left: 250px; /* Same as the width of the sidenav */
}

.tab-pane {
  overflow: scroll;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
