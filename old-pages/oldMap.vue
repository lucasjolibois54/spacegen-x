<template>
    <div ref="mapContainer" class="map-container"></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
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
  
  async function fetchIssPosition() {
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544/');
    const data = await response.json();
    return [data.longitude, data.latitude];
  }
  
  onMounted(async () => {
    const [longitude, latitude] = await fetchIssPosition();
    const coordinates = fromLonLat([longitude, latitude]);
  
    // Create pinpoint feature
    const pinpointFeature = new Feature({
      geometry: new Point(coordinates),
    });
  
    // Pinpoint Style
    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1], // Anchor at the bottom-middle of the icon
        src: 'https://openlayers.org/en/latest/examples/data/icon.png', //icon
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
        vectorLayer, // Add the vector layer to the map's layers
      ],
      view: new View({
        center: coordinates,
        zoom: 4, // Adjust the zoom level as needed
      }),
    });
  });
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 400px;
  }
  </style>
  