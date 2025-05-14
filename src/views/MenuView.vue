<script setup>
    import DefaultBreadcrumb from '@/components/breadcrumbs/DefaultBreadcrumb.vue';
    import { ref } from 'vue';

    const pageBreadcrumbs = ref([
        { label: 'Home', route: '/'},
        { label: 'All Meals'}
    ])
</script>

<template>
    <main>
        <DefaultBreadcrumb :breadcrumbs="pageBreadcrumbs" />
        food menu page
    </main>
</template>

<style scoped>
    
</style>