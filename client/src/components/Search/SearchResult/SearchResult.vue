<template>
  <div class="result">
      <div class="preview"><PreviewRecipe  :class="{bb: true}" :recipe="recipe"/></div>
      <div class="divider">|</div>
      <div class="summary" v-html="recipe.summary"></div>
  </div>
</template>

<script>
import PreviewRecipe from '../../PreviewRecipe/PreviewRecipe'
export default {
    name: 'Result',
    components: {
    PreviewRecipe
    },
     data() { return {
    inParent: true
  }
     },
    props: {
      recipe: {
          type: Object,
          required: true
      }
  }
}
</script>

<style >
.result{
    height:350px;
    width:70%;
    border-radius: 15px;
    background: rgba(0,0,0,0.6);
    display:flex;
}

.result:hover{
  -moz-box-shadow: 0 0 10px white;
  -webkit-box-shadow: 0 0 10px white;
  box-shadow: 0 0 10px white;
  cursor: pointer;
}

.userecipesummery{
    height:100%;
    width:80%;
    border-radius: 15px;
    background: rgba(0,0,0,0.6);
    display:flex;
}

.userecipesummery > .summary{
    color:white;
    margin-right:15px;
    text-decoration: white;
    overflow: hidden;
    text-align: left;
}

.summary{
    color:white;
    margin-right:15px;
    text-decoration: white;
    overflow: hidden;
    text-align: left;
}


a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }

.divider {
  border-left:3px solid white;
  width: 1px;
  height: 250px;
  margin-right: 1.5rem;
  box-shadow: 10px 0px 20px  rgb(255, 255, 255);
  filter: drop-shadow(1.5px 1.5px 1.5px rgb(255, 255, 255));
}
</style>