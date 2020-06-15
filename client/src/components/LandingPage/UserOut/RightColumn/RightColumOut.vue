<template>
  <span>
      <div class="column-right">
      <SignIn/>
    </div>
  </span>
</template>

<script>
import SignIn from '../RightColumn/Signin/LandingSignin'
export default {
    name:'RightColumOut',
    components:{
        SignIn
    }
}
</script>

<style>
.column-right {
  float: right; 
  width: 33.333%;
  background-image: url('../../../../assets/1.jpg');
  height: 95vh;
  background-repeat: no-repeat;
  background-size:cover;
  border-left:2px inset rgba(172, 172, 172, 0.2);
  box-shadow: 5px 35px 25px 5px;
  filter: drop-shadow(30px 30px 55px hsla(0, 0%, 1%, 1));
}

</style>