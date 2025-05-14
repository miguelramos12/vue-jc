<script setup>
    import WhyJennyBreadcrumb from '@/components/breadcrumbs/WhyJennyBreadcrumb.vue';
    import { ref } from 'vue';

    const pageBreadcrumbs = ref([
        { label: 'Why Jenny', route: '/why-jenny'},
        { label: 'How It Works', route: '/how-it-works'},
        { label: 'Stories', route: '/stories'},
        ]);
    const activePage = ref(getInitPage());

    function navLinkClick(index) {
        activePage.value = index;
    }

    function getInitPage(){
        const path = window.location.pathname;
        if (path.includes('how-it-works')) {
            return 1;
        } else if (path.includes('stories')) {
            return 2;
        } else {
            return 0;
        }
    }
</script>

<template>
    <main>
        <WhyJennyBreadcrumb :breadcrumbs="pageBreadcrumbs" :active-page="activePage" :nav-link-click="navLinkClick" />

        <RouterView />
    </main>
</template>

<style scoped>
    
</style>