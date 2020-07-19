<template>
  <div style="float:left; margin-top:2rem; display:inline;">{{sort}}
            <button class="firstbtn"  :style="{background: backgroundFirst, color:colorFirst}" @click="changeFirstButton" >{{item1}}</button>
            <button class="secondbtn"  :style="{background: backgroundSecond, color:colorSecond}" @click="changeSecondButton">{{item2}}</button>
 </div>
</template>

<script>
export default {
    name: 'Toggle',
    data() {
      return {
        backgroundFirst: 'white',
        backgroundSecond: 'white',
        colorFirst:'black',
        colorSecond:'black'
    }
    },
    props:{
        sort:String,
        item1:String,
        item2:String,
        oldButtonFirst:{
        type:String
      },
        oldButtonSecond:{
        type:Number
      }
    },
  methods: {
    changeSecondButton() {
        if(this.backgroundSecond!=='white'){
            this.backgroundSecond='white'
            this.colorSecond='black'
           this.$emit('click','off2')
        }
       else{
            this.backgroundSecond='rgb(59, 189, 59)'
            this.colorSecond='white'
            this.$emit('click','on2')
        if(this.backgroundFirst==='rgb(59, 189, 59)'){
            this.backgroundFirst='white'
            this.colorFirst='black'
        }
       }
    },
    changeFirstButton() {
        if(this.backgroundFirst!=='white'){
            this.backgroundFirst='white'
            this.colorFirst='black'
            this.$emit('click','off1')
        }
       else{
            this.backgroundFirst='rgb(59, 189, 59)'
                this.colorFirst='white'
                this.colorSecond='black'
                this.$emit('click','on1')
       }
        if(this.backgroundSecond==='rgb(59, 189, 59)'){
            this.backgroundSecond='white'
             this.colorSecond='black'
        }
    
    }
  },
  mounted: function()
  {
      if(this.oldButtonFirst==='likes' || this.oldButtonSecond===10)
      {
        this.backgroundFirst='rgb(59, 189, 59)'
        this.colorFirst='white'
      }
      if(this.oldButtonFirst==='time' || this.oldButtonSecond===15){
         this.backgroundSecond='rgb(59, 189, 59)'
         this.colorSecond='white'
      }
  }
}

</script>

<style >
    .firstbtn{
        margin-left:0.5rem;
        background:white;
        border:1px solid green;
        border-radius: 6px;
        width: 50px;
        outline: none;
    }
    .secondbtn{
        margin-left:1rem;
        background:white;
        border:1px solid green;
        width: 60px;
        border-radius: 7px;
        outline: none;
    }

    .firstbtn:focus {
        outline:none;
}
   .secondbtn:focus {
        outline:none;

}
</style>