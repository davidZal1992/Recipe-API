<template>
  <div class="gallery">
      <div class="title">{{this.recipe.name}}</div>
      <img v-bind:src="recipe.image" alt="Cinque Terre" width="200" height="400">
    <div class="desc">
      <span><font-awesome-icon class="icons" icon="clock"/> {{this.recipe.time}}</span>
      <span><font-awesome-icon class="icons" style="color:red" icon="heart"/> {{this.recipe.likes}}</span>
    <span><font-awesome-icon class="icons" icon="leaf"/> Yes</span>
    <div>
    <span><img style="width:20px; margin-left:17px" src="../../assets/bread.png"/>
    <span v-if="recipe.isGluten"> Yes</span>
    <span v-else> No</span>
    </span>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'PreviewRecipe',
  props: {
    recipe: {
        type: Object,
        required: true
      }
}
}

</script>

<style>
.gallery {
  align-items: center;
  margin: 20px;
  border: 1px solid #ccc;
  float: left;
  width: 250px;
}

.bb{
  align-items: center;
  margin: 20px;
  border:none;
  float: left;
  width: 200px;
}

.bb > .desc{
  background: transparent;
  border:none;
}

.bb > .title{
  background: transparent;
  border:none;
  height: 100px;
}


div.gallery:hover {
  border: 1px solid green;
  cursor: pointer;
}

div.gallery img {
  width: 100%;
  height: auto;
   border-radius: 5px;
}

div.desc {
  color:white;
  padding: 10px;
  background: rgba(0,0,0,0.3);
  display: block;
}
div.title{
  height:55px;
  text-align: center;
  color:white;
  background: rgba(0,0,0,0.3);
}

.icons{
  color:white;
  margin-left:15px;
}

p{
    color:white;
}

.text{
    margin-top:4rem;
    color:black;
    font-size: 1.5rem;
   font-family: 'Merienda', cursive;
}
</style>