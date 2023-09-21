<template>
  <div>
    <header class="shadow-sm bg-dashboard-nav hidden md:block">
      <div class="container mx-auto">
        <nav
          class=" pl-20 md:pl-64 pt-5 md:ml-7 px-8 flex justify-between"
        >
        <div class="relative flex items-center">
          <Search/>
          </div>
          
          <ul class="flex space-x-3">
            <li class="!text-white">
              <NuxtLink to="/reports/missionDetails"
                ><button
                  class="border-dark-btn-border flex items-center justify-between border-2 w-full bg-blue-500 text-white p-2 rounded-md"
                >
                  <span class="pr-3">Create Report</span>
                  <span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_24_2805)">
                        <path
                          d="M12.7249 5.72217H8.27381V1.27475C8.27381 0.570768 7.70582 0 7.00184 0C6.29786 0 5.73018 0.570768 5.73018 1.27505V5.72525H1.2769C0.572917 5.72525 0.000607672 6.29602 0.000916028 7.00031C0.000607672 7.35214 0.14276 7.67468 0.373102 7.90503C0.603753 8.13599 0.921977 8.28184 1.2735 8.28184H5.73018V12.7259C5.73018 13.078 5.86986 13.3969 6.10052 13.6269C6.33117 13.8575 6.64846 14.0003 7.00061 14.0003C7.70428 14.0003 8.27381 13.4295 8.27381 12.7259V8.28153H12.7249C13.4289 8.28153 13.9997 7.70583 13.9994 7.00185C13.9991 6.29818 13.4283 5.72217 12.7249 5.72217Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_24_2805">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span></button
              ></NuxtLink>
            </li>
            <li v-if="isLoggedIn" class="!text-white">
              <NuxtLink to="/login">
                <button
                  @click="handleLogout"
                  class="border-dark-btn-border flex items-center justify-between border-2 w-full bg-dark-btn text-white p-2 rounded-md"
                >
                  <span class="pr-3">Logout</span>
                  <span>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.96874 15.9374H1.06251V1.06247H7.96874C8.262 1.06247 8.49998 0.824452 8.49998 0.531235C8.49998 0.238018 8.26196 0 7.96874 0H0.531235C0.238018 0 0 0.237974 0 0.531235V16.4687C0 16.7619 0.238018 16.9999 0.531235 16.9999H7.9687C8.26196 16.9999 8.49993 16.7619 8.49993 16.4687C8.49998 16.1754 8.26196 15.9374 7.96874 15.9374Z"
                        fill="#C4C4C5"
                      />
                      <path
                        d="M16.6255 8.1288L12.9599 4.4106C12.7522 4.20076 12.4159 4.20129 12.2087 4.4106C12.001 4.61992 12.001 4.9599 12.2087 5.16921L14.9712 7.97155H4.03123C3.73797 7.97155 3.5 8.21169 3.5 8.50813C3.5 8.80457 3.73802 9.04471 4.03123 9.04471H14.9712L12.2087 11.8471C12.001 12.0569 12.001 12.3963 12.2087 12.6057C12.4164 12.8155 12.7527 12.8155 12.9599 12.6057L16.625 8.88746C16.8301 8.68079 16.8322 8.33494 16.6255 8.1288Z"
                        fill="#C4C4C5"
                      />
                    </svg>
                  </span></button
              ></NuxtLink>
            </li>
            <li v-else>
              <NuxtLink to="/login" class="border-dark-btn-border flex items-center justify-between border-2 w-full bg-dark-btn text-white p-2 rounded-md">Login</NuxtLink>
            </li>
          </ul>
        </nav>
        <hr class="h-px mt-2 mb-8 border-dark-btn-border border-1" />
        <div class="container mx-auto">
          <section>
            <div class="ml-20 md:ml-64 px-8 pt-8 w-full">
              <p class="text-dashboard-gray mb-0">Overview</p>
              <h2 class="text-5xl font-semibold text-dashboard-title mb-0">
                Dashboard
              </h2>
            </div>
          </section>

          <section class="ml-20 md:ml-64 px-8 pt-8 w-full">
            <div class="text-sm font-medium text-center text-gray-500">
              <ul class="flex flex-wrap -mb-px">
                <li class="mr-2">
                  <NuxtLink
                    to="/dashboard"
                    class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                    >All Reports</NuxtLink
                  >
                </li>
                <li class="mr-2">
                  <NuxtLink
                    to="/dashboard/savedReports"
                    class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                    >Saved Reports</NuxtLink
                  >
                </li>
                <li class="mr-2">
                  <NuxtLink
                    to="/dashboard/draftedReports"
                    class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                    >My Drafts</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Search from "~/components/main/Search.vue";
import Notifications from "~/components/main/Notifications.vue";
const isLoggedIn = ref(false); // Track if the user is logged in

// Check if validUser exists in localStorage on component mounted
onMounted(() => {
  isLoggedIn.value = !!localStorage.getItem("validUser");
});

const handleLogout = () => {
  localStorage.removeItem("validUser");
  isLoggedIn.value = false;
};
</script>

<style scoped>
.router-link-exact-active {
  color: white;
}
</style>
