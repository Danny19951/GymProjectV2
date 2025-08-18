<template>
    <div class="container">
        <div>
            <Header></Header>
        </div>
        <div>
            <Sidebar></Sidebar>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import Sidebar from '../components/Sidebar.vue';
import Header from '@/components/Header.vue';
</script>
<style>
.container {

    display: flex;

}

.content {
    flex: 1;
    padding: 20px;
}
</style>