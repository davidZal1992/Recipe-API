<template>
  <div>
    <div class="left">
    <div class="myrecipetitle"><h1>Your Favorite Recipes</h1></div>
    <img class="img" src="../assets/profile.jpg" alt="Avatar">
    <div class="wrap">
    <div >
            <button class="profbtn">My Private Recipe<router-link to="/register"></router-link></button>
    </div>
    <div>
            <button class="profbtn">My Family  Recipe<router-link to="/register"></router-link></button>
    </div>
    </div>
    </div>
   <div class="right">
       <div class="results">
        <div class="results" v-if="this.myFavoriteRecipes.length!==0">
        <span v-for="recipe in this.myFavoriteRecipes" :key="recipe.id" class="recipes">
              <router-link :to="{ name: 'recipe', params: { id: recipe.id}}"><Result class="hover" :recipe="recipe" :class="{userecipesummery:true}" /></router-link>
        </span>
        </div>
        <div v-else>
            <NoResults :message="'No Recipes found.'" :class="{norecipesexists:true, addBton:true}"/> 
            <button style="margin-top:2%" class="profbtn">Share your secrets</button>
        </div>
       </div>
   </div>  
  </div>
</template>

<script>
import Result from '../components/Search/SearchResult/SearchResult'
import NoResults from '../components/NoResults/NoResults'
export default {
    name: 'MyFavorite',
    data() {
        return {
            myFavoriteRecipes:[]
        }
    },
    components:{
        Result,
        NoResults
    },
    mounted() {
    this.getFavoriteRecipes();
    },
    methods: {
        
       async getFavoriteRecipes(){
           try{
            const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/profiles/myprofile")
            let myFavoritedIds=response.data.favoriteRecipe;
            this.myFavoriteRecipes= await Promise.all(myFavoritedIds.map(async (recipeInfo) =>{
                if(recipeInfo.type==="spooncalur"){
                    const result = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes/"+recipeInfo.id)
                    return result.data
                }
                else{
                    const result = (await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes/userecipe/"+recipeInfo.id))
                    return result.data
                }    
             }
            ))
           }
           catch(err)
           {
             if(err.response.status===401){
                 this.$root.store.username=undefined
                 console.log('asd')
                 this.$router.push('/')
             }
              console.log(err.response)
           }
        }
    }
    
}
</script>

<style>
    .left{
        width: 25%;
        float: left;
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
        float:left;

    }
    .img {
    margin-left:10%;
    margin-top:10%;
    border-radius: 50%;
    width: 200px;
    height: 250px;
    border:2px solid white;
    }

    .profbtn{
        margin-bottom: 1rem;
        width: 150px;
        height: 45px;
        border:1px solid white;
        color:white;
        background:rgb(59, 189, 59);
        border-radius: 5px;
        font-family: 'Fjalla One', sans-serif;
        outline: none;
    }
    .wrap{
        margin-top:2rem;
        margin-left:2rem
    }

    .myrecipetitle{
    margin-top:2rem;
    opacity: 0.7;
    font-family: 'Fjalla One', sans-serif;
    color:White;
    }

    .hover:hover{
    -moz-box-shadow: 0 0 10px white;
    -webkit-box-shadow: 0 0 10px white;
    box-shadow: 0 0 10px white;
    cursor: pointer;
    }
</style>