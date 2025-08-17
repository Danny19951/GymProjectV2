<template>
    <div class="sidebar">
        <h2>Welcome</h2>
        <h3 class="ClientInfo">nombre: {{ nombreSb }}</h3>
        <h3 class="ClientInfo">Email: {{ EmailSb }}</h3>
        <ul>
            <li>
                <router-link to="/contador"> Contador </router-link>
            </li>
            <li>
                <router-link to="/ListaObjeto"> Lista Objeto </router-link>
            </li>
            <li>
                <router-link to="/Registroview"> Registro </router-link>
            </li>
        </ul>

    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useRegistrarStore } from '@/modules/Stores/registrarStore';

const registrarStoreSb = useRegistrarStore();
const nombreSb = ref(registrarStoreSb.nombre);
const EmailSb = ref(registrarStoreSb.email);
watch(()=> registrarStoreSb.nombre, (newValue) =>{
    nombreSb.value = newValue
})

watch(()=> registrarStoreSb.email, (newValue) =>{
    EmailSb.value = newValue
})
</script>
<style>

.clientInfo{


}

.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>