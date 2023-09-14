<script setup>
import { ref, onMounted } from 'vue'

// Define ref variables to hold the email and password input values.
const email = ref('')
const password = ref('')
let usersData = [] // Array to store users' data fetched from the data.

// Runs after component is mounted //gives the right time to fetch the data 
onMounted(async () => {
    try {
        const response = await fetch('/data/users/users.json')
        // Parse the JSON data and store it in the usersData array.
        usersData = await response.json()
    } catch (error) {
        console.error("Error loading users data:", error)
    }
})

const loginUser = () => {
    // Check if there's a user in usersData with the entered email and password.
    // user is temporarily used to store the user object from usersData array. UsersData is the entire array
    const foundUser = usersData.find(user => user.email === email.value && user.password === password.value) // find function is used to usersData array to check if there's a user in Json (if nothing is found, find will become undefined)
    // If the user is found (valid login), store the email in local storage and alert the user.
    if (foundUser) {
        localStorage.setItem('validUser', email.value)
        alert('welcome fellow astronaut, the login was successful!')
    } else {
        alert('Invalid credentials!')
    }
}
</script>

<template>
    <div class=" min-h-[calc(100vh-137px)] flex items-center justify-center p-6">
        <div class=" bg-dark-btn border-2 border-dark-btn-border p-8 rounded shadow-md w-96">
            <h1 class="text-2xl mb-4 text-main-text">Login</h1>

            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-400">Email</label>
                <input 
                    type="email" 
                    id="email"
                    v-model="email" 
                    placeholder="you@example.com" 
                    class="mt-1 p-2 w-full border rounded-md bg-[#606060]/70 text-main-text">
            </div>

            <div class="mb-2">
                <label for="password" class="block text-sm font-medium text-gray-400">Password</label>
                <input 
                    type="password" 
                    id="password"
                    v-model="password"
                    placeholder="Password" 
                    class="mt-1 p-2 w-full border rounded-md bg-[#606060]/70 text-[#CECFC2]">
            </div>
            <p class="mb-5 text-blue-500 text-xsm">Do you want to test the Software?</p>
            <NuxtLink to="/dashboard"><button @click="loginUser" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Login</button></NuxtLink>
        </div>
    </div>
</template>

<style scoped>

</style>


<!--onMounted(async () => {
    const { data, error } = await useFetch('/data/users/users.json')

    if (error) {
        console.error("Error loading users data:", error)
    } else {
        usersData.value = data
    }
})
-->