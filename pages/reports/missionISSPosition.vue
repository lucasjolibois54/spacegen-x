<script setup>
definePageMeta({
  layout: "creatingreports",
});

import OlMap from '@/components/mission-map/OlMap.vue';
import Sidebar from '~/components/dashboard/Sidebar.vue';
</script>
  <template>
    <ProtectedPage>
  <div class="h-full bg-dark-bg flex text-white">
    <!-- Sidebar -->
    <Sidebar/>
  
    <!-- Main Content -->
    <div class="ml-20 md:ml-64 px-8 md:px-4 pb-8 w-full min-h-[calc(100vh-297px)]">
        <!-- <h2 class="text-3xl font-semibold text-dashboard-title mt-12 mb-6">All My Space Reports</h2> -->
        
        <section>
        <div class="mt-16">
                <p class="text-dashboard-gray mb-0">Step 3</p>
                <h2 class="text-4xl font-semibold text-dashboard-title mb-0">ISS Position</h2>
            </div>
        </section>
  
        <div>
      <!-- <h1>My OpenLayers Map</h1> -->
      <OlMap />
    </div>
  
  
        
    </div>
  </div>
  </ProtectedPage>
  </template>

  