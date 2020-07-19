<template>
  <div>
    <Recipe  :favorites="isInFavorites" :type="type" :recipe="recipe"/>
  </div>
</template>

<script>
import Recipe from '../components/Recipe/Recipe'
export default {
    name:'RecipePage',
    components:{Recipe},
    data() {
        return {
        recipe:{},
        type:"",
        isInFavorites:false
        }
    },
 
    methods:{
        async getRecipeInformation(){
          let path;
         try{
            this.type=this.$route.params.type
            const id=this.$route.params.id
            let url=""
            if(this.type==="spooncalur")
                url="https://david-matan-recipe-api-server.herokuapp.com/api/recipes/"
            else if(this.type==="user")
                    url="https://david-matan-recipe-api-server.herokuapp.com/api/recipes/userecipe/"
                    else
                         url="https://david-matan-recipe-api-server.herokuapp.com/api/recipes/familyrecipes/"
            path = 'recipe/'+this.type+'/'+id;             
            const result = await this.axios.get(url+id)
            this.recipe=result.data
            this.lastWatchUpdate()
         }
          catch(err)
          {
            console.log(err)
            if(err.response.status===401){
              this.$root.store.username=undefined
              this.$router.push({ name: 'login', query: { redirect: path } })
             }
            if(err.response.status===404){
              this.$router.push({ name: 'NoFound', query: { redirect: path } })
             }

          }
        },

        lastWatchUpdate(){
          let historyWatch=localStorage.getItem("watch")
          let isWatched=false;
          if(historyWatch !=null && historyWatch.length!==null){
              historyWatch=JSON.parse(historyWatch)
              isWatched=historyWatch.some(recipe => {return this.$route.params.id.toString()===recipe.id.toString()})
          }
          else{
              historyWatch=[];
          }
          historyWatch.push({id:this.$route.params.id, type:this.$route.params.type})
          if(!isWatched)
          localStorage.setItem("watch",JSON.stringify(historyWatch))
      },
        ifFavoriteExists() {
          let favoritesArray=localStorage.getItem("favorites")
          favoritesArray=JSON.parse(favoritesArray)
          if(favoritesArray!=null&&favoritesArray.length!==0){
          this.isInFavorites=favoritesArray.some(favorRecipe => this.$route.params.id.toString()===favorRecipe.id.toString() )
          }
      },
    },
      created(){
      this.getRecipeInformation()
      this.ifFavoriteExists()
    },
}
</script>

<style>

</style>