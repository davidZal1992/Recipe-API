<template>
  <div class="stage-1">
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group id="example-input-group-1" label="Name" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.name.$model"
          :state="validateState('name')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>
        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-2" label="Time" label-for="example-input-2">
        <b-form-input
        type="number"
          id="example-input-2"
          name="example-input-2"
          v-model="$v.form.time.$model"
          :state="validateState('time')"
          aria-describedby="input-2-live-feedback"
        >
        </b-form-input>
        <b-form-invalid-feedback id="input-2-live-feedback">This is a required field and must be numeric bigger than 5.</b-form-invalid-feedback>
      </b-form-group>
          <b-form-group id="url-input-group-3" label="Picture URL" label-for="url-input-3">
        <b-form-input
        type="url"
          id="url-input-3"
          name="url-input-3"
          v-model="$v.form.image.$model"
          :state="validateState('image')"
          aria-describedby="input-3-live-feedback"
        >
        </b-form-input>
        <b-form-invalid-feedback id="input-3-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
        <b-form-group >
      <b-form-checkbox-group id="checkbox-group-2" v-model="form.selected" name="flavour-2">
        <b-form-checkbox value="isGluten">Gluten Free</b-form-checkbox>
        <b-form-checkbox value="isVegetarian">Vegetarian</b-form-checkbox>
      </b-form-checkbox-group>
        </b-form-group>
      <b-button @click="onSubmit()">Next</b-button>
      
    </b-form>
  </div>
</template>



<script>
import { validationMixin } from "vuelidate";
import { required, minLength,numeric,minValue,url} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        selected:[],
        name: null,
        time: null,
        image:null,
      }
    };
  },
  validations: {
    form: {
      time: {
        required,
        numeric,
        minValue:minValue(5)
      },
      name: {
        required,
        minLength: minLength(3)
      },
      image:{ required,
      url}
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        name: null,
        time: null,
        image:null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.$emit('nextStage',this.form,this.selected);

    }
  }
};
</script>
<style>
.stage-1 input{
  border-radius: 0%;
  margin: 0;
}
</style>