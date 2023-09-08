<script setup>
import { ref, onMounted, reactive } from 'vue';
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

const mapContainer = ref(null);
const issPosition = reactive({ longitude: null, latitude: null });

async function fetchIssPosition() {
  const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544/');
  const data = await response.json();
  issPosition.longitude = data.longitude;
  issPosition.latitude = data.latitude;
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
});
</script>

<template>
    <div>
      <div ref="mapContainer" class="map-container"></div>
      <div v-if="issPosition">
        <div>
          <label for="longitude">Longitude:</label>
          <input id="longitude" type="text" v-model="issPosition.longitude" readonly />
        </div>
        <div>
          <label for="latitude">Latitude:</label>
          <input id="latitude" type="text" v-model="issPosition.latitude" readonly />
        </div>
      </div>
      <!-- <p><strong>Latitude:</strong> {{ issPosition.latitude }}</p> -->
    </div>
  </template>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}
</style>
