<template>
     <div class="details">
        <ul class="itemslist">
            <li><font-awesome-icon class="icons" icon="clock"/><span style="margin-left:6px">Cook:</span>{{this.recipe.readyInMinutes}} mins</li>
            <li><font-awesome-icon class="icons" icon="leaf"/><span style="margin-left:6px"> Vegetarin: </span> {{this.recipe.vegetarian}}</li>
            <li><div style="display:flex"><img style="width:20px; margin-left:12px" src="../../../assets/bread.png" alt="bread"/><span style="margin-left:6px"> Gluten:</span> {{this.recipe.glutenFree}}</div></li>
            <li><font-awesome-icon class="icons" icon="utensils"/> <span style="margin-left:6px"> Servings:</span> {{this.recipe.servings}}</li>
            <li><font-awesome-icon class="icons" icon="heart"/> <span style="margin-left:6px"> Likes:</span> {{this.recipe.aggregateLikes}} </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'RecipeDetails',
    props:{
        recipe:{
        type:Object,
        required:true
    },
}
}
</script>

<style >
.details{
    border:solid 0.5px white;
    -webkit-box-shadow: 0px 2px 19px 4px #FFFFFF; 
    box-shadow: 0px 2px 45px 4px #FFFFFF;
    height:250px;
    width:250px;
    color:white;
    margin-top:2.02rem;
}
.itemslist{
     list-style-type: none;
}
.itemslist >li{
    margin: 1rem 15px 20px -30px;
}
</style>