<script setup>

</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-200 p-6">
        <div class="bg-white p-8 rounded shadow-md w-96">
            <h1 class="text-2xl mb-4">Login</h1>

            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    type="email" 
                    id="email"
                    placeholder="you@example.com" 
                    class="mt-1 p-2 w-full border rounded-md">
            </div>

            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input 
                    type="password" 
                    id="password"
                    placeholder="Password" 
                    class="mt-1 p-2 w-full border rounded-md">
            </div>

            <button class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Login</button>
        </div>
    </div>
</template>


<style scoped>

</style>