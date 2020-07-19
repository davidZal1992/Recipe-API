<template>
<div >
  <SignIn/>
  </div>
  
</template>

<script>
import SignIn from '../components/Login/Login'

export default {
    name: 'Login',
    components:{
        SignIn
    },
    mounted: function () {
    this.$nextTick(function () {
      if(this.$root.store.username){
        this.$router.push(this.$route.query.redirect || '/')
      }
    })
}

}
</script>

<style>


</style>