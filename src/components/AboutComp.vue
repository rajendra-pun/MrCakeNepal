<template>
  <div class="container about">

    <div class="row">
      <div class="col-md-12 mb-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            
            <router-link
             v-for="(link, index) in links"
             :key="index"
             :to="link.path"
             class="breadcrumb-item"
             tag="a"
             active-class="active"
             exact
             >
              {{ link.name }}
             </router-link>
          </ol>
        </nav>
      </div>
    </div>
      <div class="row">
          <div class="col-md-12">

    <h1>About Us</h1>
    <p>Mr. Cake Nepal was created in 2016 to cater to the needs of Nepalese based overseas who wish to send gifts to family and friends in their home country. It was amongst the first Nepal centric e-commerce companies providing a leading platform for delivery of high quality merchandise and services to the Non-resident Nepali community (NRN). Creation of this service enabled the company to put in place a large logistics system, relationships with high recognition brands in the Nepali market and a robust distribution process.</p>
    

    <h4>Mr. Cake Nepal to deliver cakes to Nepal online.</h4>
    <p>Order online for Cake delivery in Nepal along with Cakes, flowers, sweets and more gifts. You may order eggless cake, birthday cake, kids cake, tier-cake and more. We deliver black forest cake, pineapple cake, black forest cake, fresh fruits cake and 5 star bakery cake. Our expert bakery make fresh cakes for same day delivery. We also deliver wide varieties of candle with cake . You may also add message card, balloons, candle, chocolates to your order. For any query, please call us or write a mail for prompt reply. We deliver on all 365 days a year. You may now send cake to Nepal from USA, Canada, U.K. Australia and Europe . Just order online and pay online through credit card, PayPal or online banking. We shall then deliver your order on your chosen date. You may also order cake for anniversary, wedding, valentine’s day, mothers day , fathers day or Christmas and we shall deliver all.</p>

    <h4>Cake Value: All our products and services shall be offered with the same love, care and affection as if, they were meant for the most beloved person</h4>
    <p>Use the best ingredients, offer fresh bakery products, customized to suit personal tastes, with excellent standards of creativity, and delivered with the highest degree of timeliness and assurance of impeccable quality. Good intentions in dealing with stakeholders like Suppliers, Employees, Franchisees, Dealers and Consumers yield good products and services. Cherish, honour and respect, the goodwill and cooperation given by stakeholders like Suppliers, Employees, Franchisees, Dealers and Consumers.</p>

    <p>
      Mr. Cake Nepal currently has relationships with prestigious vendors in Nepal having arrangements to supply products and deliver the cakes. The website has over thousands online transacting customers. For further information on shopping online or the various policies, we suggest that you visit the section on
      <router-link :to="path" tag="a">Frequenty Asked Questions (FAQs).</router-link>
    </p>
  </div>
          </div>
      </div>


</template>

<script>
export default {
  data() {
    return {
      path: "/faq",
      links:[
        {
          id:1,
          name:"Home",
          path:"/"
        },
        {
          id:2,
          name:"About",
          path:"/about"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* breadcrumb starts */
.breadcrumb{
  background-color: #f5f5f5!important;
  border-radius: 4px;
  padding:8px 15px;
  margin-bottom: 20px;
}
/* this for slace(/) which comes between home and about */
.breadcrumb-item+.breadcrumb-item::before {
    padding: 0 5px;
    color: #ccc;
}
/* breadcrumb ends */

.about p  {
  text-align: justify;
  color: #555;
  margin: 0 0 10px;
}
.about h1 {
  font-size: 36px;
  color: rgb(255, 67, 102);
  font-family: brixsans;
}
.about h4 {
  font-family: brixsans;
  color: rgb(255, 67, 102);
  font-size: 18px;
}
a {
  color: #555;
  text-decoration: none!important;
}
 a:hover {
  color: rgb(255, 67, 102);
  /* background-color: transparent; */
  cursor: pointer;
}
</style>
