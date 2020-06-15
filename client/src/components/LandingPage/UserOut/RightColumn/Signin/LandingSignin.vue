<template>
  <span>
      <div class="sign-in-form"> 
        <h1>Sign In Now</h1>
        <form>
        <input type="email" class="input-box" placeholder="Your User name">
        <input type="password" class="input-box" placeholder="Your Password">
        <input type="submit" class="signin-btn" value="Sign in">
        <hr>
        <p>Do you have an account?<router-link to="/signin"> Sign in</router-link></p>
        </form>
    </div>
  </span>
</template>

<script>
export default {
  name: 'SignIn'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Indie+Flower&family=Marck+Script&family=Merienda&family=Oleo+Script&display=swap');






.sign-in-form{
    width: 300px;
    margin:20vh auto ;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.6);
    background: rgba(160, 160, 160, 0.5);
    padding: 20px;
    text-align: center;
    border-radius: 30px;
}

.sign-in-form h1{
    color: white;
    margin-bottom: 20px;
}
/* Clear floats after the columns */

.input-box
{
    border-radius: 20px;
    padding: 7px;
    margin: 10px 0;
    width: 100%;
    border: 1px solid #999;
    outline: none;
}


.signin-btn{
    color:#fff;
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    font-size:15px;
    margin:10px 0;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: rgb(59, 189, 59);
}



hr{
    width:80%;

}


p{
    color:white;
}



.icons{
  color:white;
  margin-left:15px;
}
</style>