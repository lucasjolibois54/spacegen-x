<script setup>
import { ref, onMounted, computed } from 'vue';

// Reactive variables
const reports = ref([]);
const searchQuery = ref('');
const inputFocused = ref(false);

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
    <div>
        <!-- Input field -->
        <input v-model="searchQuery" 
               @focus="inputFocused = true" 
               @blur="inputFocused = false" 
               placeholder="Search for a report..." 
               class="pl-10 pr-4 py-2 w-72 rounded-md bg-[#606060]/70 placeholder-[#CECFC2] text-[#CECFC2] outline-none" />

        <!-- Search Icon -->
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#CECFC2]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- ... (the SVG path data) -->
        </svg>

        <!-- Display filtered reports -->
        <ul class="absolute rounded-t-md left-0 w-full bg-black/30 backdrop-blur-lg border border-dark-btn-border z-10 rounded-b-md">
            <li v-for="report in filteredReports" :key="report.id" class="text-main-text px-4 py-2 hover:bg-black border-t-2 border-b-2 border-transparent hover:border-dark-btn-border">
                <span v-html="highlightMatch(report.missionData.missionName)"></span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>
