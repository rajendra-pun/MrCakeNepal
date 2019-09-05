<template>
  <div class="container cart">
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
            >{{ link.name }}</router-link>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="container">
          <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col-md-3">Image</th>
              <th scope="col-md-3">Product</th>
              <th scope="col-md-2">Quality</th>
              <th scope="col-md-2">Price</th>
              <th scope="col-md-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
           
            
          </tbody>
        </table>
        </div>
        <div><p>No item on cart!!!</p></div>
        <button class="btn btn-danger cart-btn">Add More Gifts</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "/faq",
      links: [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "Cart",
          path: "/cart"
        }
      ]
    };
  }
};
</script>

<style scoped>
a {
  color: #555;
  text-decoration: none !important;
}
a:hover {
  color: rgb(255, 67, 102);
  /* background-color: transparent; */
  cursor: pointer;
}
.cart-btn{
    margin: 0px 0 30px 0;
    padding: 10px 15px;
    float: right;
}
</style>
