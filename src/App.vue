<script setup>
import { RouterView } from 'vue-router'
import PromoBanner from './components/header/PromoBanner.vue'
import SkipToContent from './components/header/SkipToContent.vue'
import DefaultHeader from './components/header/DefaultHeader.vue'
import DefaultFooter from './components/footer/DefaultFooter.vue'
</script>

<template>
    <SkipToContent />

    <PromoBanner />

    <DefaultHeader />

    <RouterView />

    <DefaultFooter />
</template>

<style scoped>

</style>
