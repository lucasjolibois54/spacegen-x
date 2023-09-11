<script setup>
definePageMeta({
  layout: "creatingreports",
});

import { ref, onMounted } from 'vue'
import { useMissionStore } from '~/stores/mission'

const missionStore = useMissionStore()

const displayPage = ref(false)

onMounted(() => {
  const user = localStorage.getItem('validUser')
  displayPage.value = user && user !== 'undefined'

  // Prefill the input fields with data from the Pinia store
  missionName.value = missionStore.missionName
  missionDescription.value = missionStore.missionDescription
  missionDate.value = missionStore.missionDate
})

const saveMissionData = () => {
  missionStore.updateMissionDetails(missionName.value, missionDescription.value, missionDate.value);
}

const missionName = ref('')
const missionDescription = ref('')
const missionDate = ref('')
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
  <div class=" px-8 md:px-4 pb-8 w-full min-h-[calc(100vh-297px)]">
      <!-- <h2 class="text-3xl font-semibold text-dashboard-title mt-12 mb-6">All My Space Reports</h2> -->
      


      <div class="">
    <section>
        <div class="">
                <p class="text-dashboard-gray mb-0">Step 1</p>
                <h2 class="text-5xl font-semibold text-dashboard-title mb-0">Mission Details</h2>
            </div>
        </section>

    <!-- Mission Name Input -->
    <div class="mt-20">
      <label for="missionName" class="block text-sm font-medium text-gray-300">Mission Name</label>
      <input v-model="missionName" type="text" id="missionName" name="missionName" placeholder="Enter mission name..." class="mt-1 p-2 rounded-md w-full md:w-1/2 bg-dark-btn border-2 border-dark-btn-border">
    </div>

    <!-- Mission Description Input -->
    <div class="mt-4">
      <label for="missionDescription" class="block text-sm font-medium text-gray-300">Mission Description</label>
      <input v-model="missionDescription" type="text" id="missionDescription" name="missionDescription" placeholder="Enter mission description..." class="mt-1 p-2 rounded-md w-full md:w-1/2 pb-32 bg-dark-btn border-2 border-dark-btn-border">
    </div>

    <!-- Mission Date Picker -->
    <div class="mt-4">
      <label for="missionDate" class="block text-sm font-medium text-gray-300">Mission Date</label>
      <input v-model="missionDate" type="date" id="missionDate" name="missionDate" class="mt-1 p-2 text-dark-btn-text rounded-md bg-dark-btn border-2 border-dark-btn-border">
    </div>

    <NuxtLink to="/reports/missionImages"><button @click="saveMissionData" class="border-dark-btn-border flex items-center justify-between border-2 mt-6 bg-blue-500 text-white p-2 rounded-md">Next Step →</button></NuxtLink>
  </div>


      
  </div>
</div>
</ProtectedPage>
</template>

<style scoped>
</style>
