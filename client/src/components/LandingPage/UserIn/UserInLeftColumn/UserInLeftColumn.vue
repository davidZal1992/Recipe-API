<template>
<span class="column-left-in">
    <div class="wrap-last-left">
        <span v-for="recipe in this.randomRecipes" :key="recipe.id" class="recipes">
             <router-link :to="{ name: 'recipe', params: {type:recipe.type,id: recipe.id}}"><PreviewRecipe :recipe="recipe" /></router-link>
        </span>
    </div>
    <div>
        <h1  class="lastwatch" style="color:green">Explore This Recipes</h1>
        <button class="morerecipes" v-on:click="$emit('randomrecipes')">Show More</button>
    </div>
</span>

</template>

<script>
import PreviewRecipe from '../../../PreviewRecipe/PreviewRecipe'
export default {
    name:'LeftColumnIn',
    components:{
        PreviewRecipe
    },
    props: {
        randomRecipes: {
            type: Array,
            required: true
      }
}
}
</script>

<style>
.column-left-in{
    float:left;
    width: 50%;
    background: url('../../../../assets/3.jpeg')  ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
}
.wrap-last-left{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    float:right;
}


</style>