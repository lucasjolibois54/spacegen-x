<script setup>
definePageMeta({
  layout: "creatingreports",
});

import { ref } from "vue";
import SidebarVue from "~/components/dashboard/Sidebar.vue";

//STORE & ROUTING
import { useMissionStore } from "~/stores/mission";
import Sidebar from "~/components/dashboard/Sidebar.vue";
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
  // Check if the image is already selected
  if (missionImages.value.includes(img_src)) {
    missionImages.value = missionImages.value.filter((img) => img !== img_src);
  } else {
    // If the number of selected images is less than 7, add the new image to the list
    if (missionImages.value.length < 7) {
      missionImages.value.push(img_src);
    }
  }
};

</script>

<template>
  <ProtectedPage>
<div class="h-full bg-dark-bg flex">
  <!-- Sidebar -->
  <Sidebar />

  <!-- Main Content -->
  <div class="ml-20 md:ml-64 px-8 md:px-4 pb-8 w-full min-h-[calc(100vh-297px)]">
    <section>
  <div class="mt-16">
    <p class="text-dashboard-gray mb-0">Step 2</p>
    <h2 class="text-4xl font-semibold text-dashboard-title mb-0">Select Evidence</h2>
  </div>
</section>
<div class="flex mt-10">
  
  <!-- Left side for all images -->
  <div class="w-1/2 md:mr-2">
    <p class="mb-2 text-gray-400 font-semibold">All Available Images</p>
    <div class="bg-dark-btn py-4 px-4 rounded-xl border-2 border-dark-btn-border">
      <div class="columns-2 space-y-4" v-if="imageData && imageData.photos">
        <div class=""
          v-for="image in imageData.photos"
          :key="image.id"
          @click="toggleImageSelection(image.img_src)"
          :class="{ 'selected-image': missionImages.includes(image.img_src) }"
        >
          <img
            :src="image.img_src"
            alt="Mission Image"
            class="mission-image"
          />
        </div>
      </div>
    </div>
  </div>
  
  <!-- Right side for selected images -->
  <div class="w-1/2 mx-2">
    <p v-if="missionImages && missionImages.length > 0" class="mb-2 text-gray-400 font-semibold">Selected Images</p>
    <div 
      v-if="missionImages && missionImages.length > 0"
      class="selected-image-grid columns-2 space-y-4 bg-dark-btn py-4 px-4 rounded-xl border-2 border-dark-btn-border"
    >
      <div
        v-for="selectedImage in missionImages"
        :key="selectedImage"
      >
        <img class="rounded-lg"
          :src="selectedImage"
          alt="Selected Mission Image"
        />
      </div>
    </div>
  </div>
  
</div>

<NuxtLink to="/reports/missionISSPosition">
  <button
    @click="saveMissionData"
    class="border-dark-btn-border px-6 items-center justify-between border-2 mt-6 bg-blue-500 text-white p-2 rounded-md inline-block"
  >
    Next Step
  </button>
</NuxtLink>




      
  </div>
</div>
</ProtectedPage>
</template>

<style scoped>
/* .image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
} */

/* .selected-image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
} */

.mission-image {
  width: 100%;
  border-radius: 8px;
  cursor: pointer; /* to indicate the image is clickable */
  transition: transform 0.3s ease; /* smooth zoom effect on hover */
}

.mission-image:hover {
  transform: scale(1.03); /* zoom the image a bit on hover */
}

.selected-image {
  border: 3px solid rgb(212, 206, 206); /* a border to indicate the image is selected */
  border-radius: 10px;
}
</style>
