<script setup>
import { ref } from 'vue';


//STORE & ROUTING
import { useMissionStore } from '~/stores/mission'

const missionStore = useMissionStore()

const displayPage = ref(false)

onMounted(() => {
  const user = localStorage.getItem('validUser')
  displayPage.value = user && user !== 'undefined'
})


const saveMissionData = () => {
  missionStore.updateMissionImages(missionImages.value);
}


const { data: imageData } = useFetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=15');
const missionImages = ref([]); // ref to hold the selected images

const toggleImageSelection = (img_src) => {
  if (missionImages.value.includes(img_src)) {
    missionImages.value = missionImages.value.filter(img => img !== img_src);
  } else {
    missionImages.value.push(img_src);
  }
};
</script>

<template>
  <div>
    <h2>Mission Images</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum esse voluptatibus minima odio iste commodi cupiditate sed quidem incidunt?</p>

    <div class="image-grid" v-if="imageData && imageData.photos">
      <div v-for="image in imageData.photos" :key="image.id" @click="toggleImageSelection(image.img_src)" :class="{ 'selected-image': missionImages.includes(image.img_src) }">
        <img :src="image.img_src" alt="Mars Rover Image" class="mission-image" />
      </div>
    </div>
  </div>
  <NuxtLink to="/reports/missionISSPosition"><button @click="saveMissionData" class="mt-4 bg-blue-500 px-2 py-1 rounded-md text-white">Next Step</button></NuxtLink>
</template>

<style scoped>
.image-grid {
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
