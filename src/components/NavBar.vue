<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light navbar-bg">
      <div class="container">
        <router-link class="navbar-brand" :to="path" tag="img" :src="logo">
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="row ml-auto  d-flex align-items-end flex-column">
            <div class="col ">
              <ul class="navbar-nav  ">
                <router-link
                  class="nav-item nav-link topLink"
                  v-for="(topLink,index) in linksTop"
                  :key="index"
                  :to="topLink.path"
                  tag="a"
                  active-class="active"
                  exact
                >
                  <font-awesome-icon :icon="['topLink.icon']"></font-awesome-icon>
                  {{ topLink.name }}
                </router-link>
              </ul>
            </div>
            <div class="col">
              <ul class="navbar-nav  ">
                <router-link
                  class="nav-item nav-link downLink"
                  v-for="(link,index) in links"
                  :key="index"
                  :to="link.path"
                  tag="a"
                  active-class="active"
                  exact
                >
                  {{ link.name }}
                </router-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

  // import { faswatchbook } from '@fortawesome/free-solid-svg-icons'
  //   import { faSpinner } from '@fortawesome/free-solid-svg-icons'
  import { faCoffee } from "@fortawesome/free-solid-svg-icons";
  //   import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

  export default {
    props: ['faCoffee'],
    data() {
      return {
        // myIcon:faSpinner,
        myIcon: faCoffee,
        // book:faswatchbook,
        // icon: "'fas', 'user-secret'",

        logo: require("../assets/img/mr-cake-logo.png"),
        path: "/",
        linksTop: [
          {
            id: 1,
            name: "Register",
            path: "/register",
            icon: "faCoffee"
          },
          {
            id: 2,
            name: "Login",
            path: "/login"
            // icon: "'fas', 'user-secret'"
          },
          {
            id: 3,
            name: "Cart",
            path: "/cart"
            // icon: "'fas', 'user-secret'"
          }
        ],
        links: [
          {
            id: 1,
            name: "Home",
            path: "/"
          },
          {
            id: 2,
            name: "About",
            path: "/about"
          },
          {
            id: 3,
            name: "Faq",
            path: "/faq"
          },
          {
            id: 4,
            name: "Contact",
            path: "/contact"
          }
        ]
      };
    }
  };
</script>
<style scoped>
.navbar-bg{
  background-color: #FFF;
    border-color: #FFF;
    border-bottom: 1px solid rgba(255, 67, 102, 0.5);
}
  .container{
    /* width: 100%; */
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

  }
  .container img {
    margin-top: 20px;
    display: block;
  }

  .navbar-nav .topLink:hover {
    color: rgb(255, 67, 102) !important;
    background-color: transparent;
    /* border-bottom: 2px solid rgb(255, 67, 102); */
    cursor: pointer;
  }

  .navbar-nav .downLink:hover {
    color: rgb(255, 67, 102) !important;
    background-color: transparent;
    border-bottom: 2px solid rgb(255, 67, 102);
    cursor: pointer;
  }

  .navbar-nav .active {
    color: rgb(255, 67, 102) !important;
    background-color: transparent;
    cursor: pointer;
  }

  .topLink {
    border-right: 1px solid #dddddd;
    /* background: yellow; */
    height: 25px;
    padding-top: 0 !important;
    margin-top: 10px;
  }
</style>
