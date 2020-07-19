<template>
  <mdb-container>
    <!-- trigger modal button -->
    <div class="filter" @click="poll = true">filter</div>
    <!-- poll modal -->
    <mdb-modal :show="poll" @close="poll = false" fullHeight info removeBackdrop>
      <mdb-modal-header style="background:rgb(59, 189, 59);" center :close="false">
        <p class="heading lead">Search Filters</p>
      </mdb-modal-header>
      <mdb-modal-body>
        <div class="dropwdown"><DropDown v-bind:oldselect="cuisine" v-on:change="updateCuisine($event)" v-bind:options="cuisineOptions"/></div>
        <div class="dropwdown"><DropDown v-bind:oldselect="diet" v-on:change="updateDiet($event)" v-bind:options="dietOptions"/></div>
        <div class="dropwdown"><DropDown v-bind:oldselect="intolerances" v-on:change="updateIntolerances($event)" v-bind:options="intolerancesOptions"/></div>
        <Toggle sort='Sort by:' v-bind:oldButtonFirst="sort" item1='Likes' item2='Time' v-on:click="chooseSort($event)"/>
        <Toggle sort='Results:' v-bind:oldButtonSecond="number" item1='10' item2='15' v-on:click="chooseResults($event)"/>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn color="green" style="color:white;" @click="poll = false" icon="paper-plane" iconRight iconClass="ml-0.5 white-text">Cancel</mdb-btn>
        <mdb-btn outline="green" @click="saveData();">Send</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>

<script>
  import { mdbContainer, mdbBtn, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter } from 'mdbvue';
  import DropDown from '../SearchFilterModalWindow/SearchFilterDropDown/DropDown'
  import {optionsCuisine,optionsDiet,optionsIntolerances} from '../../../../filters'
  import Toggle from '../SearchFilterModalWindow/SearchFilterToggles/SearchFilterToggles'
  export default {
    name: 'FilterModal',
      components: {
      mdbContainer,
      mdbBtn,
      mdbModal,
      mdbModalHeader,
      mdbModalBody,
      mdbModalFooter,
      DropDown,
      Toggle
    },
    data() {
      return {
        poll: false,
        number:5,
        cuisine:"",
        diet:"",
        intolerances:"",
        sort:"",
        cuisineOptions:optionsCuisine,
        dietOptions:optionsDiet,
        intolerancesOptions:optionsIntolerances
      }
    },
    methods:{
        updateCuisine(payload) {this.cuisine=payload},
        updateDiet(payload) {this.diet=payload},
        updateIntolerances(payload) {this.intolerances=payload},
        chooseSort(payload){
            if(payload==='on1')
                this.sort='likes'
            else if(payload==='on2')
                this.sort='time'
                else this.sort=''

            },
        chooseResults(payload){
          if(payload==='on1')
                this.number=10
            else if(payload==='on2')
                this.number=15
                else this.number=5
        },
        saveData()
        {
            this.poll=false;
            localStorage.cuisine=this.cuisine
            let filterRes={
                number:this.number,
                cuisine:this.cuisine,
                diet:this.diet,
                intolerances:this.intolerances,
                sort:this.sort
            }
            this.$emit('update-res',filterRes)
        },
    }
  }
</script>

<style >
.dropwdown{
         margin-top:3rem;
}

.filter{
        position:relative;
        float:left;
        left:4%;
        width:75px;
        margin-bottom: 3rem;
        background: rgb(59, 189, 59);
        border-radius: 5px;
        cursor:pointer;
        border:none;
        color:white;
        outline: none;
    }



</style>