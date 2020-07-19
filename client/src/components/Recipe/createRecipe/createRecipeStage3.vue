<template>
    <div class="stage3">
        <itemsList ref='itemSlist'  bigTitle="Instrection" placeholder="Please enter the instrections"/>
        <b-button  @click="$emit('backStage')">Back</b-button>
        <b-button  @click="save">Save</b-button>
    </div>
</template>

<script>
import itemsList from '../createRecipe/items-list';
    export default {
        name:"stage3",
        components:{itemsList},
        data(){
            return{
             submittedInstruction: []
            }
        },
        methods:{
            save(){
                this.submittedInstruction=this.$refs.itemSlist.fetchData();
               this.$emit('fetch',this.submittedInstruction);
            
            }
        }
        
    }
</script>

<style >
</style>