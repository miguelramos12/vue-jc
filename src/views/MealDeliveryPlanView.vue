<script setup>
    import DefaultBreadcrumb from '@/components/breadcrumbs/DefaultBreadcrumb.vue';
    import { ref } from 'vue';

    const pageBreadcrumbs = ref([
        { label: 'Home', route: '/'},
        { label: 'Plans & Pricing', route: '/diet-plans'},
        { label: 'Meal Delivery Plan'}
    ])
</script>

<template>
    <main id="content">
        <DefaultBreadcrumb :breadcrumbs="pageBreadcrumbs" />
        meal delivery plan page
    </main>
</template>

<style scoped>
    
</style>