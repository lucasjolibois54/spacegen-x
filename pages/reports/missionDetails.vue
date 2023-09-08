<script setup>
import { ref, onMounted } from 'vue'
import { useMissionStore } from '~/stores/mission'

const missionStore = useMissionStore()

const displayPage = ref(false)

onMounted(() => {
  const user = localStorage.getItem('validUser')
  displayPage.value = user && user !== 'undefined'
})

const saveMissionData = () => {
  missionStore.setMissionData(missionName.value, missionDescription.value, missionDate.value)
}

const missionName = ref('')
const missionDescription = ref('')
const missionDate = ref('')
</script>

<template>
  <div v-if="displayPage">
    <h1 class="mt-20 text-4xl">Mission Details</h1>

    <!-- Mission Name Input -->
    <div class="mt-4">
      <label for="missionName" class="block text-sm font-medium text-gray-700">Mission Name</label>
      <input v-model="missionName" type="text" id="missionName" name="missionName" placeholder="Enter mission name" class="mt-1 p-2 border rounded-md w-full">
    </div>

    <!-- Mission Description Input -->
    <div class="mt-4">
      <label for="missionDescription" class="block text-sm font-medium text-gray-700">Mission Description</label>
      <input v-model="missionDescription" type="text" id="missionDescription" name="missionDescription" placeholder="Enter mission description" class="mt-1 p-2 border rounded-md w-full">
    </div>

    <!-- Mission Date Picker -->
    <div class="mt-4">
      <label for="missionDate" class="block text-sm font-medium text-gray-700">Mission Date</label>
      <input v-model="missionDate" type="date" id="missionDate" name="missionDate" class="mt-1 p-2 border rounded-md">
    </div>

    <button @click="saveMissionData" class="mt-4 bg-blue-500 px-2 py-1 rounded-md text-white">Next Step</button>
  </div>
  <p class="text-red-500" v-else>Protected Route</p>
</template>

<style scoped>
/* Add your specific styles if required */
</style>
