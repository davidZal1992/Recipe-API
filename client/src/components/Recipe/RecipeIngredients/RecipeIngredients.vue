<template>
  <div class="ingredients">
    <ul class="ingredientslist">
        <li v-for="recipe in this.ingredients" :key="recipe.id">
                <div class="litems"><CheckBox/>  {{recipe.amount}}  {{recipe.unit}}  {{recipe.name}}</div>     
        </li>
    </ul>
    
</div>
</template>

<script>
import CheckBox from '../CheckBox/CheckBox'
export default {
    name:'RecipeIngredients',
    components:{
        CheckBox
    },
    props:{
        ingredients:{
            type:Array,
        },
    }    
}
</script>

<style>
.ingredientslist{
    list-style-type: none;
    color:white;
}
.ingredientslist >li{
    margin: 1rem 15px 20px 0px;
}
.litems{
    display:flex;
    text-align: left;
}
</style>