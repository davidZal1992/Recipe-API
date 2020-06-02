<template>
<section>    
<Navbar/>
<Landing/> 
</section>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Landing from './components/Landing.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Landing
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
