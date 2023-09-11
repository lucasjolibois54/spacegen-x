<template>
  <div>
    <header class="shadow-sm bg-dashboard-nav ">
      <div class="container mx-auto">
        <nav
          class=" pl-20 md:pl-64 pt-5 md:ml-7 px-8 flex justify-between"
        >
        <div class="relative flex items-center">
            <!-- Input field -->
            <input
              type="text"
              placeholder="Search for a report..."
              class="pl-10 pr-4 py-2 rounded-md bg-[#606060]/70 placeholder-[#CECFC2] text-[#CECFC2]"
            />

            <!-- Search Icon-->
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#CECFC2]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6905 17.6691L12.602 10.5825C13.4147 9.33113 13.7981 7.83626 13.6852 6.3357C13.5623 4.7034 12.8562 3.16624 11.697 2.00728C10.4016 0.712265 8.68128 0 6.8503 0C6.84146 0 6.83257 3.98269e-05 6.82369 3.98269e-05C4.98295 0.00700954 3.25751 0.733174 1.96521 2.04479C-0.676342 4.72578 -0.651762 9.06456 2.01999 11.7168C3.17974 12.868 4.7152 13.568 6.34349 13.6878C7.84055 13.7978 9.33163 13.4143 10.5799 12.6041L17.6684 19.6905C17.8747 19.8968 18.1458 20 18.4168 20C18.6879 20 18.959 19.8968 19.1654 19.6906L19.6905 19.1656C20.1032 18.753 20.1032 18.0817 19.6905 17.6691ZM19.1271 18.6023L18.6019 19.1273C18.4998 19.2294 18.3338 19.2293 18.2318 19.1273L10.9094 11.8069C10.8323 11.7298 10.7302 11.6903 10.6276 11.6903C10.5462 11.6903 10.4643 11.7151 10.3942 11.7659C7.98253 13.5098 4.69672 13.2514 2.58134 11.1515C0.220085 8.80756 0.198333 4.97307 2.53282 2.60376C3.67496 1.44452 5.19991 0.802711 6.82668 0.796578C6.83461 0.796578 6.8423 0.796538 6.85022 0.796538C8.46831 0.796538 9.98883 1.42608 11.1336 2.57051C13.2493 4.68564 13.5142 7.97705 11.7636 10.3969C11.6489 10.5553 11.6663 10.7736 11.8047 10.9119L19.1271 18.2323C19.2291 18.3343 19.2291 18.5003 19.1271 18.6023Z" fill="#CECFC2"/>
                <path d="M10.3405 3.36313C8.41562 1.43885 5.28366 1.43885 3.35879 3.36313C2.42635 4.29532 1.91284 5.53473 1.91284 6.85304C1.91284 8.17139 2.42635 9.41077 3.35879 10.343C4.29123 11.2751 5.53098 11.7886 6.84964 11.7886C8.16835 11.7886 9.40809 11.2751 10.3405 10.343C12.2653 8.41864 12.2653 5.28749 10.3405 3.36313ZM9.77711 9.77972C8.99514 10.5614 7.95549 10.992 6.84964 10.992C5.74383 10.992 4.70415 10.5614 3.92221 9.77968C3.14028 8.99796 2.70963 7.95856 2.70963 6.85304C2.70963 5.74753 3.14024 4.70816 3.92221 3.9264C4.7294 3.11939 5.78932 2.71606 6.84964 2.71606C7.90972 2.71606 8.97008 3.11963 9.77707 3.9264C11.3913 5.54019 11.3913 8.16598 9.77711 9.77972Z" fill="#CECFC2"/>
                <path d="M4.41976 6.13071C4.48225 5.91978 4.36194 5.69815 4.15105 5.63566C3.94021 5.57317 3.71853 5.69345 3.65604 5.90433C3.30836 7.07759 3.62944 8.34349 4.494 9.20805C4.57174 9.28579 4.6737 9.3247 4.77562 9.3247C4.87754 9.3247 4.97945 9.28579 5.05723 9.20809C5.21276 9.05253 5.21276 8.80034 5.05723 8.64482C4.39941 7.987 4.15511 7.02362 4.41976 6.13071Z" fill="#CECFC2"/>
                <path d="M5.63278 3.75212C5.20472 3.91983 4.82162 4.17086 4.49421 4.49827C4.33868 4.65384 4.33868 4.90602 4.49421 5.06154C4.57195 5.13929 4.67391 5.1782 4.77582 5.1782C4.87774 5.1782 4.97966 5.13929 5.0574 5.06154C5.30672 4.81223 5.59805 4.62118 5.92328 4.49381C6.12811 4.41356 6.22907 4.18252 6.14886 3.97769C6.06864 3.77287 5.83757 3.67198 5.63278 3.75212Z" fill="#CECFC2"/>
            </svg>

            
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
            <li v-else class="btn !text-white">
              <NuxtLink to="/login">Login</NuxtLink>
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
                    to="/dashboard/myDrafts"
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
