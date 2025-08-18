<template>
  {{ weatherStore.temperatura }}
</template>

<script setup>
import { useWeather } from '../compusables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '../stores/weatherStore';

const weatherStore = useWeatherStore();

onMounted(()=>{
  useWeather();
})

</script>

<style scoped>

</style>