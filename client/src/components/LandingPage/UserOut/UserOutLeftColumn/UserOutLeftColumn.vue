<template>
   <div class="column-left">
       <div class=landing>
          <Header/>
          <div class="container">
            <div class="recipes">
              <span v-for="recipe in this.randomRecipes" :key="recipe.id" class="recipes">
                <PreviewRecipe id="abc" :recipe="recipe" />
              </span>
            </div>
        </div>
          <button class=morerecipes  v-on:click="$emit('randomrecipes')">Show more</button>
      </div>
   </div>
</template>

<script>
import PreviewRecipe from '../../../../components/PreviewRecipe/PreviewRecipe'
import Header from '../../UserOut/UserOutLeftColumn/UserOutLeftColumnHeading/UserOutLeftColumnHeading'


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
width: 75%;
background: url('../../../../assets/3.jpeg')  ;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
height: 100vh;
}

.landing {
display: inline-block;
position: relative;
}

.container{
    text-align: center;

}

.recipes{
  width: 100%;
  max-width: 1100px;
}
.morerecipes{
  width: 100px;
  height: 45px;
  border:1px solid white;
  color:white;
  background:rgb(59, 189, 59);
  border-radius: 5px;
  font-family: 'Fjalla One', sans-serif;
  outline: none;
}

.morerecipes:hover{
  background:white;
  color:rgb(59, 189, 59);
}

.morerecipes:focus{
  outline: none;;
}


</style>