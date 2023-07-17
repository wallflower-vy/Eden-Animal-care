import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import DogDetails from '../views/DogDetails.vue'
// import Search from '../components/Search.vue'
// import SearchBreeds from '../views/SearchBreeds.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component:Home,
  },
  {
    path: '/breeds/:name',
    name: "DogDetails",
    component:DogDetails,
  },
  // {
  //   path:'/search',
  //   name: "search",
  //   component:Search,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
