<template>
  <div class="container">
    <div class="row">
      <div class="register col-sm-10 col-xs-10  col-md-4 my-5  mx-auto py-5">
        <h4 class="text-center" style="font-size:21px;">Please Register to Mr Cake</h4>

        <form class="px-3">
          <div class="form-group my-3 ">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="E-mail address">
          </div>
          <div class="form-group my-3 ">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group my-3 ">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password(again)">
          </div>
          <button class="btn btn-danger ">Register</button>
          <p class="mt-2">
            Already registered?
            <router-link :to="path" class="text-decoration-none" tag="a">
              Login to your account
            </router-link>
          </p>

        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        path: "/login"
      }
    }
  };
</script>
<style scoped>
  .register {
    -webkit-box-shadow: 0px 0px 32px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 32px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 32px -1px rgba(0, 0, 0, 0.75);
  }

  .btn {
    background: rgb(255, 67, 102);
    border-color: rgb(255, 67, 102);
    padding: 10px 20px;

  }

  .btn-primary {
    /* color: #fff !important; */

  }

  .btn:hover {
    /* background-color: rgba(0, 0, 0, 0.4); */
    /* background: transparent; */
    background: rgb(255, 67, 102);

  }

  a {
    color: #444;
  }

  a:hover {
    color: rgb(255, 67, 102);
    /* background-color: transparent; */
    cursor: pointer;
  }

  h4 {
    color: rgb(255, 67, 102);
  }
</style>