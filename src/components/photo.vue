<template>
  <div class="card hvr-grow">
    <img :src="url" class="card-img-top" />
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: {
    url: String
  }
};
</script>

<style scoped>
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}
</style>
