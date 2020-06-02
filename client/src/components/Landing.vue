<template>
<div>
  <div class="column-left">
      <div class=landing>
          <div class="landing-inner">
            <p class="text">
            Create, share and search recipes and explore for new kitchens over the all world
          </p>
          <div class="buttons">
            <a href="register.html" id=signin class="btn btn-primary">Search</a>
            <a href="register.html" id=searchbtn class="btn btn-secondary">Sign Up</a>
          </div>
          </div>
      </div>
      <div class="recipes">
             <div class="gallery">
              <div class="title">Add a description of the</div>
              <img src="https://spoonacular.com/recipeImages/660868-556x370.jpg" alt="Cinque Terre" width="800" height="600">
            <div class="desc">
              <div>
              <span><font-awesome-icon class="icons" icon="clock"/> 45 min</span>
              <span><font-awesome-icon class="icons" style="color:red" icon="heart"/> 675</span>
              <span><font-awesome-icon class="icons" icon="utensils"/>      4</span>
              </div>
              <div>
             <span><font-awesome-icon class="icons" icon="leaf"/> Yes</span>
            <span><img style="width:20px; margin-left:17px" src="https://www.iconsdb.com/icons/preview/white/bread-xxl.png"/> False</span>
              </div>
            </div>
          </div>

          <div class="gallery">
              <div class="title">Add a description of the</div>
              <img src="https://spoonacular.com/recipeImages/632632-556x370.jpg" alt="Forest" width="800" height="600">
            <div class="desc">
             <div>
              <span><font-awesome-icon class="icons" icon="clock"/> 7 min</span>
              <span><font-awesome-icon class="icons" style="color:red" icon="heart"/> 43</span>
              <span><font-awesome-icon class="icons" icon="utensils"/>      4</span>
              </div>
              <div>
             <span><font-awesome-icon class="icons" icon="leaf"/> Yes</span>
            <span><img style="width:20px; margin-left:17px" src="https://www.iconsdb.com/icons/preview/white/bread-xxl.png"/> False</span>
              </div>
            </div>
          </div>

          <div class="gallery">
              <div class="title">Add a description of the</div>
              <img src="https://spoonacular.com/recipeImages/631738-556x370.jpg" alt="Northern Lights" width="800" height="600">
              
            <div class="desc">
             <div>
              <span><font-awesome-icon class="icons" icon="clock"/> 45 min</span>
              <span><font-awesome-icon class="icons" style="color:red" icon="heart"/> 675</span>
              <span><font-awesome-icon class="icons" icon="utensils"/>      4</span>
              </div>
              <div>
             <span><font-awesome-icon class="icons" icon="leaf"/> Yes</span>
            <span><img style="width:20px; margin-left:17px" src="https://www.iconsdb.com/icons/preview/white/bread-xxl.png"/> False</span>
              </div>
            </div>
          </div>

      </div>
  </div>

    <div class="column-right">
    <div class="sign-in-form"> 
        <h1>Sign In Now</h1>
        <form>
        <input type="email" class="input-box" placeholder="Your User name">
        <input type="password" class="input-box" placeholder="Your Password">
        <button type="button" class="signin-btn">Sign in</button>
        <hr>
        <p>Do you have an account?<a href=""> Sign in</a></p>
        </form>
    </div>
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Indie+Flower&family=Marck+Script&family=Merienda&family=Oleo+Script&display=swap');


.column-right {
  float: right; 
  width: 33.333%;
  background-image: url('./1.jpg');
  height: 100vh;
  background-repeat: no-repeat;
  background-size:cover;
  border-left:2px inset rgba(172, 172, 172, 0.2);
  box-shadow: 5px 35px 25px 5px;
  filter: drop-shadow(30px 30px 55px hsla(0, 0%, 1%, 1));
}
.column-left{
display: inline-block; 
width: 66.66666%;
background-image: url('./3.jpeg') ;
background-repeat: no-repeat;
background-size:cover;
height: 100vh;
}

.landing {
position: relative;
}
.landing-inner {
color: #fff;
height: 100%;
display: flex;
flex-direction: column;
width: 80%;
margin: auto;
align-items: center;
justify-content: center;
text-align: center;
}
.x-large{
font-size: 4rem;
margin-top:3rem;
color:white;
text-align: center;
line-height: 1.2;
margin-bottom: 1rem;
font-family: 'Fjalla One', sans-serif;
}

.sign-in-form{
    width: 300px;
    margin:20vh auto ;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.6);
    background: rgba(160, 160, 160, 0.5);
    padding: 20px;

    text-align: center;
    border-radius: 30px;
}

.sign-in-form h1{
    color: white;
    margin-bottom: 20px;
}
/* Clear floats after the columns */

.input-box
{
    border-radius: 20px;
    padding: 7px;
    margin: 10px 0;
    width: 100%;
    border: 1px solid #999;
    outline: none;
}


.first{
  width:200px;
  height:200px;
  align-items: center;
}
button{
    color:#fff;
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    font-size:15px;
    margin:10px 0;
    border: none;
    outline: none;
    cursor: pointer
}

.signin-btn{
    background-color: rgb(59, 189, 59);
}

a{
    text-decoration: none;
}

hr{
    width:80%;
}

.text{
    margin-top:4rem;
    color:black;
    font-size: 1.5rem;
   font-family: 'Merienda', cursive;
}

p{
    color:white;
}

#signin
{
  border:none;
  height: 40px;
  width:100px;
  background: rgb(59, 189, 59);
}

#searchbtn{
  border:1px solid white;
  height: 40px;
  width:100px;
  background: transparent;
  color:white;
  margin-left: 30px;
}

div.gallery {
  align-items: center;
  margin: 20px;
  border: 1px solid #ccc;
  float: left;
  width: 250px;
}

div.gallery:hover {
  border: 1px solid #777;
  cursor: pointer;
}

div.gallery img {
  width: 100%;
  height: auto;
   border-radius: 5px;
}

div.desc {
  color:white;
  padding: 15px;
  background: rgba(0,0,0,0.3);
  display: block;
  justify-content: space-between;
}
div.title{
  text-align: center;
  color:white;
    padding: px;
  background: rgba(0,0,0,0.3);
}

.icons{
  color:white;
  margin-left:15px;
}

</style>

<script>

export default {
  name: 'Landing'
}
</script>