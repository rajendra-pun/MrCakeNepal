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
          <div class="cake1 carousel-item active">
            <div class="bg-dim"></div>
            <div class="carousel-caption d-none d-sm-block slide-text1">
              <h5 class="mb-5">Birthday Cake</h5>
              <p class="mb-5">Make Birthdays speical with beautiful baked cakes.</p>
              <button class="btn1 btn btn-light p-2">ORDER NOW</button>
              <button class="btn2 btn btn-danger ml-3 p-2">VIEW ALL</button>
            </div>
          </div>
          <div class="cake2 carousel-item">
            <div class="bg-dim"></div>
            <div class="carousel-caption pt-5 d-none d-sm-block slide-text2">
              <h5 class="my-2">Farewell Cake</h5>
              <p class="my-4">Order farewell cakes to give special farewell to your dear ones.</p>
              <button class="btn1 btn btn-light p-2">ORDER NOW</button>
              <button class="btn2 btn btn-danger ml-3 p-2">VIEW ALL</button>
            </div>
          </div>
          <div class="cake3 carousel-item">
            <div class="bg-dim"></div>
            <div class="carousel-caption d-none d-sm-block slide-text3">
              <h5 class="my-2">Weeding Cake</h5>
              <p class="my-4">Order elegant wedding cakes for your special day.</p>
              <button class="btn1 btn btn-light p-2">ORDER NOW</button>
              <button class="btn2 btn btn-danger ml-3 p-2">VIEW ALL</button>
            </div>
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
  slideImg:[
    {
      id:1,
      title:"Birthday Cake",
      details:"Make Birthdays speical with beautiful baked cakes.",
      btn1:"ORDER NOW",
      btn2:"VIEW ALL",
      imgUrl:""
    }
  ]
};
</script>

<style scoped>
.cake1 {
  background-image: url("../assets/img/cake1.jpg");
}
.cake2 {
  background-image: url("../assets/img/cake2.jpg");
}
.cake3 {
  background-image: url("../assets/img/cake3.jpg");
}
.cake1,
.cake2,
.cake3 {
  height: 415px;
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