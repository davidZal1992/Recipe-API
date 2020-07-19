<template>
  <span>
      <div class="sign-in-form"> 
        <h1>Sign In Now</h1>
        <form>
            <div class=inline>
            <font-awesome-icon class=iconlogin icon="user"/>
            <input
            class="form-control"
            type="text"
            v-model.trim="$v.username.$model"
            :class="{'is-invalid': $v.username.$error,  'is-valid': !$v.username.$invalid }"
            placeholder="Enter User Name"/>
            </div>
            <div class=inline>
            <font-awesome-icon class=iconlogin icon="lock"/> 
            <input
            class="form-control"
            type="password"
            placeholder="Enter Password"
            v-model.trim="$v.password.$model"
            :class="{'is-invalid': $v.password.$error,  'is-valid': !$v.password.$invalid }"/>
         
            </div>
        <input  type="submit" class='signin-btn' value="Sign in" v-on:click="login" :disabled="clickable"  >
        <p id="errorAlert" role="alert" v-if="error.length>0">Worng password or username </p>
        <hr>
        <p>Do you not have an account?  <router-link style="color:blue;text-decoration: underline blue;" to="/signup">Sign up</router-link></p>
        </form>
    </div>
  </span>
</template>

<script>
import {
  required,
} from "vuelidate/lib/validators";

export default {
  
  name: 'SignIn',
  data() {
    return {
        username: "",
        password: "",
        error: [],
        incorrectAuth:false,
        justForReload:""
   }
 },
 validations:{
   username:{
    required
   },
  password:{
    required
  } 
 },

 
  computed: {
              clickable(){
                    if(this.password.length>4 && this.username.length>2){
                      return false; }
                    else{ return true }   
              }  
  },
 methods:{
  async login(e){
      try {
        e.preventDefault()
        await this.axios.post(
          "https://david-matan-recipe-api-server.herokuapp.com/api/auth",
          {
            username: this.username,
            password: this.password
          },
        );
          this.incorrectAuth=false;
          await this.getFavoritedAndWatch(this.username)
          this.$router.push(this.$route.query.redirect || '/')
          window.location.reload()
        } 
        catch (err) {
        if(err.response.status===400)
        this.incorrectAuth=true;
        this.error.push(err.response.data.message);
      }
      
  },
  async getFavoritedAndWatch(username){
      try{
        const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/profiles/myprofile")
        const responseUser = await this.axios.get('https://david-matan-recipe-api-server.herokuapp.com/api/users/')
        const userData = response.data
        if(userData.favoriteRecipe==="")
        userData.favoriteRecipe=[]
        if(userData.watchedRecipe==="")
        userData.watchedRecipe=[]
        localStorage.setItem('favorites',JSON.stringify(userData.favoriteRecipe))
        localStorage.setItem('watch',JSON.stringify(userData.watchedRecipe))
         this.$root.store.login(username,responseUser.data.url);
      }
    catch(err)
    {
      console.log(err.response)
    }
}
}
}
</script>

<style  >
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Indie+Flower&family=Marck+Script&family=Merienda&family=Oleo+Script&display=swap');

.sign-in-form{
    width: 300px;
    margin:10% auto;
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

.sign-in-form input
{
    text-align: center;
    border-radius: 20px;
    margin-top:1rem;
    margin-left:1rem;
    padding: 7px;
    width: 80%;
    border: 1px solid #999;
    outline: none;
}


.signin-btn{
    color:#fff;
    padding: 10px;
    border-radius: 20px;
    font-size:15px;
    margin:10px 0;
    margin-left:15px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: rgb(59, 189, 59);
}
.signin-btn:disabled{
   opacity: 0.4;
}

.iconlogin{
  margin-top:22px;
  font-size:1.5em;
  color:white;
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
#errorAlert{
  color: red;
}

</style>