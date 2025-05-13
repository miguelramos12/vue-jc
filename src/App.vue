<script setup>
import { RouterView } from 'vue-router'
import PromoBanner from './components/header/PromoBanner.vue'
import DefaultHeader from './components/header/DefaultHeader.vue'
import DefaultFooter from './components/footer/DefaultFooter.vue'
</script>

<template>

    <PromoBanner />

    <DefaultHeader />

    <RouterView />

    <DefaultFooter />

</template>

<style scoped>

</style>
