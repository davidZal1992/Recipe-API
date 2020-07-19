<template>
  <div class="myFavoriteRecipe">
    <div class="left">
    <div class="myrecipetitle"><h1>Your Favorite Recipes</h1></div>
    <img class="img" :src=$root.store.profilePicture alt="Avatar">
    <div class="wrap">
        <div >
            <router-link to="/myrecipes"><GreenButton type="My Private Recipe"/></router-link>
        </div>
        <div>
            <router-link to="/myfamily"><GreenButton type="My Family Recipe"/></router-link>
        </div>
    </div>
    </div>
   <div class="right">
       <div class="results">
        <div class="results" v-if="this.myFavoriteRecipes.length!==0">
        <span v-for="recipe in this.myFavoriteRecipes" :key="recipe.id" class="recipes">
              <router-link :to="{ name: 'recipe', params: {type:recipe.type,id: recipe.id}}"><Result class="hover" :recipe="recipe" :class="{userecipesummery:true}" /></router-link>
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
import GreenButton from '../components/GreenButton/GreenButton'
export default {
    name: 'MyFavorite',
    data() {
        return {
            myFavoriteRecipes:[]
        }
    },
    components:{
        Result,
        NoResults,
        GreenButton
    },
    created() {
    this.getFavoriteRecipes();
    },
    methods: {
        
       async getFavoriteRecipes(){
           try{
            const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/profiles/myprofile")
            let myFavoritedIds=response.data.favoriteRecipe;
            this.myFavoriteRecipes= await Promise.all(myFavoritedIds.map(async (recipeInfo) =>{
                if(recipeInfo.type==="spooncalur"){
                    let result = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes/"+recipeInfo.id)
                    result.data.type="spooncalur"
                    return result.data
                }
                else if(recipeInfo.type==="user"){
                        let result = (await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes/userecipe/"+recipeInfo.id))
                        result.data.type="user"
                        return result.data
                    }
                else if(recipeInfo.type==="family"){
                        let result = (await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes/userecipe/"+recipeInfo.id))
                        result.data.type="family"
                        return result.data
                        }       
             }
            ))
           }
           catch(err)
           {
             if(err.response.status===401){
                 this.$root.store.username=undefined
                 this.$router.push('/login')
             }
            console.log(err.response)
           }
           
        }
    }
    
}
</script>

<style>

</style>