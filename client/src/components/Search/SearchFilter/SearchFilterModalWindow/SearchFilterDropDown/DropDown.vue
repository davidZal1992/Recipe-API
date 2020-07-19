<template>
  <div>
    <b-form-select v-model="selected" :options="options" v-on:change="$emit('change',selected)"></b-form-select>
  </div>
</template>

<script>
  export default {
      name:'DropDown',
    data() {
      return {
        selected:"",
       
      }
    },
    props:{
        oldselect:{
            type:String
        },
        options:{
            type:Array
        }
    },
    mounted: function(){
        if(this.oldselect!==null)
        this.selected=this.oldselect
    }
  }
</script>
