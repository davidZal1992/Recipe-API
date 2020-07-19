<template>
  <div id="app">
    <Navbar/>
    <router-view class="view" >
    </router-view>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px ;
}
body{
  background: url("./assets/searchback.jpg") no-repeat center center fixed;
 -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height:100%;
}

</style>
