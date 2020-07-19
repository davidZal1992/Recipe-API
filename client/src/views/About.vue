<template>
  <div class="about-wrapper">
    <h1>Our Team</h1>
    <div class="team">
      <div class="team_member">
        <div class="team_img">
          <img src="..\assets\team1.png" alt="team_member_image" />
        </div>
        <h3>David Zaltsman</h3>
        <p class="role">full stack developer</p>
        <p>
          A Third year student in Software and Information System Engineering (B.Sc). Throughout the degree, I've experienced with many programming languages , technologies, and a lot of tools that enriched my knowledge.
          I am hardworking, love challenges, and very motivated to learn and develop.
          I’m looking for a company that will allow me to develop myself and expand my skills
        </p>
        <div class="logo_img">
          <img src="..\assets\logo_vue.png" alt="vue" />
          <img src="..\assets\logo_nodejs.png" alt="nodejs" />
          <img src="..\assets\logo_html5.png" alt="html5" />
          <img src="..\assets\logo_css.png" alt="css" />
          <img src="..\assets\logo_js.png" alt="js" />
        </div>
      </div>
      <div class="team_member">
        <div class="team_img">
          <img src="..\assets\team2.png" alt="team_member_image" />
        </div>
        <h3>Matan Gadasi</h3>
        <p class="role">full stack developer</p>
        <p>
          My name is Matan And I am A Third year student
          in Information System Engineering in Ben Gurion University.
          Ever since i remember myself i'm interested in computer and Tech.
          In my studies i have experienced in web developing and programming languages like python and java,
          Data analysis and Machine Learning.
        </p>
        <div class="logo_img">
          <img src="..\assets\logo_vue.png" alt="vue" />
          <img src="..\assets\logo_nodejs.png" alt="nodejs" />
          <img src="..\assets\logo_html5.png" alt="html5" />
          <img src="..\assets\logo_css.png" alt="css" />
          <img src="..\assets\logo_js.png" alt="js" />
        </div>
      </div>
    </div>
    <div class="moreprojcts">
        <div class="about-project">
        <ProjectPreview img="pacman.png" title="Pacman Project" url="https://sise-web-development-environments.github.io/assignment2-david-matan/"/>
        <ProjectPreview img="david_ass1.png" title="David`s Third age project" url="https://sise-web-development-environments.github.io/203382551/"/>
        <ProjectPreview img="matan_ass1.png" title="Matan`s Blog" url="https://sise-web-development-environments.github.io/assignment1-matan230g/"/>
      </div>
      </div>
  </div>
</template>

<script>
import ProjectPreview from '../components/ProjectPreview/ProjectPreview'
    export default {
        name:'About',
        components:{ProjectPreview}
    }
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Allura");
@import url("https://fonts.googleapis.com/css2?family=Modak&display=swap");
.wrapper {
  display: inline-block;
  align-items: center;
  margin: 0;
  padding: 5%;
  text-align: center;
}
.about-wrapper p {
  color: black;
}
.about-wrapper h1 {
  font-size: 110px;
  font-family: "Allura", cursive;
  color: black;
  margin-bottom: 68px;
  text-align: center;
}
.team {
  display: flex;
  justify-content: center;
  width: auto;
  text-align: center;
  flex-wrap: wrap;
}
.team .team_member {
  background: #fff;
  margin: 5px;
  width: 400px;
  height:400px;
  padding: 30px;
  line-height: 20px;
  color: #8e8b8b;
  position: relative;
  border-radius: 50px;
}
.team .team_member h3 {
  color: #81c644;
  font-size: 26px;
  margin-top: 50px;
}
.team .team_member p.role {
  font-family: "Modak", cursive;
  color: rgb(255, 7, 7);
  font-size: 12px, bold;
  text-transform: uppercase;
  margin: 12px 0;
}
.team .team_member .team_img {
    width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
}
.team .team_member .team_img img {
  width: 100px;
  height: 100px;
  padding: 5px;
}
.team .team_member .logo_img {
  display: flex;
  position: absolute;
  bottom: 10px;
  left:20%;
  align-items: center;
  width: 50px;
  height: 40px;
}
.team .team_member .logo_img img {
  width: 50px;
  height: 50px;
}
.about-wrapper .about-project .polaroid div.container {
  text-align: center;
  padding: 10px 20px;
  
}

.about-wrapper .about-project div.polaroid {
  cursor: pointer;
  width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
}



.moreprojcts{
 position:relative;
 left:50px;
 border-radius: 30px;
 height: 250px;
 width: 90%;
}
.about-wrapper .about-project {
  margin-left: 30px;
  margin-top:30px;
  display: flex;
  justify-content: space-evenly;
  
}
</style>