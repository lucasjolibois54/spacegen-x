<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink to="/">Nuxt</NuxtLink>
          <ul class="flex space-x-3">
            <li class="mt-2"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="mt-2"><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
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
  </style>