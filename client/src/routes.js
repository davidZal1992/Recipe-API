

import Search from "../src/views/Search.vue"
import Landing from "../src/views/Landing.vue"
import MyRecipes from  "../src/views/MyRecipes.vue"
import MyFamilyRecipe from  "../src/views/MyFamilyRecipe.vue"
import MyFavoriteRecipe from '../src/views/MyFavoriteRecipe.vue'
import Recipe from "../src/views/Recipe.vue"
const routes = [
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/",
    name: "landing",
    component: Landing
  },
  {
    path: "/myrecipes",
    name: "myrecipes",
    component: MyRecipes
  },
  {
    path: "/myfamily",
    name: "myfamily",
    component: MyFamilyRecipe
  },
  {
    path: "/myfavorite",
    name: "myfavorite",
    component: MyFavoriteRecipe
  },
  {
    path: "/recipe/:type/:id",
    name: "recipe",
    component: Recipe
  }
  
];

export default routes;
