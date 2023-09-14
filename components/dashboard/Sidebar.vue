<template>
    <div class="bg-dashboard-nav border-r-2 border-dark-btn-border w-20 md:w-64 min-h-screen fixed left-0 top-0 flex flex-col justify-between p-2 md:p-4">

        <!-- Top Content -->
        <div class="flex flex-col flex-grow">
            <NuxtLink to="/">
                <h3 class="text-center text-3xl mt-2 hidden md:block text-dashboard-title">SpaceGen X</h3>
            </NuxtLink>
            <div class="mt-20">
                <div class="text-white text-left mt-4 px-2 py-2 rounded-md flex md:px-4 md:py-2">
                    <!-- Icon for smaller screens -->
                    <span class="md:hidden">📄</span>
                    <!-- Text for larger screens -->
                    <span class="hidden md:block">Menu</span>
                </div>
                <NuxtLink to="/dashboard" class="text-dark-btn-text border-2 border-dark-btn-border text-center mt-4 bg-dark-btn px-2 py-2 rounded-md flex md:px-4 md:py-2">
                    <!-- Icon for smaller screens -->
                    <span class="md:hidden">📄</span>
                    <!-- Text for larger screens -->
                    <span class="hidden md:block ml-3">All My Reports</span>
                </NuxtLink>
                <NuxtLink to="/dashboard/publicReports" class="text-dark-btn-text border-2 border-dark-btn-border text-center mt-1 bg-dark-btn px-2 py-2 rounded-md flex md:px-4 md:py-2">
                    <!-- Icon for smaller screens -->
                    <span class="md:hidden">📄</span>
                    <!-- Text for larger screens -->
                    <span class="hidden md:block ml-3">All Public Reports</span>
                </NuxtLink>
            </div>
        </div>
        
        <!-- Logout at the bottom -->
        <LogoutDashboard class="mb-1" />

        <!-- Profile at the bottom -->
        <div v-if="currentUser" class="mb-4 mt-1 border-2 border-dark-btn-border rounded-md pr-4 py-3 bg-dark-btn">
            <div class="flex">
                <img :src="currentUser.avatar" alt="User Avatar" class="rounded-full w-10 h-10 mx-auto border-2 border-dark-btn-text md:w-16 md:h-16">
                <div class="flex flex-col text-left">
                    <h3 class="text-dark-btn-text text-center mt-2 hidden md:block">{{ currentUser.first_name }} {{ currentUser.last_name }}</h3>
                    <h3 class="text-dark-btn-text text-center hidden md:block">View Profile</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LogoutDashboard from '~/components/main/LogoutDashboard.vue';

export default {
    components: {
        LogoutDashboard
    },
    data() {
        return {
            currentUser: null
        };
    },
    mounted() {
        this.getUserData();
    },
    methods: {
        async getUserData() {
            const user = localStorage.getItem('validUser');
            if (user && user !== 'undefined') {
                this.currentUser = await this.fetchUserData(user);
            }
        },
        async fetchUserData(email) {
            try {
                const response = await fetch('/data/users/users.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const users = await response.json();
                return users.find(user => user.email === email);
            } catch (error) {
                console.error('There was a problem fetching the user data:', error);
            }
        }
    }
}
</script>

<style scoped>
.router-link-exact-active {
  color: white;
  background: rgb(1, 1, 1);
}
</style>
