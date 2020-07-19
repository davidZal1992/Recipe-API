<template>
  <div class="ingredients">
    <ul class="ingredientslist">
        <li v-for="recipe in this.instructions" :key="recipe.id">
                <div class="litems"><CheckBox/>Step:{{recipe.step}}  {{recipe.instruction}}</div>     
        </li>
    </ul>
    
</div>
</template>

<script>
import CheckBox from '../CheckBox/CheckBox'
export default {
    name:'RecipeInstructions',
    components:{
        CheckBox
    },
    props:{
        instructions:{
            type:Array,
        }    
    }
}
</script>

<style>

</style>