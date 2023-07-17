<template>
   
 <div>
  <div class="md:px-[8rem] px-[1rem] py-[3rem]  bg-[#061614] bg bg-center  bg-cover h-[800px] w-full">
 <div class="flex items-center justify-between " > 

    <div class="md:w-[15%]">
        <router-link :to="{name : 'home'}" >
            <img
      src="/public/images/eden-logo_lcepc6.svg"
      alt=""
      class="cursor-pointer"
    />
        </router-link>
    
    
   </div>
 
   <div class="w-[55%] ">
   
    <input type="text"    @change="searchDogs"  v-model="keyword" class="rounded w-full border-2 border-gray-200" placeholder="Search for Pet/breeds"/>
    </div>
    
  </div>  

  

 
  <div class=" mt-[8rem] md:w-[60%] w-full">
    <h1 class="text-white sm:text-8xl text-6xl  font-extrabold ">Open your <span class="text-[#00AB56]">heart</span> and your <span class="text-[#00AB56]">home</span></h1>
    <div class="mt-10">
        <p class="text-white md:text-xl text-base font-medium">At our Animal Care Center, we are dedicated to providing exceptional care and support for all types of animals. Whether you have a furry friend in need of medical attention, grooming, or just want to ensure their well-being, we've got you covered.</p>
    </div>
   
  </div>


  
  </div>
  <Banner/>

  <OurPets />
  <Paws />
 

 </div>
 
  


 
</template>

<script setup>
import Banner from '../components/Banner.vue'

import OurPets from '../components/OurPets.vue'
import Paws from '../components/Paws.vue'
import { computed, onMounted, ref } from "vue";


import { useRoute } from "vue-router";


import store from "../store";

const route = useRoute()
 const keyword=ref("")

const dogs = computed(() => store.state.searchedDogs.length==0 ?? breeds.value)
function searchDogs() {
    store.dispatch("searchDogs", keyword.value);
  if (keyword.value) {
    store.dispatch("searchDogs", keyword.value);
  } else {
    store.commit("setSearchedDogs", []); 
  }
}
const breeds = ref([]);







    


</script>
