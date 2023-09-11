<script setup>
definePageMeta({
  layout: "creatingreports",
});

import { ref } from "vue";
import { useMissionStore } from "~/stores/mission.js";

import { computed } from "vue";

const isDataComplete = computed(() => {
  return (
    missionStore.missionName &&
    missionStore.missionDescription &&
    missionStore.missionDate &&
    missionStore.missionLongitude &&
    missionStore.missionLatitude &&
    missionStore.missionImages.length > 0
  );
});


const missionStore = useMissionStore();

const saveToLocalStorage = (isDraft = false) => {
  // Fetch validUser value from localStorage
  const email = localStorage.getItem("validUser");

  // If there's an ID in the store, use that ID
  // Otherwise, generate an auto-incremented ID for localStorage
  let id = missionStore.currentReportId ? missionStore.currentReportId : 1;
  while (!missionStore.currentReportId && localStorage.getItem(id.toString())) {
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
      savedAsDraft: isDraft  // <-- Added savedAsDraft property
    },
  };

  // Save data object to localStorage
  localStorage.setItem(id.toString(), JSON.stringify(data));

  // Reset the store's state
  missionStore.resetState();
};
</script>

<template>
  <ProtectedPage>
<div class="h-full bg-dark-bg flex">
  <!-- Sidebar -->
  <div class="bg-dashboard-nav border-r-2 border-dark-btn-border w-20 md:w-64 min-h-screen fixed left-0 top-0 flex flex-col justify-between p-2 md:p-4">
      
      <!-- Top Content -->
      <div class="flex flex-col flex-grow">
          <NuxtLink to="/">
              <h3 class="text-center text-3xl mt-2 hidden md:block text-dashboard-title">SpaceGen X</h3>
          </NuxtLink>
          <div class="mt-20">
              <div class="text-white text-left mt-4 px-2 py-2 rounded-md flex md:px-4 md:py-2">
                  <!-- Icon for smaller screens -->
                  <span class="md:hidden">📄</span>
                  <!-- Text for larger screens -->
                  <span class="hidden md:block">Menu</span>
              </div>
              <NuxtLink to="/dashboard" class="text-dark-btn-text border-2 border-dark-btn-border text-center mt-4 bg-dark-btn px-2 py-2 rounded-md flex md:px-4 md:py-2"> <!-- items-center justify-center-->
                  <!-- Icon for smaller screens -->
                  <span class="md:hidden">📄</span>
                  <!-- Text for larger screens -->
                  <span class="hidden md:block ml-3">Dashboard</span>
              </NuxtLink>
              <NuxtLink to="/dashboard/publicReports" class="text-dark-btn-text border-2 border-dark-btn-border text-center mt-1 bg-dark-btn px-2 py-2 rounded-md flex md:px-4 md:py-2"> <!-- items-center justify-center-->
                  <!-- Icon for smaller screens -->
                  <span class="md:hidden">📄</span>
                  <!-- Text for larger screens -->
                  <span class="hidden md:block ml-3">Public Reports</span>
              </NuxtLink>
          </div>
      </div>
      
      <!-- Logout at the bottom-->
      <LogoutDashboard class="mb-1"/>

      <!-- Profile at the bottom -->
      <div class="mb-4 mt-1 border-2 border-dark-btn-border rounded-md pr-4 py-3 bg-dark-btn">
          <div class="flex">
              <!-- <img :src="currentUser.avatar" alt="User Avatar" class="rounded-full w-10 h-10 mx-auto border-2 border-dark-btn-text md:w-16 md:h-16"> -->
              <div class="flex flex-col text-left">
                  <!-- <h3 class="text-dark-btn-text text-center mt-2 hidden md:block">{{ currentUser.first_name }} {{ currentUser.last_name }}</h3> -->
                  <h3 class="text-dark-btn-text text-center hidden md:block">View Profile</h3>
              </div>
          </div>
      </div>
  </div>

  <!-- Main Content -->
  <div class="ml-20 md:ml-64 px-8 md:px-4 pb-8 w-full min-h-[calc(100vh-297px)]">
      <!-- <h2 class="text-3xl font-semibold text-dashboard-title mt-12 mb-6">All My Space Reports</h2> -->
      


      <div class="text-white">
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

<!-- Save as draft button -->
<NuxtLink to="/dashboard">
  <button :disabled="!isDataComplete" @click="() => saveToLocalStorage(true)">Save Draft</button>
</NuxtLink>
<!-- Save button -->
<NuxtLink to="/dashboard">
  <button :disabled="!isDataComplete" @click="() => saveToLocalStorage(false)">Save</button>
</NuxtLink>
  </div>


      
  </div>
</div>
</ProtectedPage>
</template>



<!--
      // Generate an auto-incremented ID for localStorage
 /* let id = 1; // start with 1
  while (localStorage.getItem(id.toString())) {
    id++;
  }*/
-->