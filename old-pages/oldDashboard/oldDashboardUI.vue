<script setup>
import { ref, onMounted, reactive } from 'vue'


import { useRouter } from 'vue-router';
import { useMissionStore } from '~/stores/mission';

const router = useRouter();
const missionStore = useMissionStore();

const updateReport = (id) => {
  const storedReport = JSON.parse(localStorage.getItem(id));
  
  if(storedReport && storedReport.missionData) {
    missionStore.populateStoreWithReport(storedReport.missionData);
  }
  
  missionStore.setCurrentReportId(id);
  router.push('/reports/missionDetails');
};



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
    <div class="h-screen bg-gray-100" v-if="displayPage">
        <!-- Sidebar -->
        <div class="bg-blue-600 w-64 min-h-full fixed left-0 top-0 flex flex-col p-4">
            <div class="mb-4">
                <img :src="currentUser.avatar" alt="User Avatar" class="rounded-full w-20 h-20 mx-auto border-2 border-white">
                <h3 class="text-white text-center mt-2">{{ currentUser.first_name }} {{ currentUser.last_name }}</h3>
            </div>
            <NuxtLink to="/reports/missionDetails" class="text-white text-center mt-4 bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700">Create Report</NuxtLink>
        </div>

        <!-- Main Content -->
        <div class="ml-64 p-8">
            <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>
            <p class="text-gray-600 mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <div v-for="report in reports" :key="report.id" class="bg-white p-4 rounded-md shadow-sm mb-4">
                <div class="flex justify-between items-center">
                    <div class="flex space-x-4">
                        <p class="font-medium">ID: #{{ report.id }}</p>
                        <p class="text-blue-600">{{ report.missionName }}</p>
                        <p class="text-gray-500">{{ report.missionDate }}</p>
                    </div>
                    <div class="flex space-x-2">
                        <button @click="updateReport(report.id)" class="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600">Update</button>
                        <button @click="deleteReport(report.id)" class="bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <p class="text-center mt-10 text-red-500" v-else>Protected Route</p>
</template>

<style scoped>
</style>
