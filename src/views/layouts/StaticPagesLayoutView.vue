<script setup>
    import WhyJennyBreadcrumb from '@/components/breadcrumbs/WhyJennyBreadcrumb.vue';
    import { ref } from 'vue';

    const pageBreadcrumbs = ref([
        { label: 'Why Jenny', route: '/why-jenny'},
        { label: 'How It Works', route: '/how-it-works'},
        { label: 'Stories', route: '/stories'},
        ]);
    
</script>

<template>
    <main id="content">
        <WhyJennyBreadcrumb :breadcrumbs="pageBreadcrumbs" />

        <RouterView />
    </main>
</template>

<style scoped>
    
</style>