<template>
  <div>
    <!-- Carousel--slide show -->
    <!-- <Carousel></Carousel> -->
    <SlideShow></SlideShow>
    <!-- browse cakes -->
    <BrowseCake></BrowseCake> 

  </div>
</template>

<script>
// import Carousel from "../components/Carousel";
import BrowseCake from "../components/BrowseCake";
import SlideShow from "../components/SlideShow";

export default {
  components: {
    // Carousel,
    BrowseCake,
    SlideShow
  }
};
</script>

<style scoped>
</style>
