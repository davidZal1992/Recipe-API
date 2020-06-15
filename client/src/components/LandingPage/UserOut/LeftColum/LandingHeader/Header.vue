<template>
     <div class="landing-inner">
            <div class="header">
            <h1 class="header">WELCOME TO <span style="color:green">HAMBUR</span>GESA</h1>
            <p class="header-desc">
            Create, share and search recipes and explore for new kitchens over the all world
          </p>
          </div>
          <div class="buttons">
            <router-link to="/search" id=searchbtn class="btn btn-primary">Search</router-link>
            <router-link to="/register" id=signin class="btn btn-secondary">Sign Up</router-link>
          </div>
    </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style>
#searchbtn{
  border:1px solid white;
  height: 40px;
  width:100px;
  background: transparent;
  color:white;
  margin-right: 35px;
}

#searchbtn:hover{
  color:green;
  background:white
}

#signin
{
  border:none;
  height: 40px;
  width:100px;
  background: rgb(59, 189, 59);
  outline: none;
}

.header-desc{
    color:black;
    font-size: 1.5rem;
   font-family: 'Roboto Slab', serif;
}

#signin:hover{
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
display: flex;
flex-direction: column;
width: 80%;
margin:auto
}
</style>