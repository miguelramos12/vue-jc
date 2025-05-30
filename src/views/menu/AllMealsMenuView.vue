<script setup>
    import { useFoodsStore } from '@/stores/foods';
    import MenuFoodGrid from '@/components/menu/MenuFoodGrid.vue';

    const foodsStore = useFoodsStore();
</script>

<template>
    <MenuFoodGrid :foods="foodsStore.foods" />
</template>

<style scoped>
    
</style>