<template>
<h2>Lista De Tareas</h2>
<input type="text" name="" id="" v-model="nuevoItem" @keyup.enter="AgregarArray">
<ul>
    <li v-for="(item,index) in array" :key="index">{{item}}
        <button @click="RemoverArray">Remover</button>

    </li>
</ul>

</template>
<script setup>
import { ref } from 'vue';

const array = ref([]);
const nuevoItem = ref('');
const AgregarArray = () => 
{
    array.value.push(nuevoItem.value);
    nuevoItem.value='';
}

const RemoverArray = (index) => 
{
    array.value.splice(index, 1);
    
}

</script>
<style>

</style>