<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink to="/">Nuxt</NuxtLink>
          <ul class="flex space-x-3">
            <li class="mt-2"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="mt-2"><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
            <li v-if="isLoggedIn" class="btn !text-white"><NuxtLink to="/login"><button @click="handleLogout">Logout</button></NuxtLink></li>
            <li v-else class="btn !text-white"><NuxtLink to="/login">Login</NuxtLink></li>
          </ul>
        </nav>
      </header>
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const isLoggedIn = ref(false); // Track if the user is logged in
  
  // Check if validUser exists in localStorage on component mounted
  onMounted(() => {
    isLoggedIn.value = !!localStorage.getItem('validUser');
  });
  
  const handleLogout = () => {
    localStorage.removeItem('validUser');
    isLoggedIn.value = false;
  };
  </script>
  
  <style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
  </style>




<!--


<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink to="/">Nuxt</NuxtLink>
          <ul class="flex space-x-3">
            <li class="mt-2"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="mt-2"><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
            <li class=" btn !text-white"><NuxtLink to="/login">Login</NuxtLink></li>
          </ul>
        </nav>
      </header>
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </div>
  </template>
  
  <style scoped>
    .router-link-exact-active {
      color: #12b488;
    }
  </style>-->