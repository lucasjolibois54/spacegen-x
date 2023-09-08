<script setup>
import { ref, onMounted, reactive } from 'vue'

const displayPage = ref(false)
const reports = reactive([])  // Store reports with associated ID for deletion purpose
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

function deleteReport(reportId) {
    localStorage.removeItem(reportId)
    const index = reports.findIndex(report => report.id === reportId)
    if (index !== -1) {
        reports.splice(index, 1)
    }
}

onMounted(async () => {
  const user = localStorage.getItem('validUser')
  displayPage.value = user && user !== 'undefined'

  if (displayPage.value) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key !== 'validUser') {
        const storedData = JSON.parse(localStorage.getItem(key))
        if (storedData && storedData.email === user) {
          reports.push({ ...storedData.missionData, id: key })
        }
      }
    }

    currentUser.value = await fetchUserData(user)
  }
})
</script>

<template>
    <div v-if="displayPage">
      <h2 class="mt-4">Dashboard</h2>
  
      <div v-if="currentUser">
        <img :src="currentUser.avatar" alt="User Avatar" width="50">
        <h3>{{ currentUser.first_name }} {{ currentUser.last_name }}</h3>
      </div>
      
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  
      <div v-for="report in reports" :key="report.id">
        <div class="flex space-x-5">
          <p>{{ report.missionName }}</p>
          <button class="bg-blue-500 px-2 py-1 rounded-md">Update</button>
          <button @click="deleteReport(report.id)" class="bg-red-500 px-2 py-1 rounded-md">Delete</button>
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
