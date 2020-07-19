<template>
    <div class="c-2">
        <b-form-group id="product-input-group-1" label="Product" label-for="product-input-1">
            <b-form-input
                id="product-input-1"
                name="product-input-1"
                v-model="$v.form.product.$model"
                :state="validateState('product')"
                aria-describedby="product-live-feedback"
            ></b-form-input>
            <b-form-invalid-feedback
                id="product-live-feedback"
            >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group id="amount-input-group-2" label="Amount" label-for="amount-input-2">
            <b-form-input
                id="amount-input-2"
                name="amount-input-2"
                v-model="$v.form.amount.$model"
                :state="validateState('amount')"
                aria-describedby="amount-live-feedback"
            ></b-form-input>
            <b-form-invalid-feedback
                id="amount-live-feedback"
            >This is a required field and must be positive .</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Unit" label-for="unit-input">
            <b-form-select
                id="unit-input"
                class="unit"
                label="unit"
                v-model="selectedMeasurement"
                :options="optionsMeasurement"
            ></b-form-select>
        </b-form-group>

        <b-button @click="addIngredient()">Add</b-button>

        <div class="mt-3">
            <h1>Ingredients</h1>
            <ul class="mb-0 pl-3">
                <li v-for="ingredient in submittedIngredient" :key="ingredient.product">
                    {{ ingredient.key +', amount: '+ ingredient.amount }}
                    <font-awesome-icon style="color:red;" @click="removeIngredient(ingredient.key)" icon="times" />
                </li>
            </ul>
        </div>
        <b-button @click="onSubmit()">Next</b-button>
        <b-button @click="$emit('backStage')">Back</b-button>
    </div>
</template>

<script>
import { helpers } from 'vuelidate/lib/validators'
import { validationMixin } from "vuelidate";
import { required,decimal} from "vuelidate/lib/validators";
const decimal_reg = helpers.regex('alpha', /^\d+(?:\.\d{1,2})?$/)
const mustBePos = (value) =>  value>0
    export default {
        mixins: [validationMixin],
        name:"stage2",
        data(){
        return{
          form:{
                amount:null,
                product:null
          },
             submittedIngredient: [],
          optionsMeasurement:[  { value: null, text: 'None' },
          { value: 'oz', text: 'oz' },
          { value: 'grams', text: 'grams' },],
        selectedMeasurement:null,

            }
        },
          validations: {
            form:{
               amount: {
        required,
        decimal,
        mustBePos,decimal_reg
    
      },
      product:{
          required
      }
            }
      

  },
     methods: {
                 addIngredient(){
                this.$v.form.$touch();
                if (this.$v.form.$anyError) {
                   return;
                   }
                   if(this.selectedMeasurement!=null){
                      this.submittedIngredient.push({product:this.form.product ,amount:parseFloat(this.form.amount),unit:this.selectedMeasurement})
                   }
                  else{
                    this.submittedIngredient.push({product:this.form.product ,amount:parseFloat(this.form.amount)})
                  }
                     this.resetForm();
                   },
    removeIngredient(key){
                   this.submittedIngredient.pop(key);    
      },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        amount: null,
        product: null
      }
      this.selectedMeasurement=null;
      

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
      onSubmit() {
      this.$v.form.$touch();
      if(this.submittedIngredient.length>0){
          this.$emit('nextStage',this.submittedIngredient);
      }
      else if (this.$v.form.$anyError) {
        return;
      }
      
    }
    
  
  }
        
    }
</script>

<style  >
.c-2 input {
    border-radius: 0%;
    margin: 0;
}
.c-2 ul {
    list-style-type: none;
}
.c-2 li{
  font-size: 25px;
  color:blueviolet;
}

</style>