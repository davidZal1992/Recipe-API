<template>
  <div>
      <p class="error">{{message}}</p>
  </div>
</template>

<script>
export default {
    name:'NoResults',
    props:{
    message:String
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

.noWatchRecipes{
    height:250px;
    width:38%;
    border-radius: 15px;
    background: rgba(0,0,0,0.6);
    margin:auto;
    margin-top:15px;
}

.norecipesexists{
    height:250px;
    width:60%;
    border-radius: 15px;
    background: rgba(0,0,0,0.6);
    margin:auto;
    margin-top:12%;
}

.error{
    opacity: 0.7;
    font-family: 'Fjalla One', sans-serif;
    font-size:45px;
    margin:auto;
    position: relative;
    top:50%;
    left:50%;
    Transform: translate(-50%, -50%)
}
</style>