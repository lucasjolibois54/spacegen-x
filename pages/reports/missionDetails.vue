<script setup>
definePageMeta({
  layout: "creatingreports",
});

import { ref, onMounted } from 'vue'
import { useMissionStore } from '~/stores/mission'
import Sidebar from '~/components/dashboard/Sidebar.vue';
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
  <Sidebar/>

  <!-- Main Content -->
  <div class="ml-20 md:ml-64 px-8 md:px-4 pb-8 w-full min-h-[calc(100vh-297px)]">
      <!-- <h2 class="text-3xl font-semibold text-dashboard-title mt-12 mb-6">All My Space Reports</h2> -->
      


      <div class="">
    <section>
        <div class="mt-16">
                <p class="text-dashboard-gray mb-0">Step 1</p>
                <h2 class="text-4xl font-semibold text-dashboard-title mb-0">Mission Details</h2>
            </div>
        </section>

    <!-- Mission Name Input -->
    <div class="mt-10">
      <label for="missionName" class="block text-sm font-medium text-gray-300">Mission Name</label>
      <input v-model="missionName" type="text" id="missionName" name="missionName" placeholder="Enter mission name..." class="mt-1 p-2 rounded-md w-full md:w-1/2 bg-dark-btn border-2 text-main-text border-dark-btn-border">
    </div>

    <!-- Mission Description Input -->
    <div class="mt-4">
      <label for="missionDescription" class="block text-sm font-medium text-gray-300">Mission Description</label>
      <textarea v-model="missionDescription" type="text" id="missionDescription" name="missionDescription" placeholder="Enter mission description..." class="mt-1 p-2 rounded-md w-full md:w-1/2 pb-32 text-main-text bg-dark-btn border-2 border-dark-btn-border"></textarea>
    </div>

    <!-- Mission Date Picker -->
    <div class="mt-4">
      <label for="missionDate" class="block text-sm font-medium text-gray-300">Mission Date</label>
      <input v-model="missionDate" type="date" id="missionDate" name="missionDate" class="mt-1 p-2 text-dark-btn-text rounded-md bg-dark-btn border-2 border-dark-btn-border fill-red-500">
    </div>

    <NuxtLink to="/reports/missionImages"><button @click="saveMissionData" class="border-dark-btn-border px-6 items-center justify-between border-2 mt-6 bg-blue-500 text-white p-2 rounded-md inline-block">Next Step</button></NuxtLink>
  </div>


      
  </div>
</div>
</ProtectedPage>
</template>

<style scoped>
</style>
