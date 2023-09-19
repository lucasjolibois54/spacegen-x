<template>
    <section class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
            <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                <defs >
                    <!-- Gradient for the circles -->
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="circle-gradient">
                        <stop stopColor="#F5F5F5" offset="0%" />
                        <stop stopColor="#E0E0E0" offset="100%" />
                    </linearGradient>

                    <!-- Inner shadow filter -->
                    <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="inner-shadow">
                        <feComponentTransfer in="SourceAlpha">
                            <feFuncA type="table" tableValues="0 0 1 0" />
                        </feComponentTransfer>
                        <feGaussianBlur stdDeviation="3" />
                        <feOffset dx="2" dy="2" result="offsetblur" />
                        <feFlood floodColor="black" result="color" />
                        <feComposite in2="offsetblur" operator="in" />
                        <feComposite in2="SourceAlpha" operator="in" />
                        <feMerge>
                            <feMergeNode in="SourceGraphic" />
                            <feMergeNode />
                        </feMerge>
                    </filter>
                </defs>
                <circle cx="1232" cy="128" r="128" fill="url(#circle-gradient)" filter="url(#inner-shadow)" />
                <circle cx="155" cy="443" r="64" fill="url(#circle-gradient)" filter="url(#inner-shadow)" />
            </svg>
        </div>


      <!-- Hero content -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Section header -->
        <div class="text-center pb-12 md:pb-16 max-w-4xl mx-auto">
          <h1 class="!text-8xl text-gray-100 md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Space Insights on <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Demand</span></h1>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
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
        <div class="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
          <!-- Your Image and SVG components go here -->
          <img :src="VideoThumb" alt="Modal video thumbnail" class="w-2/3 rounded shadow-lg cursor-pointer" @click="openModal = true">
          <button class="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" @click="openModal = true">
            <!-- Your SVG goes here -->
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
    /* Tailwind styles (if any) */
  </style>
  