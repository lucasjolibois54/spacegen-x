<script setup>
definePageMeta({
  layout: "creatingreports",
});

import { ref } from "vue";

//STORE & ROUTING
import { useMissionStore } from "~/stores/mission";

const missionStore = useMissionStore();

const displayPage = ref(false);

onMounted(() => {
  missionImages.value = [...missionStore.missionImages];

  const user = localStorage.getItem("validUser");
  displayPage.value = user && user !== "undefined";
});

const saveMissionData = () => {
  missionStore.updateMissionImages(missionImages.value);
};

const { data: imageData } = useFetch(
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=15"
);
const missionImages = ref([]); // ref to hold the selected images

const toggleImageSelection = (img_src) => {
  if (missionImages.value.includes(img_src)) {
    missionImages.value = missionImages.value.filter((img) => img !== img_src);
  } else {
    missionImages.value.push(img_src);
  }
};
</script>

<template>
  <ProtectedPage>
<div class="h-full bg-dark-bg flex">
  <!-- Sidebar -->
  <div class="bg-dashboard-nav border-r-2 border-dark-btn-border w-20 md:w-64 min-h-screen fixed left-0 top-0 flex flex-col justify-between p-2 md:p-4">
      
      <!-- Top Content -->
      <div class="flex flex-col flex-grow">
          <NuxtLink to="/">
              <h3 class="text-center text-3xl mt-2 hidden md:block text-dashboard-title">SpaceGen X</h3>
          </NuxtLink>
          <div class="mt-20">
              <div class="text-white text-left mt-4 px-2 py-2 rounded-md flex md:px-4 md:py-2">
                  <!-- Icon for smaller screens -->
                  <span class="md:hidden">📄</span>
                  <!-- Text for larger screens -->
                  <span class="hidden md:block">Menu</span>
              </div>
              <NuxtLink to="/dashboard" class="text-dark-btn-text border-2 border-dark-btn-border text-center mt-4 bg-dark-btn px-2 py-2 rounded-md flex md:px-4 md:py-2"> <!-- items-center justify-center-->
                  <!-- Icon for smaller screens -->
                  <span class="md:hidden">📄</span>
                  <!-- Text for larger screens -->
                  <span class="hidden md:block ml-3">Dashboard</span>
              </NuxtLink>
              <NuxtLink to="/dashboard/publicReports" class="text-dark-btn-text border-2 border-dark-btn-border text-center mt-1 bg-dark-btn px-2 py-2 rounded-md flex md:px-4 md:py-2"> <!-- items-center justify-center-->
                  <!-- Icon for smaller screens -->
                  <span class="md:hidden">📄</span>
                  <!-- Text for larger screens -->
                  <span class="hidden md:block ml-3">Public Reports</span>
              </NuxtLink>
          </div>
      </div>
      
      <!-- Logout at the bottom-->
      <LogoutDashboard class="mb-1"/>

      <!-- Profile at the bottom -->
      <div class="mb-4 mt-1 border-2 border-dark-btn-border rounded-md pr-4 py-3 bg-dark-btn">
          <div class="flex">
              <!-- <img :src="currentUser.avatar" alt="User Avatar" class="rounded-full w-10 h-10 mx-auto border-2 border-dark-btn-text md:w-16 md:h-16"> -->
              <div class="flex flex-col text-left">
                  <!-- <h3 class="text-dark-btn-text text-center mt-2 hidden md:block">{{ currentUser.first_name }} {{ currentUser.last_name }}</h3> -->
                  <h3 class="text-dark-btn-text text-center hidden md:block">View Profile</h3>
              </div>
          </div>
      </div>
  </div>

  <!-- Main Content -->
  <div class="ml-20 md:ml-64 px-8 md:px-4 pb-8 w-full min-h-[calc(100vh-297px)]">
      <!-- <h2 class="text-3xl font-semibold text-dashboard-title mt-12 mb-6">All My Space Reports</h2> -->
      <section>
        <div class="mt-16">
                <p class="text-dashboard-gray mb-0">Step 2</p>
                <h2 class="text-5xl font-semibold text-dashboard-title mb-0">Select Evidence</h2>
            </div>
        </section>


      <div class="flex mt-10">
  <!-- Left side for all images -->
  <div class="w-1/2 mx-2">
    <div class="image-grid" v-if="imageData && imageData.photos">
      <div
        v-for="image in imageData.photos"
        :key="image.id"
        @click="toggleImageSelection(image.img_src)"
        :class="{ 'selected-image': missionImages.includes(image.img_src) }"
      >
        <img
          :src="image.img_src"
          alt="Mars Rover Image"
          class="mission-image"
        />
      </div>
    </div>
  </div>
  
  <!-- Right side for selected images -->
  <div class="w-1/2 mx-2">
    <div class="selected-image-grid">
      <div
        v-for="selectedImage in missionImages"
        :key="selectedImage"
      >
        <img
          :src="selectedImage"
          alt="Selected Mars Rover Image"
        />
      </div>
    </div>
  </div>
</div>
  <NuxtLink to="/reports/missionISSPosition"
    ><button
      @click="saveMissionData"
      class="mt-4 bg-blue-500 px-2 py-1 rounded-md text-white"
    >
      Next Step
    </button></NuxtLink
  >


      
  </div>
</div>
</ProtectedPage>
</template>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.selected-image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.mission-image {
  width: 100%;
  border-radius: 8px;
  cursor: pointer; /* to indicate the image is clickable */
  transition: transform 0.3s ease; /* smooth zoom effect on hover */
}

.mission-image:hover {
  transform: scale(1.1); /* zoom the image a bit on hover */
}

.selected-image {
  border: 3px solid blue; /* a border to indicate the image is selected */
}
</style>
