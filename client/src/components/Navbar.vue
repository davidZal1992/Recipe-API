<template>
<nav id="mynav" class="navbar navbar-expand-md navbar-light bg-light">
    <a class="navbar-brand" href="#"><span> <font-awesome-icon icon="utensils"/> </span>HambUrgesa</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul class="navbar-nav ">
             <li class="nav-item">
                <a class="nav-link" href=""><span><font-awesome-icon icon="search"/></span>Search</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href=""><span><font-awesome-icon icon="sign-in-alt"/></span>Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href=""><span><font-awesome-icon icon="user-plus"/></span>Register</a>
            </li>
        </ul>
    </div>
</nav>
</template>

<style scoped>
/* navigation bar */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

#mynav{
font-family: 'Noto Sans KR', sans-serif;   
border-bottom: 1px solid green;
box-shadow: 5px 0px 5px  rgb(0, 0, 0);
 position:fixed;       
  left:0;       
  top:0;           
  width:100vw;   
  z-index:200;  
}

span{
    margin-right: 10px;
}

.nav-item{
    border-left: 1px solid rgb(0, 0, 0);
    filter: drop-shadow(0px 0px 1.5px hsla(0, 0%, 0%, 1));
}
.navbar-brand{

    filter: drop-shadow(0px 0px 1px hsla(0, 0%, 0%, 1));
}
</style>

<script>

export default {
  name: 'Navbar'
}
</script>