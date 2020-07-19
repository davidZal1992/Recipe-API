<template>
    <div>

    </div>
</template>

<script>
    export default {
        name:"recipePreparation",
        props:{
          id:Number
        },
        methods:{
            async getAnalyzedRecipeInstructions(){
                const respon = await this.axios.get(`https://api.spoonacular.com/recipes/${this.id}/analyzedInstructions`,{
                    props:{
                        apiKey:'d151691bb83e496d8faad3c6db0af653'
                    }
                });
                console.log(respon);
            }
        } 
    }
</script>

<style >

</style>