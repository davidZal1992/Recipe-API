<template>
     <div class="landing-inner">
            <div>
            <h1 class="header">WELCOME TO <span style="color:green">HAMBUR</span>GESA</h1>
            <p class="header-desc">
            Create, share and search recipes and explore for new kitchens over the all world
          </p>
          </div>
          <div class="buttons">
            <button class="searchbtn">Search<router-link to="/search" ></router-link></button>
            <button class="signin">Sign Up<router-link to="/register"></router-link></button>
          </div>
    </div>
</template>w

<script>
export default {
    name:'Header'
}
</script>

<style>
.searchbtn{
  border:1px solid white;
  height: 35px;
  width:100px;
  background: transparent;
  color:white;
  margin-right: 35px;
   font-family: 'Fjalla One', sans-serif;
}

.searchbtn:hover{
  color:green;
  background:white
}

.buttons{
  display: flex;
  margin:auto;
  align-items: center;
  text-align: center;
  position: relative;
  font-size:20px;
  left:35%
}
.signin
{
  border:1px solid white;
  border-radius: 5px;
  height: 35px;
  color:white;
  width:100px;
  background: rgb(59, 189, 59);
  outline: none;
  cursor: pointer;
   font-family: 'Fjalla One', sans-serif;
}

.header-desc{
    color:black;
    font-size: 1.5rem;
   font-family: 'Roboto Slab', serif;
}

.signin:hover{
  color:green;
  background:white
}

.header{
  margin-top:5%;
  font-family: 'Fjalla One', sans-serif;
}

.landing-inner {
color: #fff;
height: 100%;
width: 80%;
margin:auto
}
</style>