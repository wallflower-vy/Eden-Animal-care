<template>
    <div class="max-w-[800px] mx-auto p-8 ">
        <h1 class="text-5xl font-bold mb-5 text-center">{{ breeds.name }}</h1>
  
    <img :src=" `https://cdn2.thedogapi.com/images/${breeds.reference_image_id}.jpg`" :alt="breeds.name">

    <div class=" text-lg py-2">
      <div>
        <strong class="font-bold">breed_group:</strong> {{breeds.breed_group }}
      </div>
      <div><strong class="font-bold">Origin:</strong> {{ breeds.origin }}</div>
      <div><strong class="font-bold">Temperament:</strong> {{breeds.temperament }}</div>
      <div><strong class="font-bold">height:</strong> {{breeds.height }}</div>
      <div><strong class="font-bold">weight:</strong> {{breeds.weight }}</div>
      <div><strong class="font-bold">bred_for:</strong> {{breeds.bred_for }}</div>
    </div>
    <router-link :to="{name : 'home'}" >Back</router-link>
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