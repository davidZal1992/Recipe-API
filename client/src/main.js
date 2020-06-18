import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

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

// Import FontAwsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUtensils,faSignInAlt,faUserPlus,faSearch,faClock,faHeart,faLeaf} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUtensils,faSignInAlt,faUserPlus,faSearch,faClock,faHeart,faLeaf)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Import our routes
import routes from "../src/routes";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  routes
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
