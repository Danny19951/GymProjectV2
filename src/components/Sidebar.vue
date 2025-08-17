<template>
    <div class="sidebar">
        <h2>Barra Lateral</h2>
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

</script>
<style>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>