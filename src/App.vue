<template>
  <div  id="app">

    <NavBar></NavBar>
    <!-- <Home></Home> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
// import Home from './views/Home'
import NavBar from "./components/NavBar";
import Footer from "./views/Footer";

export default {
  components: {
    // Home,
    NavBar,
    Footer
    // Slick
  }
};
</script>
<style scoped>
* {
  margin-top: 0px;
}
</style>