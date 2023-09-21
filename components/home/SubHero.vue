<template>
    <div class="max-w-5xl mx-auto mt-32">
    <div class="grid grid-cols-2 gap-4">
      <!-- Left Column for clickable divs -->
      <div class="">
        <div
          @click="setActiveComponent('ComponentA')"
          class="p-4 cursor-pointer border-2 border-main-text rounded-xl text-white my-2"
        >
          Click Me A
        </div>
        <div
          @click="setActiveComponent('ComponentB')"
          class="p-4 cursor-pointer border-2 border-main-text rounded-xl text-white my-2"
        >
          Click Me B
        </div>
        <div
          @click="setActiveComponent('ComponentC')"
          class="p-4 cursor-pointer border-2 border-main-text rounded-xl text-white my-2"
        >
          Click Me C
        </div>
        <div
          @click="setActiveComponent('ComponentD')"
          class="p-4 cursor-pointer border-2 border-main-text rounded-xl text-white my-2"
        >
          Click Me D
        </div>
      </div>
  
      <!-- Right Column to display active component -->
      <div class="text-white">
      <div v-if="activeComponent === 'ComponentA'">
        <p>Content of Component A</p>
      </div>
      <div v-if="activeComponent === 'ComponentB'">
        <p>Content of Component B</p>
      </div>
      <div v-if="activeComponent === 'ComponentC'">
        <p>Content of Component C</p>
      </div>
      <div v-if="activeComponent === 'ComponentD'">
        <p>Content of Component D</p>
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
  </script>
  