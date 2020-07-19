<template>
     <div class="detailsfamily">
        <ul class="itemslistdetails">
            <li><span style="margin-left:6px">Belongs to:</span>{{this.recipe.belongs}}</li>
            <li><span style="margin-left:6px">When: </span> {{this.recipe.wichtime}}</li>
            <li><span style="margin-left:6px">Generations:</span> {{this.recipe.generations}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'RecipeFamilyDetails',
    props:{
        recipe:{
        type:Object,
        required:true
    },
}
}
</script>

<style >
.detailsfamily{
    border:solid 0.5px white;
    -webkit-box-shadow: 0px 2px 19px 4px #FFFFFF; 
    box-shadow: 0px 2px 45px 4px #FFFFFF;
    height:96px;
    width:100%;
    color:white;
    margin-top:2.02rem;
}
.itemslistdetails{
     list-style-type: none;
}
.itemslistdetails >li{
    margin: 3px 5px 7px -30px;
}
</style>