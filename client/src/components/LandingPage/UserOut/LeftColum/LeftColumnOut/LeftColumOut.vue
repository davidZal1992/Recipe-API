<template>
   <div class="column-left">
       <div class=landing>
          <Header/>
          <div class="container">
            <div class="recipes">
            <span v-for="recipe in this.randomRecipes" :key="recipe.id" class="recipes">
                <PreviewRecipe :recipe="recipe" />
            </span>
            </div>
        </div>
          <button class=morerecipes  v-on:click="$emit('randomrecipes')">Show more</button>
      </div>
   </div>
</template>

<script>
import PreviewRecipe from '../../../../PreviewRecipe/PreviewRecipe'
import Header from '../../LeftColum/LandingHeader/Header'


export default {
    name: 'LeftColumOut',
components: {
    PreviewRecipe,
    Header
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
.column-left{
display: inline-block; 
width: 66.66666%;
background-image: url('../../../../../assets/3.jpeg') ;
background-repeat: no-repeat;
background-size:cover;
height: 95vh;
}

.landing {
display: inline-block;
position: relative;
}

.container{
    text-align: center;

}

.morerecipes{
  width: 100px;
  height: 45px;
  border:1px solid white;
  color:white;
  background:rgb(59, 189, 59);
  border-radius: 5px;
   font-family: 'Fjalla One', sans-serif;
}

.morerecipes:hover{
  background:white;
  color:rgb(59, 189, 59);
}




</style>