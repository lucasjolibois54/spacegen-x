<script setup>
import { ref, onMounted } from 'vue'

const displayPage = ref(false)  // A reactive property that decides whether to display the page

onMounted(() => {
  const user = localStorage.getItem('validUser')

  // If the key exists and its value isn't 'undefined', display the content
  displayPage.value = user && user !== 'undefined' // sets the value of displayPage based on the condition provided. If user is not undefined, displayPage will be true
})
</script>

<template>
  <div v-if="displayPage">
    <h2 class="mt-4">Dashboard</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum esse voluptatibus minima odio iste commodi cupiditate sed quidem incidunt?</p>

    <div>
        <div class="flex space-x-5">
        <p>report placeholder 1</p>
        <button class="bg-blue-500 px-2 py-1 rounded-md">Update</button>
        <button class="bg-red-500 px-2 py-1 rounded-md">Delete</button>
        </div>
    </div>
    <div>
        <button class="bg-blue-500 px-2 py-1 rounded-md">Create Report</button>
    </div>
  </div>
  <p class="text-red-500" v-else>Protected Route</p>
</template>

<style scoped>

</style>
