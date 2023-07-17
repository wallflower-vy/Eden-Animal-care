<template>
   <div class=" max-w-[800px] mx-auto flex flex-col justify-center" >
    <div class=" p-8  ">
        <h1 class="text-5xl font-bold mb-5 text-center mb-10">{{ breeds.name }}</h1>
  
    <img :src=" `https://cdn2.thedogapi.com/images/${breeds.reference_image_id}.jpg`" :alt="breeds.name" class="mt-16">

    <div class=" text-lg py-2 ">
      <div>
        <strong class="font-bold">Breed Group:</strong> {{breeds.breed_group }}
      </div>
      <div><strong class="font-bold">Origin:</strong> {{ breeds.origin }}</div>
      <div><strong class="font-bold">Temperament:</strong> {{breeds.temperament }}</div>
      <div><strong class="font-bold">Height:</strong> {{breeds.height }}</div>
      <div><strong class="font-bold">Weight:</strong> {{breeds.weight }}</div>
      <div><strong class="font-bold">Bred for:</strong> {{breeds.bred_for }}</div>
    </div>
   
    </div>
   <div class="flex ">
    <router-link :to="{name : 'home'}" class="border-2 p-5 bg-green-700 text-white"  >Back</router-link>
   </div>
   </div>
   
</template>

<script setup>
import {onMounted, ref} from 'vue';
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
const route = useRoute();
    const breeds = ref({});
   


onMounted(async() => {
  const response= await axiosClient.get(`breeds/search?q=${route.params.name}`)
    console.log(response.data);
  breeds.value = response.data[0] || {};;
  });
;
</script>