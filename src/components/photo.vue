<template>
  <div class="card">
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

<style scoped></style>
