<template>
  <span>
    <span v-if=this.$root.store.username>
      <LeftColumnIn :randomRecipes="randomRecipes" v-on:randomrecipes="getRandomRecipe" />
    </span>
    <span v-else>
    <LeftColumOut :randomRecipes="randomRecipes" v-on:randomrecipes="getRandomRecipe" />
    </span>
    <span v-if=!this.$root.store.username>
      <RightColumOut/>
    </span>
    <span v-else>
      <RightColumIn :lastWatchedRecipes="lastWatchedRecipes"/>
    </span>
  </span>
</template>

<script>
import LeftColumOut from '../components/LandingPage/UserOut/UserOutLeftColumn/UserOutLeftColumn'
import RightColumOut from '../components/LandingPage/UserOut/UserOutRightColumn/RightColumOut'
import RightColumIn from '../components/LandingPage/UserIn/UserInRightColumn/UserInRightColumn'
import LeftColumnIn from '../components/LandingPage/UserIn/UserInLeftColumn/UserInLeftColumn'

export default {
name: 'Landing',
components: {
    LeftColumOut,
    RightColumOut,
    RightColumIn,
    LeftColumnIn
  },
data(){
  return{
    randomRecipes:[],
    lastWatchedRecipes:[]
  }
},
mounted() {
  this.getRandomRecipe();
  console.log()
  if(this.$root.store.username)
  this.getLastWatchRecipe();
},
methods:{
  async getRandomRecipe(){
    try{
        const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes/random")
        const recipesFromServer = response.data
        this.randomRecipes=[]
        this.randomRecipes.push(...recipesFromServer)
    }
    catch(error){
      console.log(error)
    }
  },
  async getLastWatchRecipe(){
    try{
      console.log('abb')
      const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/profiles/lastwatch")
      const recipesFromServer = response.data
      this.lastWatchedRecipes=recipesFromServer
    
    }
    catch(err){
      if(err.response.status===401){
               this.$root.store.username=undefined
               this.$router.push('/')
    }
        console.log(err.response)
    }
  }
}}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Fjalla+One&family=Roboto+Slab&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Indie+Flower&family=Marck+Script&family=Merienda&family=Oleo+Script&display=swap');
</style>