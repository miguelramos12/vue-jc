<script setup>
    import DefaultBreadcrumb from '@/components/breadcrumbs/DefaultBreadcrumb.vue';
    import { ref } from 'vue';

    const pageBreadcrumbs = ref([
        { label: 'Home', route: '/'},
        { label: 'Shop Plans'}
    ])
</script>

<template>
    <main>
        <DefaultBreadcrumb :breadcrumbs="pageBreadcrumbs" />
        plans & pricing page
    </main>
</template>

<style scoped>
    
</style>