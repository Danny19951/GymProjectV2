<template>

<p>{{numero}}</p>
<button @click="aumentarNumero">Aumentame</button>
<button @click="Disminuyeme">Disminuyeme</button>
</template>
<script setup>

import {ref} from 'vue';

const numero = ref(0);
const aumentarNumero = () =>
{
    numero.value++;
}
const Disminuyeme = () =>
{
    numero.value--;
}

</script>
<style>


</style>