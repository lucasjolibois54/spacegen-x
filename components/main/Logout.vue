<template>
    <NuxtLink to="/login">
        <button @click="logoutUser" class="border-dark-btn-border flex items-center justify-between border-2 w-full bg-dark-btn text-white p-2 rounded-md">
            <span>Logout</span>
            <span>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.96874 15.9374H1.06251V1.06247H7.96874C8.262 1.06247 8.49998 0.824452 8.49998 0.531235C8.49998 0.238018 8.26196 0 7.96874 0H0.531235C0.238018 0 0 0.237974 0 0.531235V16.4687C0 16.7619 0.238018 16.9999 0.531235 16.9999H7.9687C8.26196 16.9999 8.49993 16.7619 8.49993 16.4687C8.49998 16.1754 8.26196 15.9374 7.96874 15.9374Z" fill="#C4C4C5"/>
                    <path d="M16.6255 8.1288L12.9599 4.4106C12.7522 4.20076 12.4159 4.20129 12.2087 4.4106C12.001 4.61992 12.001 4.9599 12.2087 5.16921L14.9712 7.97155H4.03123C3.73797 7.97155 3.5 8.21169 3.5 8.50813C3.5 8.80457 3.73802 9.04471 4.03123 9.04471H14.9712L12.2087 11.8471C12.001 12.0569 12.001 12.3963 12.2087 12.6057C12.4164 12.8155 12.7527 12.8155 12.9599 12.6057L16.625 8.88746C16.8301 8.68079 16.8322 8.33494 16.6255 8.1288Z" fill="#C4C4C5"/>
                </svg>
            </span>
        </button>
    </NuxtLink>
</template>


  <script setup>
  import { ref } from 'vue'
  
  const logoutUser = () => {
    // Remove the user details from local storage
    localStorage.removeItem('validUser')
  
    // Alert the user about successful logout
    alert('Successfully logged out!')
  }
  </script>
  
  <style scoped>
  </style>
  