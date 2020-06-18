

import Search from "../src/views/Search.vue"
import Landing from "../src/views/Landing.vue"
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
