<template>
  <div>
    <div class="bd-example">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div
            class="carousel-item cake"
            v-for="(slide, index) in slideImg"
            :key="index"
            :class="{ active: index==0 }"
            :style="{backgroundImage:`url(${slide.imgUrl})`}"
          >
            <!-- <div class="row"> -->
            <div class="bg-dim"></div>

            <!-- <img :src="slide.imgUrl" alt class="img-fluid" /> -->
            <div class="carousel-caption d-none d-sm-block">
              <h5>{{ slide.title }}</h5>
              <p>{{ slide.details}}</p>
              <button class="btn btn-light p-2">{{ slide.btn1}}</button>
              <button class="btn btn-danger ml-3 p-2">{{ slide.btn2}}</button>
            </div>
            <!-- </div> -->
          </div>
        </div>
        <a
          class="carousel-control-prev slide-button-left ml-4"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next slide-button-right mr-4"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fontSize:'50px',
      methods:{

      },
      slideImg: [
        {
          id: 1,
          title: "Birthday Cake",
          details: "Make Birthdays speical with beautiful baked cakes.",
          btn1: "ORDER NOW",
          btn2: "VIEW ALL",
          imgUrl: require("@/assets/img/cake1.jpg")
        },
        {
          id: 2,
          title: "Farewell Cake",
          details:
            "Order farewell cakes to give special farewell to your dear ones.",
          btn1: "ORDER NOW",
          btn2: "VIEW ALL",
          imgUrl: require("@/assets/img/cake2.jpg")
        },
        {
          id: 3,
          title: "Weeding Cake",
          details: "Order elegant wedding cakes for your special day.",
          btn1: "ORDER NOW",
          btn2: "VIEW ALL",
          imgUrl: require("@/assets/img/cake3.jpg")
        }
      ]
    };
  }
};
</script>

<style scoped>
.cake {
  height: 415px;
  widows: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-dim {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
}
.slide-text1 {
  left: 0 !important;
  top: 5%;
  right: 0;
  margin: auto;
  padding: 10px;
  position: absolute !important;
  text-align: left !important;
  padding: 10px 85px;
}
.slide-text2 {
  /* top: 0; */
}
.slide-text3 {
  left: 0;
  top: 5%;
  right: 0;
  margin: auto;
  padding: 10px;
  position: absolute;
  text-align: right;
  padding: 10px 85px;
}

.slide-text2 {
  left: 0;
  top: 5%;
  right: 0;
  margin: auto;
  padding: 10px;
  position: absolute;
  /* text-align: left; */
  padding: 10px 85px;
}
.slide-button-left,
.slide-button-right {
  /* background-color: red; */
  /* width: 40px; */
  /* height: 50px;  */
  height: 70px;
  width: 45px !important;
  position: absolute;
  top: 37% !important;
  z-index: 100 !important;
  border-radius: 50% !important;
  cursor: pointer;
  color: white;
}
.slide-button-left:hover,
.slide-button-right:hover {
  background-color: #3c494f;
}
.slide-text1 h5,
.slide-text2 h5,
.slide-text3 h5 {
  font-size: 60px;
  /* font-size: 60vw; */
  font-weight: 100px;
}
p {
  font-size: 20px;
  font-weight: 80px;
}

.btn1:hover,
.btn2:hover {
  /* background-color: #000; */
  /* border: 0; */
  /* color: #fff; */
}
</style>