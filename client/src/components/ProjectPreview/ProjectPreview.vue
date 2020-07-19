<template>
 <div @click="linkToProject" class="polaroid">
        <img class="project-image" :src="require('../../assets/'+img)" style="width:100%;" />
        <div class="overlay">
            <div class="text">{{title}}</div>
        </div>
      </div>
</template>

<script>
    export default {
        name:'projectPreview',
        props:{
            img:String,
            title:String,
            url:String
        },
        
        methods:{
            linkToProject(){
                window.open(this.url,'mywindow');
            }
        }       
    }
</script>

<style>
.polaroid {
  position: relative;
  width: 50%;
}



.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgb(7, 148, 14);
}

.polaroid:hover .overlay {
  opacity: 1;
}
.project-image{
    border:1px solid white;
    width:200px;
}
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>