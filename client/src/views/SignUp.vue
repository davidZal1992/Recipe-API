<template>
<div>
  <SignUpComp ></SignUpComp>
  </div>
  
</template>

<script>
import SignUpComp from '../components/SignUp/SingUp'
export default {
    name: 'SignUp',
    components:{
        SignUpComp
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