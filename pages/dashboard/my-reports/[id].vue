<template class="">
    <div class="text-main-text">
      <div v-if="report">
        <div class="flex justify-between">
        <p>Report ID: #{{ $route.params.id }}</p><p>Author: {{ report.author }}</p></div>

        <div class="mt-36 text-center">
        <h2 class="text-5xl font-semibold text-dashboard-title mb-0">{{ report.missionData.missionName }}</h2>
        <div v-for="img in report.missionData.missionImages" :key="img">
          <img class="absolute left-1/2 transform -translate-x-1/2 w-2/3 max-h-[70vh] object-cover rounded-md mt-5" :src="img" alt="Mission Image" />
        </div>
        <p>{{ report.missionData.missionDescription }}</p>
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
      const reportId = route.params.id;  // assuming IDs are stored as strings in localStorage
      const report = ref(null);
  
      onMounted(() => {
        // Fetch data from localStorage
        const storedData = localStorage.getItem(reportId);
        
        if (storedData) {
          // Parse the JSON string into an object
          report.value = JSON.parse(storedData);
        }
      });
  
      return {
        report
      };
    }
  };
  </script>