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
        <div class="col-md-12 mb-3 faq">
            <h2 class="mb-3">Frequently Asked Questions</h2>
            <div class="qa">
                <div class="question">
                    What are the modes of Payment?
                </div>
                <div class="answer">
                    We at the MrcakeNepal.com provide you the perfect service at lowest possible cost to save your money, keep our administration costs low and provide you 100% security. By accepting Credit Cards. We accept all VISA / MASTER CARD / AMERICAN EXPRESS / JCB / MAESTRO and Wire Transfer via bank / Cash on Delivery.
                </div>
            </div>
            <div class="qa">
                <div class="question">
                    Can I change the Delivery address or Delivery date of Order?
                </div>
                <div class="answer">
                    We will change the delivery address or delivery date as long as your order has not been delivered or is not on its way to being delivered. To request a change to delivery address, Please e-mail us the new address at order@ MrcakeNepal.com or call at 9801039617.
                </div>
            </div>
            <div class="qa">
                <div class="question">
                    Can I mention Specific Delivery time?
                </div>
                <div class="answer">
                    Yes, you can mention specific delivery time and we will try to make it on your favorable time . However please note that we do guarantee delivery of your order on your chosen date but do not guarantee the time always specially during the festival times.
                </div>
            </div>
            <div class="qa">
                <div class="question">
                    Will my Order Deliver on same day I order?
                </div>
                <div class="answer">
                    Orders Placed before 1:00 PM NST will be considered for Same Day Delivery But Orders Placed on Occassions Like Valentines day, Fathers day, Mothers day. Deepawali, Rakhya Bandhan etc may not be considered for same day delivery.
                </div>
            </div>
            <div class="qa">
                <div class="question">
                    How do I know Mr.CakeNepal.com has received my order or not?
                </div>
                <div class="answer">
                    As soon as we receive your order, an email is sent to the email id provided in the checkout form.
                </div>
            </div>
            <div class="qa">
                <div class="question">
                    When will the Order Delivered at What Time?
                </div>
                <div class="answer">
                    We can not guarantee the time of delivery, but the flowers will be delivered on the delivery date specified by you. If your flowers need to reach the recipient at a specific time please mention it in the additional information box in checkout form or send us an email to order@mrcakenepal.com with your order number. Our delivery staff will do their utmost to meet your delivery time request, however we cannot guarantee the time of delivery.
                </div>
            </div>
      </div>
      </div></div>


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
          id:1,
          name:"FAQ's",
          path:"/faq"
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

.faq .qa {
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: justify;
    color: #555;
    font-size:15px;
}
.faq h2 {
  font-size: 30px;
  color: rgb(255, 67, 102);
  font-family: brixsans;
}
.qa .question {
    font-weight: bold;
        text-align: justify;
    color: #555;
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
