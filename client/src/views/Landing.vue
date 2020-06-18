<template>
  <span>
    <LeftColumOut :randomRecipes="randomRecipes" v-on:randomrecipes="getRandomRecipe" />
    <RightColumOut/>
  </span>
</template>

<script>
import LeftColumOut from '../components/LandingPage/UserOut/LeftColum/LeftColumnOut/LeftColumOut'
import RightColumOut from '../components/LandingPage/UserOut/RightColumn/RightColumOut'

export default {
name: 'Landing',
components: {
    LeftColumOut,
    RightColumOut
  },
data(){
  return{
    randomRecipes:[]
  }
},
mounted() {
  this.getRandomRecipe();
},
methods:{
  async getRandomRecipe(){
    try{
        const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes/random")
        const recipesFromServer = response.data
        this.randomRecipes=[]
        this.randomRecipes.push(...recipesFromServer)
    }
    catch(error)
    {
        console.log(error)
    }
}
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Fjalla+One&family=Roboto+Slab&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Indie+Flower&family=Marck+Script&family=Merienda&family=Oleo+Script&display=swap');
</style>