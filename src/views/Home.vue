<template>
  <div>
    <main class="profile-page">
      <div class="topspacing"></div>
      <section class="section">
        <div class="container">
          <div class="card card-profile shadow mt--300">
            <div class="px-4">
              <div class="row justify-content-center">
                <div class="col-lg-3 order-lg-2">
                  <div class="card-profile-image">
                    <img
                      src="../assets/avatar.png"
                      class="rounded-circle"
                      alt="image"
                    />
                  </div>
                </div>
                <div
                  class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"
                >
                  <div class="card-profile-actions py-4 mt-lg-0">
                    <a
                      href="https://www.linkedin.com/in/ussama-azam-000191180/"
                      class="btn btn-sm btn-info mr-4"
                      >LinkedIn</a
                    >
                    <a
                      href="mailto:azamussama@gmail.com"
                      class="btn btn-sm btn-default float-right"
                      >email</a
                    >
                  </div>
                </div>
                <div class="col-lg-4 order-lg-1">
                  <div class="card-profile-stats d-flex justify-content-center">
                    <div>
                      <a href="https://leetcode.com/nuclearoreo/">
                        <span
                          class="iconify"
                          data-icon="simple-icons:leetcode"
                          data-inline="false"
                        ></span>
                        <span class="description hide">LeetCode</span>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/NuclearOreo">
                        <span
                          class="iconify"
                          data-icon="zmdi:github"
                          data-inline="false"
                        ></span>
                        <span class="description hide">GitHub</span>
                      </a>
                    </div>
                    <div>
                      <a href="https://unsplash.com/@ussamaazam">
                        <span
                          class="iconify"
                          data-icon="simple-icons:unsplash"
                          data-inline="false"
                        ></span>
                        <span class="description hide">Unsplash</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5">
                <h3>Ussama Azam</h3>
                <div class="h6 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Miami, United States
                </div>
                <div class="h6 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Software
                  Developer - City Furniture
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>University of Central
                  Florida
                </div>
              </div>
              <div class="mt-5 py-5 border-top text-center">
                <div class="row justify-content-center">
                  <div class="col-lg-9">
                    <p>
                      An individual that enjoys exploring and challenging
                      himself. I'm always open to trying new ideas and jumping
                      into challenging adventures. In my eyes, life is best
                      lived by doing what you enjoy and design a world around to
                      keep your passions alive. No money in the world will
                      replace you enjoying life om current the moment because
                      that's the fuel that keeps you going. Live life through
                      the roads you've set.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script></script>

<style scoped>
.topspacing {
  margin-top: 25%;
}

@media (max-width: 1024px) {
  .topspacing {
    margin-top: 35%;
  }
  .hide {
    display: none;
  }
}

@media (max-width: 450px) {
  .topspacing {
    margin-top: 53%;
  }
  .hide {
    display: none;
  }
}

@media (min-width: 1024px) {
  .topspacing {
    margin-top: 400px;
  }
}
</style>
