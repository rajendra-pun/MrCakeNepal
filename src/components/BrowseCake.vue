<template>
<div>
    <div class="container my-4">
<div class="row"> 
  <div v-for="(cake, index) in cakes" :key="index" class="col-sm-6 my-4"> 
    <div class="cake-view ">
    <div class="card  browse-cakes " :style="{backgroundImage:`url(${cake.imgUrl})`}">      
      <div class="card-body text-center bg-dim" >
        <h5 class="card-title text-white ">{{ cake.title }}</h5>
        <a href="#" class="btn btn-primary">{{ cake.btn }}</a>
      </div>
    </div>
    </div>   
  </div>   
</div>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cakes: [
        {
          id: 1,
          title: "Birthday",
          btn: "Browse Cake",
          imgUrl: require("@/assets/img/browseCake/birthday.jpg")
        },
        {
          id: 2,
          title: "Cartoon cakes",
          btn: "Browse Cake",
          imgUrl: require("@/assets/img/browseCake/motu-patlu.jpg")
        },
        {
          id: 3,
          title: "Baby Shower",
          btn: "Browse Cake",
          imgUrl: require("@/assets/img/browseCake/baby-shower.jpg")
        },
        {
          id: 4,
          title: "Weeding / Anniversary",
          btn: "Browse Cake",
          imgUrl: require("@/assets/img/browseCake/wedding.jpeg")
        }
      ]
    };
  }
};
</script>
<style scoped>
/* brows cakes */
.browse-cakes {
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s ease-in-out;
}
.cake-view {
  overflow: hidden;
}
.cake-view:hover .browse-cakes {
  transform: scale(1.1);
}
.browse-cakes h5 {
  font-size: 40px;
}
.browse-cakes .btn {
  background: transparent;
  border: 2px solid #ffffff;
  padding: 6px 25px !important;
}
.browse-cakes .btn:hover {
  background: #fff;
  color: #000;
}
.bg-dim {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
}
</style>