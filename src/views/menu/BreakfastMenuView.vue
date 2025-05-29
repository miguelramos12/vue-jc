<script setup>
    import { useFoodsStore } from '@/stores/foods';
    import MenuFoodGrid from '@/components/menu/MenuFoodGrid.vue';

    const foodsStore = useFoodsStore();
</script>

<template>
    <div>breakfast page</div>
    <MenuFoodGrid :foods="foodsStore.foods.filter(food => food.primary_category.name.includes('Breakfast'))" />
</template>

<style scoped>
    
</style>