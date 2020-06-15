

import Search from "./views/Search.vue"
import Landing from "./views/Landing.vue"
const routes = [
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/",
    name: "landing",
    component: Landing
  }
];

export default routes;
