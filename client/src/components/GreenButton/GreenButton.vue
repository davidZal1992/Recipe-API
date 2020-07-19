<template>
      <button  class="profbtn" :disabled="favorites" v-on:click="$emit('addtofavor')">{{type}}<router-link to="/register"></router-link></button>   
</template>

<script>
export default {
    name:'GreenButton',
    props:{
        type:{
            type:String,
            required:true
        },
        favorites:{
            type:Boolean,
        }
    }
}
</script>

<style >
.profbtn{
    margin-bottom: 1rem;
    width: 150px;
    height: 45px;
    border:1px solid white;
    color:white;
    background:rgb(59, 189, 59);
    border-radius: 5px;
    font-family: 'Fjalla One', sans-serif;
    outline: none;
    }
.profbtn:focus{
    outline: none;
}
</style>