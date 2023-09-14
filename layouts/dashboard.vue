<template>
  <div>
    <header class="shadow-sm bg-dashboard-nav ">
      <div class="container mx-auto">
        <nav
          class=" pl-20 md:pl-64 pt-5 md:ml-7 px-8 flex justify-between"
        >
        <div class="relative flex items-center">
          <Search/>
            <!-- notification -->
            <div class="ml-4 bg-[#606060]/70 p-2 rounded-md text-[#CECFC2]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_24_2912)">
                        <path d="M18.6309 16.3482C16.5055 15.3884 16.4247 11.2684 16.4231 11.1645V8.40047C16.4231 5.74027 14.7976 3.45278 12.4876 2.4788C12.4826 1.11111 11.3687 0 9.99999 0C8.63127 0 7.51737 1.11118 7.51237 2.47873C5.2025 3.45272 3.57691 5.74021 3.57691 8.40041V11.1644C3.57541 11.2684 3.49449 15.3883 1.36903 16.3481C1.12691 16.4575 0.993834 16.7211 1.04981 16.9808C1.10573 17.2406 1.33544 17.4261 1.60116 17.4261H6.9894C7.09986 18.0338 7.38718 18.5991 7.82662 19.0569C8.41028 19.665 9.18215 19.9999 9.99989 19.9999C10.8177 19.9999 11.5896 19.665 12.1732 19.0569C12.6127 18.599 12.9 18.0337 13.0104 17.4261H18.3986C18.6644 17.4261 18.894 17.2406 18.95 16.9808C19.0061 16.7211 18.873 16.4575 18.6309 16.3482ZM15.8311 14.3745C16.0546 15.0519 16.371 15.7322 16.8196 16.2982H3.18034C3.6289 15.7322 3.94528 15.052 4.16871 14.3745H15.8311ZM9.99999 1.12794C10.6191 1.12794 11.1426 1.54396 11.3064 2.11102C10.8844 2.0235 10.4475 1.97736 9.99999 1.97736C9.55251 1.97736 9.11558 2.02347 8.69362 2.11102C8.85744 1.54399 9.38091 1.12794 9.99999 1.12794ZM4.70485 11.1679V8.40037C4.70485 5.48066 7.08022 3.1053 9.99999 3.1053C12.9198 3.1053 15.2951 5.48066 15.2951 8.40037V11.1725C15.2959 11.2573 15.3091 12.1489 15.5338 13.2465H4.46606C4.6909 12.1479 4.70417 11.2547 4.70485 11.1679ZM9.99999 18.8721C9.13917 18.8721 8.3879 18.2514 8.14675 17.4261H11.8532C11.612 18.2514 10.8609 18.8721 9.99999 18.8721Z" fill="#CECFC2"/>
                        <path d="M10.0001 3.89648C7.57358 3.89648 5.59949 5.87051 5.59949 8.29695C5.59949 8.60842 5.852 8.86094 6.16348 8.86094C6.47495 8.86094 6.72746 8.60842 6.72746 8.29695C6.72746 6.49247 8.19554 5.02443 10.0001 5.02443C10.3116 5.02443 10.5641 4.77191 10.5641 4.46044C10.564 4.14894 10.3115 3.89648 10.0001 3.89648Z" fill="#CECFC2"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_24_2912">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
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

            <li class="!text-white">
              <button
                @click="handleLogout"
                class="border-dark-btn-border flex items-center justify-between border-2 w-full bg-dark-btn text-white p-2 rounded-md"
              >
                <span class="pr-3">Export</span>
                <span>
                  <svg
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_24_3006)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.0566 7.14844H8.97367L7.50073 9.32373L6.02633 7.14844H3.94344L6.44027 10.8867L3.62311 15.0439H7.50073V13.6318H6.72843L7.50073 12.4746L9.21502 15.0439H11.3769L8.55973 10.8867L11.0566 7.14844ZM15 18H0V0H11.3593L15 3.87158V18ZM13.7801 16.708V4.74023H10.4627V1.14697H1.23306V16.708H13.7801Z"
                        fill="#C4C4C5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_24_3006">
                        <rect width="15" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>
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
