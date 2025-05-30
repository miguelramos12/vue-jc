<script setup>
    import { useFoodsStore } from '@/stores/foods';
    import MenuFoodGrid from '@/components/menu/MenuFoodGrid.vue';

    const foodsStore = useFoodsStore();
</script>

<template>
    <MenuFoodGrid :foods="foodsStore.foods.filter(food => food.primary_category.name.includes('Lunch'))" />
</template>

<style scoped>
    
</style>