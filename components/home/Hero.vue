<template>
  <!-- <iframe src='https://my.spline.design/galaxy-882b20eb3a0b0cab0c6ebd90e1795de0/' class="absolute w-screen h-screen left-0 right-0 -z-10 top-0" frameborder='0' width='100%' height='100%'></iframe> -->
  <!-- <iframe src='https://my.spline.design/galaxy-8a398d032ec920c41dadcc5ed039c816/' frameborder='0' class="absolute w-screen h-screen left-0 right-0 -z-10 top-0" ></iframe> -->
  
  <iframe src='https://my.spline.design/interactivespaceshipscene-754e43e86a5d4256974e4e33bd78ec44/' frameborder='0' class="absolute top-0 left-0 w-full h-full pointer-events-auto -z-10"></iframe>

    <section class="relative">
        <!-- <div class="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
            <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
    <circle cx="1232" cy="128" r="128" fill="#FFFFFF" />
    <circle cx="155" cy="443" r="64" fill="#FFFFFF" />
</svg>

        </div> -->
      <!-- Hero content -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Section header -->
        <div class="text-center pb-12 md:pb-16 max-w-4xl mx-auto">
          <h1 class="!text-8xl text-main-text md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Space Insights on <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Demand</span></h1>
          <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto" data-aos="zoom-y-out" data-aos-delay="150">Discover deep insights about space with just a few clicks. Our platform is optimized for all devices, ensuring you have a seamless experience every time.</p>
          <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
            <div class="flex gap-4">
            <!-- Save button -->
            <NuxtLink
              to="/login"
              class="border-dark-btn-border px-6 items-center justify-between border-2 bg-blue-500 text-white p-2 rounded-md inline-block"
            >
              <button
              >
                Try For Free
              </button>
            </NuxtLink>
            <!-- Save as draft button -->
            <NuxtLink
              to="/login"
              class="border-dark-btn-border px-10 items-center justify-between border-2 bg-dark-btn text-white p-2 rounded-md inline-block"
            >
              <button
              >
                Login
              </button>
            </NuxtLink>
          </div>
          </div>
        </div>
  
        <!-- Hero image and modal trigger -->
        <div class="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="50">
          <img :src="VideoThumb" alt="Modal video thumbnail" class="w-2/3 rounded shadow-lg cursor-pointer" @click="openModal = true">
          <button class="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" @click="openModal = true">
            <span class="ml-3">Watch the full video (2 min)</span>
          </button>
        </div>
        
        <!-- Modal -->
        <div v-if="openModal" class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div class="bg-white rounded-lg overflow-hidden shadow-xl">
            <video ref="videoRef" :width="videoWidth" :height="videoHeight" controls autoplay>
              <source :src="video" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button class="absolute top-2 right-2 text-white bg-black bg-opacity-70 rounded-full p-2" @click="openModal = false">X</button>
          </div>
        </div>
      </div>
    </section>
    <!-- <iframe src='https://my.spline.design/planetcopy-f7fc69dde6ac70bcbb3a574c2a782d9d/' frameborder='0' width='100%' height='500px'></iframe>     -->
    </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const VideoThumb = 'https://res.cloudinary.com/debkwdctz/image/upload/v1695109575/image_133_hufn0s.png'
  const videoWidth = 1920
  const videoHeight = 1080
  const video = '/videos/video.mp4'
  const openModal = ref(false)
  </script>
  
  <style scoped>
  </style>
  