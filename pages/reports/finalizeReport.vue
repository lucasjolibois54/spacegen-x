<script setup>
import { ref } from "vue";
import { useMissionStore } from "~/stores/mission.js";

const missionStore = useMissionStore();

const saveToLocalStorage = () => {
  // Fetch validUser value from localStorage
  const email = localStorage.getItem("validUser");

  // Generate an auto-incremented ID for localStorage
  let id = 1; // start with 1
  while (localStorage.getItem(id.toString())) {
    id++;
  }

  // Create the data object
  const data = {
    email,
    missionData: {
      missionName: missionStore.missionName,
      missionDescription: missionStore.missionDescription,
      missionDate: missionStore.missionDate,
      missionImages: missionStore.missionImages,
      missionLongitude: missionStore.missionLongitude,
      missionLatitude: missionStore.missionLatitude,
    },
  };

  // Save data object to localStorage
  localStorage.setItem(id.toString(), JSON.stringify(data));

  // Reset the store's state
  missionStore.resetState();
};
</script>

<template>
  <div>
    <h1>{{ missionStore.missionName }}</h1>
    <p>{{ missionStore.missionDescription }}</p>
    <p>Date: {{ missionStore.missionDate }}</p>
    <p>Longitude: {{ missionStore.missionLongitude }}</p>
    <p>Latitude: {{ missionStore.missionLatitude }}</p>

    <div>
      <h2>Selected Images:</h2>
      <div v-if="missionStore.missionImages.length">
        <img
          v-for="(imgSrc, index) in missionStore.missionImages"
          :key="index"
          :src="imgSrc"
          alt="Mission Image"
        />
      </div>
      <p v-else>No images selected.</p>
    </div>
    <NuxtLink to="/dashboard"
      ><button @click="saveToLocalStorage">Save</button></NuxtLink
    >
  </div>
</template>