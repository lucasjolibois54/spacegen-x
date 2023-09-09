<script setup>
import Hero from '~/components/home/Hero.vue';
import SubHero from '~/components/home/SubHero.vue';
</script>

<template>
    <div>
        <Hero/>
        <SubHero/>
        <h2>Home</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum esse voluptatibus minima odio iste commodi cupiditate sed quidem incidunt?</p>
    </div>
</template>

<style scoped>

    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }

    p{
        font-size: 18px;
        margin: 20px 0;
    }
</style>