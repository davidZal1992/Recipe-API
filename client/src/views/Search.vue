<template>
  <span>
    <SearchBar v-on:search="search"  v-on:clear="clear" />
    <div class="results" >
      <span v-if="!empty">
        <span v-for="recipe in this.recipesRes" :key="recipe.id" class="recipes">
              <router-link :to="{ name: 'recipe', params: {type:recipe.type,id: recipe.id}}"><Result :recipe="recipe" /></router-link> 
        </span>
      </span>
      <span v-else>
        <NoResults :class="{noWatchRecipes: true}" :message="'There is no match for your request'"/>
      </span>
    </div>
  </span>
</template>

<script>
import SearchBar from '../components/Search/SearchBar/SearchBar'
import Result from '../components/Search/SearchResult/SearchResult'
import NoResults from '../components/NoResults/NoResults'

export default {
  name:'Search',
  components: {
    SearchBar,
    Result,
    NoResults
    },
  data(){
    return{
      recipesRes:[],
      empty:false
    }
  },
  created(){
  if(this.$root.store.username){
    const lastResults = localStorage.getItem(this.$root.store.username)
    if(lastResults)
    this.recipesRes=JSON.parse(lastResults)
    else
    this.recipesRes=[]
  }
  },
  methods:{
    async search(query,number,cuisine,diet,intolerances,sort)
    {
      try{
      this.empty=false;
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
        if(sort==='likes')
          this.sortByPopularity()
        if(sort==='time')
          this.sortByTime()
        localStorage.setItem(this.$root.store.username,JSON.stringify(this.recipesRes))  
      }
      catch(err){
        if(err.response.data.message==="No results found"){
          this.empty=true
          localStorage.setItem(this.$root.store.username,[])
        }
      }

    },
    clear(){
     this.recipesRes=[]
     localStorage.setItem(this.$root.store.username,[])
     
    },
    sortByPopularity(){
      this.recipesRes.sort(function(a,b){
        console.log(a)
        return parseFloat(a.aggregateLikes) - parseFloat(b.aggregateLikes)
      })
    },
    sortByTime(){
      this.recipesRes.sort(function(a,b){
        return parseFloat(a.readyInMinutes) - parseFloat(b.readyInMinutes)
      })
    }
  }
}
</script>

<style>


.result{
  margin:auto;
  margin-top:1rem;
  margin-bottom:1rem;
  align-items: center;
}

</style>