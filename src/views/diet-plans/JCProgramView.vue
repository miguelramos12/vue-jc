<script setup>
    import DefaultBreadcrumb from '@/components/breadcrumbs/DefaultBreadcrumb.vue';
    import { ref } from 'vue';
    import DietPlansHero from '@/components/diet-plans/DietPlansHero.vue';
    import SelectMenuType from '@/components/diet-plans/SelectMenuType.vue';
    import SelectShipmentType from '@/components/diet-plans/SelectShipmentType.vue';
    import PriceBlock from '@/components/diet-plans/PriceBlock.vue';

    const pageBreadcrumbs = ref([
        { label: 'Home', route: '/'},
        { label: 'Plans & Pricing', route: '/diet-plans'},
        { label: 'Jenny Craig Plan'}
    ])
</script>

<template>
    <main id="content">
        <DefaultBreadcrumb :breadcrumbs="pageBreadcrumbs" />
        <DietPlansHero />
        <SelectMenuType />
        <SelectShipmentType />
        <PriceBlock />
    </main>
</template>

<style scoped>

</style>
