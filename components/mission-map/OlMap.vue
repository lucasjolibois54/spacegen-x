<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';

//STORE & ROUTING
import { useMissionStore } from '~/stores/mission'

const missionStore = useMissionStore()

const displayPage = ref(false)

onMounted(() => {
  const user = localStorage.getItem('validUser')
  displayPage.value = user && user !== 'undefined'
})

const saveMissionData = () => {
  missionStore.updateMissionCoordinates(missionLongitude.value, missionLatitude.value);
}

const missionLongitude = ref('')
const missionLatitude = ref('')

// MAP
const mapContainer = ref(null);
const issPosition = reactive({ longitude: null, latitude: null });

let intervalId;

async function fetchIssPosition() {
  const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544/');
  const data = await response.json();
  issPosition.longitude = data.longitude;
  issPosition.latitude = data.latitude;
  missionLongitude.value = data.longitude;
  missionLatitude.value = data.latitude;
  
  return [data.longitude, data.latitude];
}

onMounted(async () => {
  const [longitude, latitude] = await fetchIssPosition();
  const coordinates = fromLonLat([longitude, latitude]);

  // Create feature for pinpoint
  const pinpointFeature = new Feature({
    geometry: new Point(coordinates),
  });

  // Style the pinpoint
  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 1], 
      src: 'https://openlayers.org/en/latest/examples/data/icon.png',
    }),
  });

  pinpointFeature.setStyle(iconStyle);

  // Create vector source and vector layer for the pinpoint
  const vectorSource = new VectorSource({
    features: [pinpointFeature],
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });

  const map = new Map({
    target: mapContainer.value,
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      vectorLayer,
    ],
    view: new View({
      center: coordinates,
      zoom: 4,
    }),
  });
  
  // Set the interval to update the ISS position every minute
  intervalId = setInterval(async () => {
    await fetchIssPosition();
    const newCoordinates = fromLonLat([issPosition.longitude, issPosition.latitude]);
    pinpointFeature.setGeometry(new Point(newCoordinates));
    map.getView().setCenter(newCoordinates);
  }, 60000); // 60000 milliseconds = 1 minute
});

// Clear the interval when component is unmounted
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="py-3 px-3 bg-dark-btn border-2 border-dark-btn-border rounded-md mt-10" v-if="displayPage"> 
    <div ref="mapContainer" class="map-container"></div>
    <div v-if="issPosition">
      <div class="mt-3">
        <label for="missionLongitude">Longitude: </label>
        <input class="bg-transparent" id="missionLongitude" type="text" v-model="missionLongitude" readonly />
      </div>
      <div>
        <label for="missionLatitude">Latitude: </label>
        <input class="bg-transparent" id="missionLatitude" type="text" v-model="missionLatitude" readonly />
      </div>
      <NuxtLink to="/reports/finalizeReport"
      class="border-dark-btn-border px-6 items-center justify-between border-2 mt-6 bg-blue-500 text-white p-2 rounded-md inline-block">
      <button @click="saveMissionData">Next Step</button></NuxtLink>
    </div>
  </div>
</template>
  
<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}
</style>
