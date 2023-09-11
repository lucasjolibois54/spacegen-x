<script setup>
definePageMeta({
  layout: "dashboard",
});

import ProtectedPage from '@/components/main/ProtectedPage.vue';

import { ref, onMounted, reactive } from 'vue'
import LogoutDashboard from '~/components/main/LogoutDashboard.vue'

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
  const user = localStorage.getItem('validUser');
  displayPage.value = user && user !== 'undefined';

  if (displayPage.value) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== 'validUser') {
        const storedData = JSON.parse(localStorage.getItem(key));
        
        // Checking if savedAsDraft is inside the missionData or not
        const isDraft = storedData.missionData && storedData.missionData.savedAsDraft;

        // Ensure storedData is related to the current user
        // and savedAsDraft true
        if (storedData && storedData.email === user && (isDraft === true )) {
          reports.push({ ...storedData.missionData, id: key });
        }
      }
    }

    currentUser.value = await fetchUserData(user);
  }
});


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
                    <img :src="currentUser.avatar" alt="User Avatar" class="rounded-full w-10 h-10 mx-auto border-2 border-dark-btn-text md:w-16 md:h-16">
                    <div class="flex flex-col text-left">
                        <h3 class="text-dark-btn-text text-center mt-2 hidden md:block">{{ currentUser.first_name }} {{ currentUser.last_name }}</h3>
                        <h3 class="text-dark-btn-text text-center hidden md:block">View Profile</h3>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="ml-20 md:ml-64 px-8 md:px-4 pb-8 w-full min-h-[calc(100vh-297px)]">
            <h2 class="text-3xl font-semibold text-dashboard-title mt-12 mb-6">All My Space Reports</h2>
            
            <!-- Reports Table -->
            <div class="overflow-x-auto">
                <table class="min-w-full  rounded-md shadow-sm">
                    <thead>
                        <tr class=" font-light text-left text-dark-data-title border-b border-dark-btn-border">
                            <th class="px-4 py-2">ID</th>
                            <th class="px-4 py-2 hidden md:table-cell">Image</th>
                            <th class="px-4 py-2">Name</th>
                            <th class="px-4 py-2 hidden md:table-cell">Description</th>
                            <th class="px-4 py-2 hidden md:table-cell">ISS Coordinates</th>
                            <th class="px-4 py-2 hidden md:table-cell">Date</th>
                            <th class="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="text-dark-data-text">
                        <tr v-for="report in reports" :key="report.id" class="border-b border-dark-btn-border hover:bg-dark-btn">
                            <td class="px-4 py-2">#{{ report.id }}</td>
                            <td class="px-4 py-2 hidden md:table-cell">
                                <img :src="report.missionImages[0]" alt="Mission Image" class="w-10 h-10 rounded">
                            </td>
                            <td class="px-4 py-2">{{ report.missionName }}</td>
                            <td class="px-4 py-2 hidden md:table-cell">{{ report.missionDescription.substring(0, 10) }}...</td>
                            <td class="px-4 py-2 hidden md:table-cell">
                                {{ parseFloat(report.missionLongitude).toFixed(2) }}, {{ parseFloat(report.missionLatitude).toFixed(2) }}
                            </td>
                            <td class="px-4 py-2 hidden md:table-cell">{{ report.missionDate }}</td>
                            <td class="px-4 py-2">
                                <button @click="updateReport(report.id)" class="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600">Update</button>
                                <button @click="deleteReport(report.id)" class="bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-600 ml-2">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</ProtectedPage>
</template>

<style scoped>
</style>
