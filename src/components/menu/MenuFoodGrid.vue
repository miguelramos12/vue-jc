<script setup>
    import { defineProps } from 'vue';
    import MenuFoodGridItem from './MenuFoodGridItem.vue';

    const props = defineProps({
        foods: {
            type: Array,
            required: true,
        }
    });
</script>

<template>
    <div class="container">
        <div class="row">
            <MenuFoodGridItem v-for="(food,index) in foods" :key="index" :food="food"/>
        </div>
    </div>
</template>

<style scoped>
    
</style>