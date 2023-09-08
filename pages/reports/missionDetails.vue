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
        <h1 class="mt-20 text-4xl">Mission Details</h1>
    </div>
<p class="text-red-500" v-else>Protected Route</p>
</template>

<style scoped>

</style>