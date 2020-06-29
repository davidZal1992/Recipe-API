<template>
  <span>
      <div class="sign-in-form"> 
        <h1>Sign In Now</h1>
        <form>
        <input type="text" class="input-box" v-model="username" placeholder="Your User name">
        <input type="password" class="input-box" v-model="password" placeholder="Your Password">
        <input type="submit" class="signin-btn" value="Sign in" v-on:click="login">
        <hr>
        <p>Do you not have an account?<router-link to="/signin"> Sign up</router-link></p>
        </form>
    </div>
  </span>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
        username: "",
        password: "",
        justForReload:""
   }
 },
 methods:{
  async login(e){
      try {
        e.preventDefault()
        const response = await this.axios.post(
          "https://david-matan-recipe-api-server.herokuapp.com/api/auth",
          {
            username: this.username,
            password: this.password
          },
        );
        console.log(response)
        this.$root.store.login(this.username)
        await this.getFavoritd()
        this.$router.go(0);
      } catch (err) {
        console.log(err);
      }
  },
  async getFavoritd(){
      try{
        const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/profiles/myprofile")
        const userData = response.data
        if(userData.favoriteRecipe==="")
        userData.favoriteRecipe=[]
        localStorage.setItem('favorites',JSON.stringify(userData.favoriteRecipe))
        localStorage.setItem('watch',JSON.stringify(userData.watchedRecipe))
      }
    catch(err)
    {
      console.log(err)
    }
}
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Indie+Flower&family=Marck+Script&family=Merienda&family=Oleo+Script&display=swap');






.sign-in-form{
    width: 300px;
    margin-top:50%;
    margin-left:5%;
    margin:5vh auto;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.6);
    background: rgba(160, 160, 160, 0.5);
    padding: 20px;
    border-radius: 30px;
}

.sign-in-form h1{
    color: white;
    margin-bottom: 20px;
}
/* Clear floats after the columns */

.input-box
{
   text-align: center;
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
    font-size: 15px;
}



.icons{
  color:white;
  margin-left:15px;
}
</style>