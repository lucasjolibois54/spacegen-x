<script setup>
import { ref, onMounted, reactive } from 'vue'

const displayPage = ref(false)
const reports = reactive([])  // Store reports that match the 'validUser' email
const currentUser = ref(null)

async function fetchUserData(email) {
    try {
        const response = await fetch('/data/users/users.json')
        if (!response.ok) {
            throw new Error('Failed to fetch user data')
        }
        const users = await response.json()
        return users.find(user => user.email === email)
    } catch (error) {
        console.error('There was a problem fetching the user data:', error)
    }
}

onMounted(async () => {
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

    // Fetch user details and assign it to currentUser
    currentUser.value = await fetchUserData(user)
  }
})
</script>

<template>
    <div v-if="displayPage">
      <h2 class="mt-4">Dashboard</h2>
  
      <!-- Display user details -->
      <div v-if="currentUser">
        <img :src="currentUser.avatar" alt="User Avatar" width="50">
        <h3>{{ currentUser.first_name }} {{ currentUser.last_name }}</h3>
      </div>
      
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
  </style>
  