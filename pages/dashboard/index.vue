<script setup>
import { ref, onMounted } from 'vue'

const displayPage = ref(false)  // A reactive property that decides whether to display the page

onMounted(() => {
  const user = localStorage.getItem('validUser')

  // If the key exists and its value isn't 'undefined', display the content
  displayPage.value = user && user !== 'undefined'
})
</script>

<template>
  <div v-if="displayPage">
    <h2 class="mt-4">Dashboard</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum esse voluptatibus minima odio iste commodi cupiditate sed quidem incidunt?</p>
  </div>
  <p v-else>Protected Route</p>
</template>

<style scoped>

</style>
