<template>
  <div>
    <!-- Carousel--slide show -->
    <Carousel></Carousel>
    <!-- browse cakes -->
    <BrowseCake></BrowseCake> 

  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import BrowseCake from "../components/BrowseCake";

export default {
  components: {
    Carousel,
    BrowseCake,
  }
};
</script>

<style scoped>
</style>
