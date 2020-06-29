<template>
  <div>
    <div class="left">
        <div class="myrecipetitle"><h1>Your Family Recipes</h1></div>
        <img class="img" src="../assets/familyjpg.jpg" alt="Avatar">
        <div class="wrap">
            <div >
                <button class="profbtn">My Favorite Recipe<router-link to="/myfavorite"></router-link></button>
            </div>
            <div>
                <button class="profbtn">My Private  Recipe<router-link to="/myrecipes"></router-link></button>
            </div>
        </div>
    </div>
    <div class="right">
        <div class="results" v-if="this.familyRecipes.length!==0">
            <span v-for="recipe in this.familyRecipes" :key="recipe.id" class="recipes">
                <Result :recipe="recipe" :class="{userecipesummery:true}" />
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
export default {
    name: 'MyPrivate',
    data() {
        return {
            familyRecipes:[]
        }
    },
    components:{
        Result,
        NoResults
    },
    mounted() {
        this.getProfileRecipe();
    },
    methods: {
        async getProfileRecipe(){
           try{
                this.myRecipes=[]
                const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes/familyrecipes",{withCredentials: true})
                this.familyRecipes=response.data.recipes;
           }
           catch(err)
           {
                if(err.response.status==='401'){
                    this.$root.store.username=undefined
                    this.$router.push('/search')
             }
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
        width: 180px;
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

    .norecipes{
        width:80%;
        margin:auto;
        background: rgba(0,0,0,0.6);
        margin-top:15%;
    }
</style>