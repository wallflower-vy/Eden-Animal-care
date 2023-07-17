<template>
   
 <div>
  <div class="md:px-[8rem] px-[1rem] py-[3rem]  bg-[url('public/images/pexels-johann-1254140.jpg')] bg bg-center  bg-cover h-[800px] w-full">
 <div class="flex items-center " > 

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
   
    <input type="text"    @change="searchDogs"  v-model="keyword" class="rounded w-full border-2 border-gray-200" placeholder="Search for meals"/>
    </div>
    <div class="w-[30%] flex text-white">
        <!-- <router-link :to="{name : 'search'}"  class="px-6">search</router-link> -->
    <a href="#" class="px-6">our Pets</a>
    <a href="#" class="px-6">our Pets</a>
  
   </div>
  </div>  

  

  <div class=" mt-[8rem] md:w-[60%] w-full">
    <h1 class="text-white sm:text-8xl text-6xl  font-extrabold ">Open your <span class="text-[#00AB56]">heart</span> and your <span class="text-[#00AB56]">home</span></h1>
    <div class="mt-10">
        <p class="text-white md:text-xl text-base font-medium">At our Animal Care Center, we are dedicated to providing exceptional care and support for all types of animals. Whether you have a furry friend in need of medical attention, grooming, or just want to ensure their well-being, we've got you covered.</p>
    </div>
    <button class="bg-[#00AB56] px-8 py-3 mt-4 text-center text-white font-medium md:text-xl text-base">Contact Us</button>
  </div>

  
  </div>
  <Banner/>

  <OurPets />
 

 </div>
 
  


 
</template>

<script setup>
import Banner from '../components/Banner.vue'

import OurPets from '../components/OurPets.vue'
import Paws from '../components/Paws.vue'
import { computed, onMounted, ref } from "vue";
import axiosClient from '../axiosClient';

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
