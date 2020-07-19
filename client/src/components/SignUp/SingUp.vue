<template>
    <span>
        <div class="sign-up-form">
            <form>
                <h1 style="text-align:left;">Sign Up</h1>
                <div class="form-row">
                    <div class="block">
                        <label for="username">Username:</label>
                        <div class="inline">
                            <font-awesome-icon class="iconreg" icon="user-secret" />
                            <div class="c_input">
                                <input
                                    class="form-control"
                                    type="text"
                                    v-model.trim="$v.username.$model"
                                    :class="{'is-invalid': $v.username.$error || usernameUnavailable ,  'is-valid': !$v.username.$invalid }"
                                    placeholder="Enter User Name"
                                />
                                <div class="invalid-feedback">
                                    <span v-if="!$v.username.required">
                                        User name is required.
                                        <br />
                                    </span>
                                    <span v-if="!$v.username.onlyLetters">
                                        User name must be in english letters
                                        <br />
                                    </span>
                                    <span v-if="!$v.username.maxLength">
                                        User name must be between 3 to 8 letters
                                        <br />
                                    </span>
                                    <span v-if="!$v.username.minLength">
                                        User name must between 3 to 8 letters
                                        <br />
                                    </span>
                                    <span v-if="usernameUnavailable">
                                        User name unavailable choose differnt one
                                        <br />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="block">
                        <label>First Name:</label>
                        <div class="inline">
                            <font-awesome-icon class="iconreg" icon="user" />
                            <div class="c_input">
                                <input
                                    class="form-control"
                                    type="text"
                                    v-model.trim="$v.firstname.$model"
                                    :class="{'is-invalid': $v.firstname.$error,  'is-valid': !$v.firstname.$invalid }"
                                    placeholder="Enter First Name"
                                />
                                <div class="invalid-feedback">
                                    <span v-if="!$v.firstname.required">
                                        Firstname is required.
                                        <br />
                                    </span>
                                    <span v-if="!$v.firstname.englishLetter">
                                        Firstname must be in english.
                                        <br />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="block">
                        <label>Last Name:</label>
                        <div class="inline">
                            <font-awesome-icon class="iconreg" icon="user-edit" />
                            <div class="c_input">
                                <input
                                    class="form-control"
                                    type="text"
                                    v-model.trim="$v.lastname.$model"
                                    :class="{'is-invalid': $v.lastname.$error,  'is-valid': !$v.lastname.$invalid }"
                                    placeholder="Enter Last Name"
                                />
                                <div class="invalid-feedback">
                                    <span v-if="!$v.lastname.required">
                                        Lastname is required.
                                        <br />
                                    </span>
                                    <span v-if="!$v.lastname.englishLetter">
                                        Lastname must be in english.
                                        <br />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="block">
                        <label for="email">Email address:</label>
                        <div class="inline">
                            <font-awesome-icon class="iconreg" icon="envelope" />
                            <div class="c_input">
                                <input
                                    class="form-control"
                                    type="email"
                                    placeholder="Enter Email"
                                    v-model.trim="$v.email.$model"
                                    :class="{'is-invalid': $v.email.$error || emailUnavailable,  'is-valid': !$v.email.$invalid }"
                                />
                                <div class="invalid-feedback">
                                    <span v-if="!$v.email.required">
                                        Email is required.
                                        <br />
                                    </span>
                                    <span v-if="!$v.email.email">
                                        The Email address field is not a valid e-mail address.
                                        <br />
                                    </span>
                                    <span v-if="emailUnavailable">
                                        The Email address already exsits.
                                        <br />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="block">
                        <label for="profileURL">Profile picture:</label>
                        <div class="inline">
                            <font-awesome-icon class="iconreg" icon="image" />
                            <div class="c_input">
                            <input
                                class="form-control"
                                type="url"
                                placeholder="Enter profile URL"
                                v-model.trim="$v.profile.$model"
                                :class="{'is-invalid': $v.profile.$error,  'is-valid': !$v.profile.$invalid }"
                            />
                             <div class="invalid-feedback">
                        <span v-if="!$v.profile.required">
                            profile url is required.
                            <br />
                        </span>
                        <span v-if="!$v.profile.url">
                            The url address field is not a valid url address.
                            <br />
                        </span>
                    </div>
                    </div>
                        </div>
                    </div>
                   
                </div>
                <div class="form-row">
                    <div class="block">
                        <label class="my-1 mr-2" for="countrySelect">Country</label>
                        <div class="inline">
                            <font-awesome-icon class="iconreg" icon="globe-americas" />
                            <select
                                class="form-control"
                                v-model.trim="$v.country.$model"
                                :class="{'is-invalid': $v.country.$error,  'is-valid': !$v.country.$invalid }"
                            >
                                <option value disabled selected>Select your country</option>
                                <option v-for="c in countryList" :key="c.name">{{ c.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="block">
                        <label for="password">Password:</label>
                        <div class="inline">
                            <font-awesome-icon class="iconreg" icon="lock" />
                            <div class="c_input">
                                <input
                                    class="form-control"
                                    type="password"
                                    placeholder="Enter Password"
                                    v-model.trim="$v.password.$model"
                                    :class="{'is-invalid': $v.password.$error,  'is-valid': !$v.password.$invalid }"
                                />
                                <div class="invalid-feedback">
                                    <span v-if="!$v.password.required">
                                        Password is required.
                                        <br />
                                    </span>
                                    <span v-if="!$v.password.minLength || !$v.password.maxLength">
                                        The password must be between 5 to 10.
                                        <br />
                                    </span>
                                    <span v-if="!$v.password.mustWithNumSL">
                                        The password needs to contain at least one
                                        <br />number and at least one special characters.
                                        <br />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="block">
                        <label for="password">Confirmation Password:</label>
                        <div class="inline">
                            <font-awesome-icon class="iconreg" icon="lock" />
                            <div class="c_input">
                                <input
                                    class="form-control"
                                    type="password"
                                    placeholder="Enter Confirmation Password"
                                    v-model.trim="$v.repassword.$model"
                                    :class="{'is-invalid': $v.repassword.$error,  'is-valid': !$v.repassword.$invalid }"
                                />
                                <div class="invalid-feedback">
                                    <span v-if="!$v.repassword.required">
                                        Confirmation password is required.
                                        <br />
                                    </span>
                                    <span v-if="!$v.repassword.sameAsPassword">
                                        Must Confirmation password be the same as password.
                                        <br />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" v-on:click="submit" class="submitbutton">Submit</button>
            </form>
        </div>
    </span>
</template>

<script>
import {
  required,
  maxLength,
  minLength,
  sameAs,
  alpha,
  email,
  url
} from "vuelidate/lib/validators";
let countries = require("../../countries.json");
const mustWithNumSL = value =>
  /\d/.test(value) && /[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g.test(value); 
export default {
  name: "SignUp",
  data() {
    return {
      emailUnavailable:false,
      usernameUnavailable:false,
      countryList: countries,
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      repassword: "",
      email: "",
      profile:"",
      country: ""
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(8),
      onlyLetters: alpha
    },
    firstname: {
      required,
      englishLetter: alpha
    },
    lastname: {
      required,
      englishLetter: alpha
    },
    email: {
      required,
      email
    },
    profile:{
      required,
      url
    },
    country: {
      required
    },
    password: {
      required,
      mustWithNumSL,
      minLength: minLength(5),
      maxLength: maxLength(10)
    },
    repassword: {
      required,
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
         async submit(e) {
         e.preventDefault()
          this.$v.$touch()
         if (!this.$v.$invalid) {
            try {
            await this.axios.post(
                "https://david-matan-recipe-api-server.herokuapp.com/api/users/",
                {
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    country: this.country,
                    confirmpassword: this.repassword,
                    url:this.profile
                }
             );
            this.$router.push("/login");
            } 
            catch (err) {
            if(err.response.status == 404 && err.response.data.message=="User already exists"){
            this.usernameUnavailable=true;
            this.$v.$touch()
            }
            if (err.response.status == 404 && err.response.data.message=="Email already exists"){
            this.emailUnavailable=true;
            this.$v.$touch()
            }
            
            console.log(err.response);
        }
  }
  }
  }
}
</script>

<style >
.sign-up-form form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.sign-up-form {
    width: 420px;
    margin: 10vh auto;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.6);
    background: rgba(160, 160, 160, 0.5);
    padding: 20px;
    text-align: center;
    border-radius: 30px;
    display: inline-block;
}

.sign-up-form h1 {
    color: white;
    margin-bottom: 20px;
}

/* Clear floats after the columns */

.form-control {
    border-radius: 20px;
    padding: 7px;
    margin: 1px 0;
    width: 300px;
    border: 1px solid #999;
    outline: none;
    margin-left: 2rem;
}

.block {
    display: block;
    text-align: left;
}

.sign-up-form label {
    color: white;
}

.submitbutton {
    float: left;
    margin-top: 2rem;
    width: 150px;
    height: 45px;
    border: 1px solid white;
    color: white;
    background: rgb(59, 189, 59);
    border-radius: 5px;
    font-family: 'Fjalla One', sans-serif;
    outline: none;
}

.submitbutton:focus {
    outline: none;
}
.inline {
    display: flex;
}

.iconreg {
    margin-top: 5px;
    font-size: 1.5em;
    color: white;
}
.c_input .invalid-feedback {
    position: relative;
    left: 30px;
    
}
.invalid-feedback:hover{
  font-size:28px;
}
</style>