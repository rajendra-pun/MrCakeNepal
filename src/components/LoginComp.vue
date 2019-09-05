<template>
  <div class="container my-5">

    <div class="row">
      <div class="login col-xs col-sm-6 col-md-4 col-md-offset-4  mx-auto py-5 ">
        <h4 class="text-center mb-0" style="font-size:21px;">Please Log In to Mr Cake</h4>
        <h3 class="text-center text-muted mb-0" style="margin-bottom: 10px!important;">
            <small style="font-size:50%; margin-bottom:10px;">Easily using</small>
        </h3>
        <form class="px-3">

        <div class="row ">
            <div class="col-xs-6 col-sm-6 col-md-6 ">
                <div class="btn btn-primary btn-facebook btn-block" style="">Facebook</div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 ">
                <div class="btn btn-danger btn-google btn-block" style="">Google</div>
             </div>
        </div>

        <div class="login-or">
          <hr class="hr-or ">
          <span class="span-or">or</span>
        </div>

          <div class="form-group my-3 ">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Email">
          </div>
          <div class="form-group my-3 ">
              <router-link :to="path" class="text-decoration-none float-right" tag="a">
              Forgot password?
            </router-link>
            <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password">
          </div>
          <button class="btn btn-danger btn-block">Login</button>
          <p class="mt-2">
            Not registered yet?
            <router-link :to="path" class="text-decoration-none" tag="a">
              Create an account
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
        path: "/signup"
      }
    }
  };
</script>
<style scoped>
  .login {
    -webkit-box-shadow: 0px 0px 32px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 32px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 32px -1px rgba(0, 0, 0, 0.75);
  }
  .btn-facebook{
    padding: 10px 20px;

  }
  .btn-google {
    background: rgb(255, 67, 102);
    border-color: rgb(255, 67, 102);
    padding: 10px 20px;

  }

  .btn-primary {
    /* color: #fff !important; */

  }

  .btn-google:hover {
    /* background-color: rgba(0, 0, 0, 0.4); */
    /* background: transparent; */
    /* background: rgb(199, 181, 184); */
    /* border-radius: none; */

  }
p{
    font-size: 14px;
}
  a {
    color: #444;
    font-size: 14px;
  }

  a:hover {
    color: rgb(255, 67, 102);
    /* background-color: transparent; */
    cursor: pointer;
  }

  h4 {
    color: rgb(255, 67, 102);
  }
  .login-or { /*yellow*/
    position: relative;
    font-size: 18px;
    color: #aaa;
    margin-top: 10px!important;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
}
.hr-or { /*red*/
    background-color: #cdcdcd!important;
    height: 1px;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
}
hr {/*blue*/
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
}
.span-or {
    display: block;
    position: absolute;
    left: 50%;
    top: -2px;
    margin-left: -25px;
    background-color: #fff;
    width: 50px;
    text-align: center;
}
</style>