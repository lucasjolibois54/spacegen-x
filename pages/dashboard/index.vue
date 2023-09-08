<script setup>
import { ref, onMounted, reactive } from 'vue'

const displayPage = ref(false)
const reports = reactive([])  // Store reports that match the 'validUser' email

onMounted(() => {
  const user = localStorage.getItem('validUser')

  // Check if 'validUser' exists in localStorage
  displayPage.value = user && user !== 'undefined'

  // Retrieve all reports that match the email
  if (displayPage.value) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key !== 'validUser') {
        const storedData = JSON.parse(localStorage.getItem(key))
        if (storedData && storedData.email === user) {
          reports.push(storedData.missionData)
        }
      }
    }
  }
})
</script>

<template>
  <div v-if="displayPage">
    <h2 class="mt-4">Dashboard</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum esse voluptatibus minima odio iste commodi cupiditate sed quidem incidunt?</p>

    <!-- Loop through the reports and display them -->
    <div v-for="report in reports" :key="report.missionName">
      <div class="flex space-x-5">
        <p>{{ report.missionName }}</p>
        <button class="bg-blue-500 px-2 py-1 rounded-md">Update</button>
        <button class="bg-red-500 px-2 py-1 rounded-md">Delete</button>
      </div>
    </div>

    <div>
        <NuxtLink to="/reports/missionDetails"><button class="bg-blue-500 px-2 py-1 rounded-md">Create Report</button></NuxtLink>
    </div>
  </div>
  <p class="text-red-500" v-else>Protected Route</p>
</template>

<style scoped>
  /* Your styles here */
</style>
