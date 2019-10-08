<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-default">
      <div class="container">
        <a class="navbar-brand" href="#">Default Color</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-default">
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <a href="index.html">
                  <img src="assets/img/brand/blue.png" />
                </a>
              </div>
              <div class="col-6 collapse-close">
                <button
                  type="button"
                  class="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbar-default"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>

          <ul class="navbar-nav ml-lg-auto">
            <router-link to="/">
              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="#">
                  <i class="fa fa-user"></i>
                  <span class="nav-link-inner--text d-lg-none">About Me</span>
                </a>
              </li>
            </router-link>
            <router-link to="/problems">
              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="#">
                  <i class="fa fa-code"></i>
                  <span class="nav-link-inner--text d-lg-none"
                    >Common Algorithms</span
                  >
                </a>
              </li>
            </router-link>
            <router-link to="/photos">
              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="#">
                  <i class="fa fa-picture-o"></i>
                  <span class="nav-link-inner--text d-lg-none">Photos</span>
                </a>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style></style>
