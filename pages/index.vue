<template>
    <div class="min-h-screen ">
      <!-- Main container -->
      <div class="relative inline-block">
  
        <!-- Clickable div to toggle tooltip -->
        <div @click="showTooltip = !showTooltip" class="p-4 bg-blue-500 text-white cursor-pointer">
          ...
        </div>
  
        <!-- Tooltip content -->
        <div v-if="showTooltip" class="tooltip-content absolute top-full left-1/2 mt-1 w-64 p-4 bg-white border border-gray-200 rounded-md shadow-lg transform -translate-x-1/2">
          <button @click="handleButtonClick('Button 1')" class="block mb-2 w-full px-4 py-2 bg-green-500 text-white rounded-md">Button 1</button>
          <button @click="handleButtonClick('Button 2')" class="block mb-2 w-full px-4 py-2 bg-red-500 text-white rounded-md">Button 2</button>
          <button @click="handleButtonClick('Button 3')" class="block w-full px-4 py-2 bg-yellow-500 text-white rounded-md">Button 3</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showTooltip = ref(false)
  
  const handleButtonClick = (buttonLabel) => {
    alert(`${buttonLabel} clicked!`)
    showTooltip.value = false
  }
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
  