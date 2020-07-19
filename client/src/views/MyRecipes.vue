<template>
  <div class="recipage">
    <div class="left">
        <div class="myrecipetitle"><h1>Your Personally Recipes</h1></div>
        <img class="img" :src=$root.store.profilePicture />
        <div class="wrap">
            <div >
                <router-link to="/myfavorite"><GreenButton type="My Favorite Recipe"/></router-link>
            </div>
            <div>
                <router-link to="/myfamily"><GreenButton type="My Family Recipe"/></router-link>
            </div>
        </div>
    </div>
   <div class="right">
       <div class="results">
        <div class="results" v-if="this.myRecipes.length!==0">
        <span v-for="recipe in this.myRecipes" :key="recipe.id" class="recipes">
                <router-link :to="{ name: 'recipe', params: {type:recipe.type,id: recipe.id}}"><Result :recipe="recipe" :class="{userecipesummery:true}" /></router-link>
        </span>
        </div>
        <div v-else>
            <NoResults :message="'No Recipes found. Create your first Recipe'" :class="{norecipesexists:true, addBton:true}"/> 
            <button style="margin-top:2%" class="profbtn">Share your secrets</button>
        </div>
       </div>
   </div>  
  </div>
</template>

<script>
import Result from '../components/Search/SearchResult/SearchResult'
import NoResults from '../components/NoResults/NoResults'
import GreenButton from '../components/GreenButton/GreenButton'
export default {
    name: 'MyPrivate',
    data() {
        return {
            myRecipes:[]
        }
    },
    components:{
        Result,
        NoResults,
        GreenButton
    },
    mounted() {
    this.getProfileRecipe();
    },
    methods: {

       async getProfileRecipe(){
           try{
            this.myRecipes=[]
            const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes",{withCredentials: true})
            this.myRecipes=response.data.preview;
           }
           catch(err)
           {
             if(err.response.status===404){
               this.myRecipes=[]   
             }

             if(err.response.status===401){
               this.$root.store.username=undefined
               this.$router.push('/login')
             }
             console.clear()
           }
        }
    }
    
}
</script>

<style >

.recipage{
    display: flex;
}
.left{
    width: 25%;
    float:left;
    background: url('../assets/black-background.jpg') ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;
    height: 90vh;
    border-right: 0.5px solid white;
    box-shadow: 1px 0px 43px white;
}
.right{
    width:75%;
    float: left;
}

.img {
    margin-top:10%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    width: 200px;
    height: 250px;
    border:2px solid white;
}

.wrap{
     margin-top:1rem;
}

.myrecipetitle{
    margin-top:2rem;
    opacity: 0.7;
    font-family: 'Fjalla One', sans-serif;
    color:White;
}
</style>