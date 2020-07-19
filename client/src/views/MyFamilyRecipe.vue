<template>
  <div class="MyFamilyRecipeView">
    <div class="left">
        <div class="myrecipetitle"><h1>Your Family Recipes</h1></div>
        <img class="img" src="../assets/familyjpg.jpg" alt="Avatar">
        <div class="wrap">
                <div >
           <router-link to="/myfavorite"><GreenButton type="My Favorite Recipe"/></router-link>
    </div>
    <div>
            <router-link to="/myrecipes"><GreenButton type="My Private Recipe"/></router-link>
    </div>
        </div>
    </div>
    <div class="right">
        <div class="results" v-if="this.familyRecipes.length!==0">
            <span v-for="recipe in this.familyRecipes" :key="recipe.id" class="recipes">
                 <router-link :to="{ name: 'recipe', params: {type:recipe.type,id: recipe.id}}"><Result :recipe="recipe" :class="{userecipesummery:true}" /></router-link>
            </span>
        </div>
        <div  v-else>
            <NoResults :message="'No Recipes found. Create your first family Recipe'" :class="{norecipesexists:true, addBton:true}"/> 
            <button style="margin-top:2%" class="profbtn">Share your family secrets</button>
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
            familyRecipes:[]
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
                const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes/familyrecipes",{withCredentials: true})
                this.familyRecipes=response.data.preview;
           }
           catch(err)
           {
                if(err.response.status===404){
                    this.familyRecipes=[]
                    
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

<style>
</style>