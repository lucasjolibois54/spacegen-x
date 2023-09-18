<template class="pb-32">
    <div class="text-main-text">
      <div v-if="report">
        <div class="flex justify-between">
        <p>Report ID: #{{ $route.params.id }}</p><p>Author: {{ report.author }}</p></div>

        <div class="mt-36 text-center md:w-2/3 mx-auto">
        <h2 class="text-5xl font-semibold text-dashboard-title mb-0">{{ report.missionData.missionName }}</h2>
        <div v-for="img in report.missionData.missionImages" :key="img">
          <img class="relative left-1/2 transform -translate-x-1/2 max-h-[70vh] w-full object-cover rounded-md mt-5" :src="img" alt="Mission Image" />
        </div>
        <p class="text-left mt-10 text-gray-300">{{ report.missionData.missionDescription }}</p>
        </div>
      </div>
      <p v-else>No report found for the ID #{{ $route.params.id }}.</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const reportId = Number(route.params.id); 
      const report = ref(null);
  

      onMounted(async () => {
        try {
          const response = await fetch('/data/public-reports/publicReports.json/');
          if (!response.ok) throw new Error('Failed to fetch reports');
          const reports = await response.json();
          report.value = reports.find(r => r.id === reportId);
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
      });
  
      return {
        report
      };
    }
  };
  </script>
  
  