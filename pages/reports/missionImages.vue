<script setup>

const { data: imageData } = useFetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=15')
</script>

<template>
  <div>
    <h2>Mission Images</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum esse voluptatibus minima odio iste commodi cupiditate sed quidem incidunt?</p>

    <div class="image-grid" v-if="imageData && imageData.photos">
      <div v-for="image in imageData.photos" :key="image.id">
        <img :src="image.img_src" alt="Mars Rover Image" class="mission-image"/>
      </div>
    </div>
  </div>
  <NuxtLink to="/reports/missionISSPosition"><button class="mt-4 bg-blue-500 px-2 py-1 rounded-md text-white">Next Step</button></NuxtLink>
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
}
</style>
