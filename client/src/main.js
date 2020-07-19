import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)

import PrettyInput from 'pretty-checkbox-vue/input';
import PrettyCheck from 'pretty-checkbox-vue/check';
import PrettyRadio from 'pretty-checkbox-vue/radio';

Vue.component('p-input', PrettyInput);
Vue.component('p-check', PrettyCheck);
Vue.component('p-radio', PrettyRadio);


import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
Vue.component(component, mdbvue[component])
}

// Import Bootsrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// Import FontAwsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUtensils,faSignInAlt,faUserPlus,faSearch,faClock,faHeart,faLeaf,faEye,faStar,faUser,faUserSecret,faUserEdit,faEnvelope,faImage,faGlobeAmericas,faLock,faTimes,faAddressCard} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUtensils,faSignInAlt,faUserPlus,faSearch,faClock,faHeart,faLeaf,faEye,faStar,faUser,faUserSecret,faUserEdit,faEnvelope,faImage,faGlobeAmericas,faLock,faTimes,faAddressCard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Import our routes
import routes from "./routes";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  routes
});



const shared_data = {
  username: localStorage.username,
  profilePicture: localStorage.profilePicture,
  login(username,profilePicture){
    localStorage.setItem("username",username)
    localStorage.setItem("profilePicture",profilePicture)
    this.username = username;
    this.profilePicture=profilePicture
  },
  logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("favorites");
    localStorage.removeItem("watch");
    localStorage.removeItem("profilePicture")
  }
  };

axios.defaults.withCredentials = true;

new Vue({
  router,
  data(){
    return{
      store:shared_data
    };
  },
  render: h => h(App),
}).$mount('#app')
