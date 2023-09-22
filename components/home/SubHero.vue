<template>
    <div class="max-w-5xl mx-auto mt-32 pt-0">
      <h1 class="!text-8xl text-main-text md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Gain Insightful<span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"><br/>Content Highlights</span></h1>
    <div class="grid grid-rows-2 sm:grid-cols-2 gap-4"  data-aos="zoom-y-out">
      <!-- Left Column for clickable divs -->
      <div class="">
        <div 
          @click="setActiveComponent('ComponentA')"
          class="p-4 cursor-pointer border-2 border-dark-btn-border bg-dark-btn rounded-xl text-white my-2 overflow-hidden"
        >
        <h4 class="text-main-text font-bold">
            A look into our top performing astronaut!
        </h4>
        <div class="flex items-start relative">
            <p :class="{'max-h-0': !isActive('ComponentA'), 'max-h-[100vh]': isActive('ComponentA')}" class="text-xsm mt-2 text-gray-400 mr-10 transition-all duration-500 overflow-hidden">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div :class="{'rotate-90': isActive('ComponentA'), 'translate-y-[-1rem]': !isActive('ComponentA'), 'ml-auto': true}" class="-mt-3 bg-dark-btn-border px-2 py-2 rounded-md border-2 border-[#626873] flex items-center justify-center flex-shrink-0 transition-all duration-500 absolute right-0">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071L15.0711 9.34315C15.4616 8.95262 15.4616 8.31946 15.0711 7.92893C14.6805 7.53841 14.0474 7.53841 13.6569 7.92893L8 13.5858L2.34315 7.92893C1.95262 7.53841 1.31946 7.53841 0.928932 7.92893C0.538408 8.31946 0.538408 8.95262 0.928932 9.34315L7.29289 15.7071ZM7 -4.37114e-08L7 15L9 15L9 4.37114e-08L7 -4.37114e-08Z" fill="#626873"/>
              </svg>
            </div>
        </div>
        </div>
        <div 
          @click="setActiveComponent('ComponentB')"
          class="p-4 cursor-pointer border-2 border-dark-btn-border bg-dark-btn rounded-xl text-white my-2 overflow-hidden"
        >
        <h4 class="text-main-text font-bold">
          How our Software help astronauts!
        </h4>
        <div class="flex items-start relative">
            <p :class="{'max-h-0': !isActive('ComponentB'), 'max-h-[100vh]': isActive('ComponentB')}" class="text-xsm mt-2 text-gray-400 mr-6 transition-all duration-500 overflow-hidden">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            </p>
            <div :class="{'rotate-90': isActive('ComponentB'), 'translate-y-[-1rem]': !isActive('ComponentB'), 'ml-auto': true}" class="-mt-3 bg-dark-btn-border px-2 py-2 rounded-md border-2 border-[#626873] flex items-center justify-center flex-shrink-0 transition-all duration-500 absolute right-0">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071L15.0711 9.34315C15.4616 8.95262 15.4616 8.31946 15.0711 7.92893C14.6805 7.53841 14.0474 7.53841 13.6569 7.92893L8 13.5858L2.34315 7.92893C1.95262 7.53841 1.31946 7.53841 0.928932 7.92893C0.538408 8.31946 0.538408 8.95262 0.928932 9.34315L7.29289 15.7071ZM7 -4.37114e-08L7 15L9 15L9 4.37114e-08L7 -4.37114e-08Z" fill="#626873"/>
              </svg>
            </div>
        </div>
        </div>
        <div 
          @click="setActiveComponent('ComponentC')"
          class="p-4 cursor-pointer border-2 border-dark-btn-border bg-dark-btn rounded-xl text-white my-2 overflow-hidden"
        >
        <h4 class="text-main-text font-bold">
          The story of Anabelle Marino.
        </h4>
        <div class="flex items-start relative">
            <p :class="{'max-h-0': !isActive('ComponentC'), 'max-h-[100vh]': isActive('ComponentC')}" class="text-xsm mt-2 text-gray-400 mr-6 transition-all duration-500 overflow-hidden">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            </p>
            <div :class="{'rotate-90': isActive('ComponentC'), 'translate-y-[-1rem]': !isActive('ComponentC'), 'ml-auto': true}" class="-mt-3 bg-dark-btn-border px-2 py-2 rounded-md border-2 border-[#626873] flex items-center justify-center flex-shrink-0 transition-all duration-500 absolute right-0">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071L15.0711 9.34315C15.4616 8.95262 15.4616 8.31946 15.0711 7.92893C14.6805 7.53841 14.0474 7.53841 13.6569 7.92893L8 13.5858L2.34315 7.92893C1.95262 7.53841 1.31946 7.53841 0.928932 7.92893C0.538408 8.31946 0.538408 8.95262 0.928932 9.34315L7.29289 15.7071ZM7 -4.37114e-08L7 15L9 15L9 4.37114e-08L7 -4.37114e-08Z" fill="#626873"/>
              </svg>
            </div>
        </div>
        </div>
        <div 
          @click="setActiveComponent('ComponentD')"
          class="p-4 cursor-pointer border-2 border-dark-btn-border bg-dark-btn rounded-xl text-white my-2 overflow-hidden"
        >
        <h4 class="text-main-text font-bold">
          Learn more about our goals.
        </h4>
        <div class="flex items-start relative">
            <p :class="{'max-h-0': !isActive('ComponentD'), 'max-h-[100vh]': isActive('ComponentD')}" class="text-xsm mt-2 text-gray-400 mr-6 transition-all duration-500 overflow-hidden">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            </p>
            <div :class="{'rotate-90': isActive('ComponentD'), 'translate-y-[-1rem]': !isActive('ComponentD'), 'ml-auto': true}" class="-mt-3 bg-dark-btn-border px-2 py-2 rounded-md border-2 border-[#626873] flex items-center justify-center flex-shrink-0 transition-all duration-500 absolute right-0">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071L15.0711 9.34315C15.4616 8.95262 15.4616 8.31946 15.0711 7.92893C14.6805 7.53841 14.0474 7.53841 13.6569 7.92893L8 13.5858L2.34315 7.92893C1.95262 7.53841 1.31946 7.53841 0.928932 7.92893C0.538408 8.31946 0.538408 8.95262 0.928932 9.34315L7.29289 15.7071ZM7 -4.37114e-08L7 15L9 15L9 4.37114e-08L7 -4.37114e-08Z" fill="#626873"/>
              </svg>
            </div>
        </div>
        </div>
      </div>
  
      <!-- Right Column to display active component -->
      <div class="text-white">
      <div v-if="activeComponent === 'ComponentA'" data-aos="fade-up" data-aos-delay="50">
        <img class="float-animation absolute top-5 left-5 w-3/5" src="https://res.cloudinary.com/debkwdctz/image/upload/v1695382150/Group_12_1_ijjbeb.png" />
        <img class="float-animation absolute bottom-5 -right-20 w-4/5" src="https://res.cloudinary.com/debkwdctz/image/upload/v1695382149/Group_11_ws2vbd.png" />
        <img class="max-h-80 w-full object-cover rounded-lg" src="https://media.discordapp.net/attachments/1068131427910168670/1150722874630475826/lucasjolibois54_ultra_realstic_space_astronauta_space_mission_619a267b-d1cf-4418-931c-c860b6bbfe28.png?width=1038&height=1038"/>
      </div>
      <div v-if="activeComponent === 'ComponentB'" data-aos="fade-up" data-aos-delay="50">
        <img class="float-animation absolute top-5 -right-20 w-4/6" src="https://res.cloudinary.com/debkwdctz/image/upload/v1695384178/Group_14_1_xzcggx.png" />
        <img class="float-animation absolute bottom-5 left-5 w-4/5" src="https://res.cloudinary.com/debkwdctz/image/upload/v1695384177/Group_15_dziinv.png" />
        <img class="max-h-80 w-full object-cover rounded-lg" src="https://media.discordapp.net/attachments/1068131427910168670/1154746534353702952/lucasjolibois54_super_ultra_realistic_space_station_astronaut_s_61181e58-9add-4d64-86cf-934ca8669a95.png?width=1038&height=1038"/>
      </div>
      <div v-if="activeComponent === 'ComponentC'" data-aos="fade-up" data-aos-delay="50">
        <img class="float-animation absolute top-5 left-5 w-3/5" src="https://res.cloudinary.com/debkwdctz/image/upload/v1695384639/Group_14_2_u2thdz.png" />
        <img class="float-animation absolute bottom-5 -right-20 w-4/5" src="https://res.cloudinary.com/debkwdctz/image/upload/v1695384637/Group_16_cdreuh.png" />
        <img class="max-h-80 w-full object-cover rounded-lg" src="https://media.discordapp.net/attachments/1068131427910168670/1154744141113196585/lucasjolibois54_ultra_realstic_space_female_astronaute_space_mi_8465a0b0-92cc-4632-ae7c-a1bc7fee4d8c.png?width=1038&height=1038"/>
      </div>
      <div v-if="activeComponent === 'ComponentD'" data-aos="fade-up" data-aos-delay="50">
        <img class="float-animation absolute top-5 left-5 w-3/5" src="https://res.cloudinary.com/debkwdctz/image/upload/v1695385246/Group_18_1_pmiksz.png" />
        <img class="float-animation absolute bottom-16 -right-10 w-2/6" src="https://res.cloudinary.com/debkwdctz/image/upload/v1695385247/Group_19_1_kghnxd.png" />
        <img class="float-animation absolute bottom-5 -right-1 w-2/6" src="https://res.cloudinary.com/debkwdctz/image/upload/v1695385248/Group_20_2_wwcptr.png" />
        <img class="max-h-80 w-full object-cover rounded-lg" src="https://res.cloudinary.com/debkwdctz/image/upload/v1695383709/Group_14_fanseg.png"/>
      </div></div>
    </div>
</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const activeComponent = ref('ComponentA');
  const setActiveComponent = (component) => {
    activeComponent.value = component;
  };
  
  const isActive = (component) => activeComponent.value === component;
  </script>
  
  <style scoped>
  .rotate-90 {
    transform: rotate(-90deg);
  }

  .float-animation {
  animation: float 3s ease-in-out infinite;
}
  </style>
  