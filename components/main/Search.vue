<script setup>
import { ref, onMounted, computed } from 'vue';

// Reactive variables
const reports = ref([]);
const searchQuery = ref('');
const inputFocused = ref(false);

const handleBlur = () => {
    setTimeout(() => {
        inputFocused.value = false;
    }, 150);
}

// Load data on component mount
onMounted(async () => {
    try {
        const response = await fetch('/data/public-reports/publicReports.json');
        if (!response.ok) {
            throw new Error('Failed to load reports');
        }
        reports.value = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
});

// Computed property to filter the reports based on search query
const filteredReports = computed(() => {
    // If the input is focused, but there's no search query yet, show the first 5 reports
    if (inputFocused.value && !searchQuery.value.trim()) {
        return reports.value.slice(0, 5);
    }

    // If there's a search query, filter and return the matching reports
    if (searchQuery.value.trim()) {
        return reports.value.filter(report => 
            report.missionData.missionName.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    }

    // By default, return an empty array
    return [];
});

const highlightMatch = (text) => {
    let parts = text.split(new RegExp(`(${searchQuery.value})`, 'gi'));
    return parts.map(part => {
        if (part.toLowerCase() === searchQuery.value.toLowerCase()) {
            return `<span class=" bg-blue-500">${part}</span>`;
        }
        return part;
    }).join('');
}

</script>

<template>
    <div class="relative">
        <!-- Input field -->
        <input v-model="searchQuery" 
               @focus="inputFocused = true" 
               @blur="handleBlur"
               placeholder="Search for a public report..." 
               class="pl-10 pr-4 py-2 w-72 rounded-md bg-[#606060]/70 placeholder-[#CECFC2] text-[#CECFC2] outline-none" />

        <!-- Search Icon -->
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#CECFC2]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6905 17.6691L12.602 10.5825C13.4147 9.33113 13.7981 7.83626 13.6852 6.3357C13.5623 4.7034 12.8562 3.16624 11.697 2.00728C10.4016 0.712265 8.68128 0 6.8503 0C6.84146 0 6.83257 3.98269e-05 6.82369 3.98269e-05C4.98295 0.00700954 3.25751 0.733174 1.96521 2.04479C-0.676342 4.72578 -0.651762 9.06456 2.01999 11.7168C3.17974 12.868 4.7152 13.568 6.34349 13.6878C7.84055 13.7978 9.33163 13.4143 10.5799 12.6041L17.6684 19.6905C17.8747 19.8968 18.1458 20 18.4168 20C18.6879 20 18.959 19.8968 19.1654 19.6906L19.6905 19.1656C20.1032 18.753 20.1032 18.0817 19.6905 17.6691ZM19.1271 18.6023L18.6019 19.1273C18.4998 19.2294 18.3338 19.2293 18.2318 19.1273L10.9094 11.8069C10.8323 11.7298 10.7302 11.6903 10.6276 11.6903C10.5462 11.6903 10.4643 11.7151 10.3942 11.7659C7.98253 13.5098 4.69672 13.2514 2.58134 11.1515C0.220085 8.80756 0.198333 4.97307 2.53282 2.60376C3.67496 1.44452 5.19991 0.802711 6.82668 0.796578C6.83461 0.796578 6.8423 0.796538 6.85022 0.796538C8.46831 0.796538 9.98883 1.42608 11.1336 2.57051C13.2493 4.68564 13.5142 7.97705 11.7636 10.3969C11.6489 10.5553 11.6663 10.7736 11.8047 10.9119L19.1271 18.2323C19.2291 18.3343 19.2291 18.5003 19.1271 18.6023Z" fill="#CECFC2"/>
            <path d="M10.3405 3.36313C8.41562 1.43885 5.28366 1.43885 3.35879 3.36313C2.42635 4.29532 1.91284 5.53473 1.91284 6.85304C1.91284 8.17139 2.42635 9.41077 3.35879 10.343C4.29123 11.2751 5.53098 11.7886 6.84964 11.7886C8.16835 11.7886 9.40809 11.2751 10.3405 10.343C12.2653 8.41864 12.2653 5.28749 10.3405 3.36313ZM9.77711 9.77972C8.99514 10.5614 7.95549 10.992 6.84964 10.992C5.74383 10.992 4.70415 10.5614 3.92221 9.77968C3.14028 8.99796 2.70963 7.95856 2.70963 6.85304C2.70963 5.74753 3.14024 4.70816 3.92221 3.9264C4.7294 3.11939 5.78932 2.71606 6.84964 2.71606C7.90972 2.71606 8.97008 3.11963 9.77707 3.9264C11.3913 5.54019 11.3913 8.16598 9.77711 9.77972Z" fill="#CECFC2"/>
            <path d="M4.41976 6.13071C4.48225 5.91978 4.36194 5.69815 4.15105 5.63566C3.94021 5.57317 3.71853 5.69345 3.65604 5.90433C3.30836 7.07759 3.62944 8.34349 4.494 9.20805C4.57174 9.28579 4.6737 9.3247 4.77562 9.3247C4.87754 9.3247 4.97945 9.28579 5.05723 9.20809C5.21276 9.05253 5.21276 8.80034 5.05723 8.64482C4.39941 7.987 4.15511 7.02362 4.41976 6.13071Z" fill="#CECFC2"/>
            <path d="M5.63278 3.75212C5.20472 3.91983 4.82162 4.17086 4.49421 4.49827C4.33868 4.65384 4.33868 4.90602 4.49421 5.06154C4.57195 5.13929 4.67391 5.1782 4.77582 5.1782C4.87774 5.1782 4.97966 5.13929 5.0574 5.06154C5.30672 4.81223 5.59805 4.62118 5.92328 4.49381C6.12811 4.41356 6.22907 4.18252 6.14886 3.97769C6.06864 3.77287 5.83757 3.67198 5.63278 3.75212Z" fill="#CECFC2"/>
        </svg>

        <!-- Display filtered reports -->
        <ul v-if="inputFocused" class="absolute top-full left-0 w-full bg-black/30 backdrop-blur-lg border border-dark-btn-border z-10 rounded-b-md">
            <li v-for="report in filteredReports" :key="report.id" class="text-main-text px-4 py-2 hover:bg-black border-t-2 border-b-2 border-transparent hover:border-dark-btn-border">
                <NuxtLink :to="`/dashboard/public-reports/${report.id}`" ><span v-html="highlightMatch(report.missionData.missionName)"></span>
                <td class="px-4 float-right">#{{ report.id }}</td></NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>
