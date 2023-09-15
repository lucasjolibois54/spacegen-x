<template>
    <div>
      <p>Report ID: {{ $route.params.id }}</p>
      <div v-if="report">
        <h2>{{ report.missionData.missionName }}</h2>
        <p>{{ report.missionData.missionDescription }}</p>
        <div v-for="img in report.missionData.missionImages" :key="img">
          <img :src="img" alt="Mission Image" />
        </div>
      </div>
      <p v-else>No report found for this ID.</p>
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
          const response = await fetch('http://localhost:3000/data/public-reports/publicReports.json/');
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
  
  