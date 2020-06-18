<template>
  <span>
  <SearchBar v-on:search="search"  v-on:clear="clear" />
  <div class="results" >
      <span v-for="recipe in this.recipesRes" :key="recipe.id" class="recipes">
              <Result :recipe="recipe" />
      </span>
  </div>
  </span>
</template>

<script>
import SearchBar from '../components/Search/SearchBar/SearchBar'
import Result from '../components/Search/Result/Result'

export default {
  name:'Search',
  components: {
    SearchBar,
    Result,
    },
  data(){
    return{
      recipesRes:[]
    }
  },
  methods:{
    async search(query,number,cuisine,diet,intolerances,sort)
    {
      try{
      this.recipesRes=[]
      const result= await this.axios.get(`https://david-matan-recipe-api-server.herokuapp.com/api/recipes/search`, {
      params: {
        query: query,
        number: number,
        cuisine:cuisine,
        diet: diet,
        intolerances:intolerances,
      }
    });
       this.recipesRes=result.data;
      if(sort==='on1')
      this.sortByPopularity()
      if(sort==='on2')
      this.sortByTime()
      console.log(this.recipesRes)
      }
      catch(err)
      {
        console.log(err)
      }
    },
    clear(){
      this.recipesRes=[]
    },
    sortByPopularity(){
      this.recipesRes.sort(function(a,b){
        return parseFloat(a.likes) - parseFloat(b.likes)
      })
    },
    sortByTime(){
      this.recipesRes.sort(function(a,b){
        return parseFloat(a.time) - parseFloat(b.time)
      })
    }
  }
}
</script>

<style>
body{
  background: url("../assets/searchback.jpg") no-repeat center center fixed;
   -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.result{
  margin:auto;
  margin-top:1rem;
  margin-bottom:1rem;
  align-items: center;
}

</style>