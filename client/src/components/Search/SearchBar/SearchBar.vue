<template>
<span class="serachpage">
    <div>
        <div class="fatherwrapper">
            <div class="wrapper_searchBar">
                <input type="text" v-model="query" class="input" placeholder="Which recipe are you looknig for?">
                <div class="search" v-on:click="$emit('search',query,number,cuisine,diet,intolerances,sort)">
                    <font-awesome-icon class="searchicon" icon="search"/>
                </div>
            </div>
            <FilterModal @update-res="filters" />
            <div class="clear" v-on:click="clean">clear</div>
        </div>
    </div>
  </span>
</template>

<script>
import FilterModal from '../SearchFilter/SearchFilterModalWindow/SearchFilterModalWindow'
export default {
    name:'SearchBar',
    components:{
        FilterModal
    },
    data(){
        return{
        filterResult:{},
        query:"",
        cuisine:"",
        diet:"",
        intolerances:"",
        number:5,
        sort:""
        }
    },
    methods:{
        clean()
        {
            this.query=""
            this.query=""
            this.number=5;
            this.cuisine="",
            this.diet="",
            this.sort="",
            this.intolerances=""
            this.$emit('clear')
        },
        filters(args)
        {   
            this.filterResult=args
            this.cuisine=this.filterResult.cuisine
            this.diet=this.filterResult.diet
            this.intolerances=this.filterResult.intolerances
            this.number=this.filterResult.number
            this.sort=this.filterResult.sort
        }
    }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Open+Sans&display=swap');

.searchpage{
    margin:0;
    padding:0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Comfortaa', cursive;
}

.fatherwrapper{
    margin:auto;
    margin-top: 10%;
    background:rgba(0,0,0,0.6);
    max-width: 550px;
    width: 100%;
    height: 120px;
    border-radius: 5px ;
}
.wrapper_searchBar{
    padding:15px;
    display: flex;
    justify-content: space-between;
}
.wrapper_searchBar .input{
    width: 85%;
    padding: 15px 20px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
}
.search{
    background: rgb(59, 189, 59);
    width: 10%;
    border-radius: 5px;
    position: relative;
    cursor:pointer
}

.searchicon{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    font-size: 18px;
    color:white;
}
    
.searcheader{
    position: absolute;
    font-family: 'Open Sans', sans-serif;
    color:white;
    font-size:50px;
    letter-spacing: 3px;
    top:10%;
    left:50%;
    transform: translate(-50%,-50%);
}

    
.filter{
    position:relative;
    float:left;
    left:4%;
    width:75px;
    margin-bottom: 0.5rem;
    background: rgb(59, 189, 59);
    border-radius: 5px;
    cursor:pointer;
    border:none;
    color:white;
    outline: none;
}

.clear{
    position:relative;
    float:left;
    left:4%;
    width:75px;
    margin-left:15px;
    margin-bottom: 0.5rem;
    background: white;
    border-radius: 5px;
    cursor:pointer;
    border:none;
    color:green;
    outline: none;
}
</style>