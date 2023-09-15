<script setup>
definePageMeta({
  layout: "dashboard",
});

import { ref, onMounted } from 'vue';

import ProtectedPage from '@/components/main/ProtectedPage.vue';
import Sidebar from '~/components/dashboard/Sidebar.vue';

const reports = ref([]); // Use a reactive reference to store the reports

onMounted(async () => {
  try {
    const response = await fetch('/data/public-reports/publicReports.json');
    const data = await response.json();
    reports.value = data;  // Assign fetched data directly to reports
  } catch (error) {
    console.error("Failed to fetch reports:", error);
  }
});

</script>

<template>
  <ProtectedPage>
    <div class="h-full bg-dark-bg flex">
        <!-- Sidebar -->
        <Sidebar/>

        <!-- Main Content -->
        <div class="ml-20 md:ml-64 px-8 md:px-4 pb-8 w-full min-h-[calc(100vh-297px)]">
            <h2 class="text-3xl font-semibold text-dashboard-title mt-12 mb-6">All Public Reports</h2>
            
            <!-- Reports Table -->
            <div class="overflow-x-auto">
                <table class="min-w-full rounded-md shadow-sm">
                    <thead>
                        <tr class="font-light text-left text-dark-data-title border-b border-dark-btn-border">
                            <th class="px-4 py-2">ID</th>
                            <th class="px-4 py-2 hidden md:table-cell">Image</th>
                            <th class="px-4 py-2">Name</th>
                            <th class="px-4 py-2 hidden md:table-cell">Description</th>
                            <th class="px-4 py-2 hidden md:table-cell">ISS Coordinates</th>
                            <th class="px-4 py-2 hidden md:table-cell">Date</th>
                            <th class="px-4 py-2 hidden md:table-cell">View</th>
                        </tr>
                    </thead>
                    <tbody class="text-dark-data-text">
                         <tr v-for="report in reports" :key="report.id" class="border-b border-dark-btn-border hover:bg-dark-btn">
                            <td class="px-4 py-2">#{{ report.id }}</td>
                            <td class="px-4 py-2 hidden md:table-cell">
                                <img :src="report.missionData.missionImages[0]" alt="Mission Image" class="w-10 h-10 rounded">
                            </td>
                            <td class="px-4 py-2">{{ report.missionData.missionName }}</td>
                            <td class="px-4 py-2 hidden md:table-cell">{{ report.missionData.missionDescription.substring(0, 25) }}...</td>
                            <td class="px-4 py-2 hidden md:table-cell">
                                {{ parseFloat(report.missionData.missionLongitude).toFixed(2) }}, {{ parseFloat(report.missionData.missionLatitude).toFixed(2) }}
                            </td>
                            <td class="px-4 py-2 hidden md:table-cell">{{ report.missionData.missionDate }}</td>
                            <NuxtLink :to="`/dashboard/public-reports/${report.id}`"><td class="px-4 py-2">View</td></NuxtLink>
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
