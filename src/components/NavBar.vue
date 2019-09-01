<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <router-link class="navbar-brand" :to="path" tag="img" :src="logo">
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="row ml-auto  d-flex align-items-end flex-column">
                        <div class="col ">
                            <ul class="navbar-nav  ">
                                <router-link class="nav-item nav-link topLink" v-for="(topLink,index) in linksTop"
                                    :key="index" :to="topLink.path" tag="a" active-class="active" exact>
                                    <!-- <i :class="topLink.icon"></i> -->
                                    <!-- <i class="far fa-file-alt"></i> -->
                                    <font-awesome-icon :icon="['fa','Coffee']"></font-awesome-icon>
                                    {{ topLink.name }}
                                </router-link>
                            </ul>
                        </div>
                        <div class="col">
                            <ul class="navbar-nav  ">
                                <router-link class="nav-item nav-link downLink" v-for="(link,index) in links"
                                    :key="index" :to="link.path" tag="a" active-class="active" exact>
                                    {{ link.name }}

                                </router-link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div id="app">
            <!-- <font-awesome-icon icon="user-secret" /> -->
            <font-awesome-icon :icon="['fas', 'user-secret']" />

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                logo: require("../assets/img/mr-cake-logo.png"),
                path: "/",
                linksTop: [{
                        id: 1,
                        name: "Register",
                        path: "/register",
                        icon: "coffee"

                    },
                    {
                        id: 2,
                        name: "Login",
                        path: "/login"
                    },
                    {
                        id: 3,
                        name: "Cart",
                        path: "/cart"
                    }
                ],
                links: [{
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
<style>
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