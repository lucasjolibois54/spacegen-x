<template>
    <div class="min-h-screen ">
      <!-- Main container -->
      <div class="relative inline-block">
  
        <!-- Clickable div to toggle tooltip -->
        <div @click="showTooltip = !showTooltip" class="p-4 cursor-pointer">
            <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.76 3.28C1.29333 3.28 0.9 3.12667 0.58 2.82C0.273333 2.51333 0.12 2.12 0.12 1.64C0.12 1.16 0.273333 0.773333 0.58 0.48C0.9 0.173333 1.29333 0.0199999 1.76 0.0199999C2.22667 0.0199999 2.61333 0.173333 2.92 0.48C3.24 0.786667 3.4 1.17333 3.4 1.64C3.4 2.12 3.24 2.51333 2.92 2.82C2.61333 3.12667 2.22667 3.28 1.76 3.28ZM1.76 10.28C1.29333 10.28 0.9 10.1267 0.58 9.82C0.273333 9.51333 0.12 9.12 0.12 8.64C0.12 8.16 0.273333 7.77333 0.58 7.48C0.9 7.17333 1.29333 7.02 1.76 7.02C2.22667 7.02 2.61333 7.17333 2.92 7.48C3.24 7.78667 3.4 8.17333 3.4 8.64C3.4 9.12 3.24 9.51333 2.92 9.82C2.61333 10.1267 2.22667 10.28 1.76 10.28ZM1.76 17.28C1.29333 17.28 0.9 17.1267 0.58 16.82C0.273333 16.5133 0.12 16.12 0.12 15.64C0.12 15.16 0.273333 14.7733 0.58 14.48C0.9 14.1733 1.29333 14.02 1.76 14.02C2.22667 14.02 2.61333 14.1733 2.92 14.48C3.24 14.7867 3.4 15.1733 3.4 15.64C3.4 16.12 3.24 16.5133 2.92 16.82C2.61333 17.1267 2.22667 17.28 1.76 17.28Z" fill="#D0CECC"/>
</svg>

        </div>
  
        <!-- Tooltip content -->
        <div v-if="showTooltip" class="tooltip-content absolute top-full left-1/2 mt-1 w-64 p-4 bg-white border border-gray-200 rounded-md shadow-lg transform -translate-x-1/2">
            <button @click="updateReport(report.id)" class="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600 w-full">Update</button>
            <button @click="deleteReport(report.id)" class="bg-red-500 px-4 py-2 text-white rounded-md w-full hover:bg-red-600 mt-2">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showTooltip = ref(false)
  

  </script>
  
  <style scoped>
  .tooltip-content:before {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
  }
  </style>
  

  <!--
    <template>
    <ProtectedPage>
        <h1>My Dashboard index</h1>

    </ProtectedPage>
  </template>
  
  <script setup>
  import ProtectedPage from '@/components/main/ProtectedPage.vue';
  </script>
  
  -->