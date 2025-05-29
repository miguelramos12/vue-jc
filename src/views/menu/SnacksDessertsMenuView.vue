<script setup>
    import { useFoodsStore } from '@/stores/foods';
    import MenuFoodGrid from '@/components/menu/MenuFoodGrid.vue';

    const foodsStore = useFoodsStore();
</script>

<template>
    <div>snacks & desserts page</div>
    <MenuFoodGrid :foods="foodsStore.foods.filter(food => food.primary_category.name.includes('Snacks'))" />
</template>

<style scoped>
    
</style>