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
    <div class="container py-4 py-md-5">
        <div class="row product-row">
            <MenuFoodGridItem v-for="(food,index) in foods" :key="index" :food="food"/>
        </div>
    </div>
</template>

<style scoped>
    @media (min-width: 768px) {
        .product-row {
            overflow: hidden;
            gap: 1rem;
            row-gap: 2.5rem;
            padding: 0 1rem 0.5rem;
        }
    }
    @media (min-width: 992px) {
        .product-row {
            gap: 3.55rem;
        }
    }
    @media (min-width: 1200px) {
        .product-row {
            gap: 0.5rem;
        }
    }
    @media (min-width: 1440px) {
        .product-row {
            gap: 1.5rem;
        }
    }
</style>