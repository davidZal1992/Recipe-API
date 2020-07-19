<template>
<span class="column-right-in">
    <div  v-if="lastWatchedRecipes.length!==0" class="wrap-last-watch">
        <span  v-for="recipe in this.lastWatchedRecipes" :key="recipe.id" class="recipes">
              <router-link :to="{ name: 'recipe', params: {type:recipe.type,id: recipe.id}}"><PreviewRecipe :recipe="recipe" /></router-link>
        </span>
    </div>
    <div>
        <span v-if="lastWatchedRecipes.length!==0">
            <h1  class="lastwatch">Hey {{$root.store.username}} ! Lets Remember your last Watched Recipes</h1>
        </span>
        <span v-else>
            <div class="nowatch">
            <NoResults :message="'You did not watch any recipes yet!'" :class="{ noWatchRecipes : true}"/>
            </div>
        </span>
        <div class="buttons">
             <div><router-link to="/myfavorite"><button class="options" >Your Favorite</button></router-link></div>
             <div><router-link to="/myfamily"><button class="options" style="margin-top:5%; margin-bottom:5%">Your Family Recipes</button></router-link></div>
             <div><router-link to="/myrecipes"><button class="options" >Your Recipes</button></router-link></div>
        </div>
    </div>
</span>
</template>

<script>
import PreviewRecipe from '../../../PreviewRecipe/PreviewRecipe'
import NoResults from '../../../../components/NoResults/NoResults'
export default {
    name:'RightColumnIn',
    data(){
    return{
        emptyError:false
        }
    },
    components:{
        PreviewRecipe,
        NoResults
    },
    props: {
        lastWatchedRecipes: {
            type: Array,
            required: true
    },
     
}
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
.column-right-in{
    display: inline-block;
    width: 50%;
    background: url('../../../../assets/2.jpg')  ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    height: 1032px;
}

.wrap-last-watch{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    float: right;
}

.lastwatch{
    -webkit-text-stroke: 2px black;
    -webkit-text-fill-color: white;
    margin-top:30%;
    font-size:55px;
    text-align: center;
    font-family: 'Rubik', sans-serif;
}

.options{
    width: 200px;
    height: 45px;
    border:1px solid white;
    color:white;
    background:rgb(59, 189, 59);
    border-radius: 5px;
    font-family: 'Fjalla One', sans-serif;
    outline: none;
}
.options:focus{
  outline: none;
}
.buttons{
    left:0;
    margin-top:2rem;
    margin:2rem;
}

.nowatch{
    margin-top:20%;
  
}
</style>