<script setup>
import { useMissionStore } from '~/stores/mission.js';

const missionStore = useMissionStore();
</script>

<template>
  <div>
    <h1>{{ missionStore.missionName }}</h1>
    <p>{{ missionStore.missionDescription }}</p>
    <p>Date: {{ missionStore.missionDate }}</p>
    <p>Longitude: {{ missionStore.missionLongitude }}</p>
    <p>Latitude: {{ missionStore.missionLatitude }}</p>

    <div>
      <h2>Selected Images:</h2>
      <div v-if="missionStore.missionImages.length">
        <img v-for="(imgSrc, index) in missionStore.missionImages" :key="index" :src="imgSrc" alt="Mission Image" />
      </div>
      <p v-else>No images selected.</p>
    </div>
  </div>
</template>
