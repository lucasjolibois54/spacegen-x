<script setup>
definePageMeta({
  layout: "creatingreports",
});

import { ref } from "vue";
import { useMissionStore } from "~/stores/mission.js";
import Sidebar from "~/components/dashboard/Sidebar.vue";
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
  <Sidebar/>

  <!-- Main Content -->
  <div class="ml-20 md:ml-64 px-8 md:px-4 pb-8 w-full min-h-[calc(100vh-297px)]">
      <!-- <h2 class="text-3xl font-semibold text-dashboard-title mt-12 mb-6">All My Space Reports</h2> -->
      
      <section>
        <div class="mt-16">
                <p class="text-dashboard-gray mb-0">Report Summary</p>
                <h2 class="text-4xl font-semibold text-dashboard-title mb-0">{{ missionStore.missionName }}</h2>
            </div>
        </section>

      <div class="text-gray-300 mt-5">
    <p><b>Description:</b> {{ missionStore.missionDescription }}</p>
    <p><b>Date:</b> {{ missionStore.missionDate }}</p>
    <p><b>Longitude:</b> {{ missionStore.missionLongitude }}</p>
    <p><b>Latitude:</b> {{ missionStore.missionLatitude }}</p>

    <div class="mt-10">
            <h2 class="text-2xl font-semibold mb-4 text-dashboard-title">Selected Images:</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4" v-if="missionStore.missionImages.length">
              <img
                v-for="(imgSrc, index) in missionStore.missionImages"
                :key="index"
                :src="imgSrc"
                alt="Mission Image"
                class="w-full rounded-lg shadow hover:shadow-lg transition-shadow"
              />
            </div>
            <p v-else class="italic">No images selected.</p>
          </div>

<div class="flex gap-4">
<!-- Save button -->
<NuxtLink to="/dashboard"
class="border-dark-btn-border px-6 items-center justify-between border-2 mt-6 bg-blue-500 text-white p-2 rounded-md inline-block">
  <button :disabled="!isDataComplete" @click="() => saveToLocalStorage(false)">Save</button>
</NuxtLink>
<!-- Save as draft button -->
<NuxtLink to="/dashboard"
class="border-dark-btn-border items-center justify-between border-2 mt-6 bg-dark-btn text-white p-2 rounded-md inline-block">
  <button :disabled="!isDataComplete" @click="() => saveToLocalStorage(true)">Save Draft</button>
</NuxtLink></div>
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