<script setup>
    import { defineProps } from 'vue';

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
            <div class="food-item" v-for="(food,index) in foods" :key="index">
                {{ food.item.name }}
            </div>
        </div>
    </div>
</template>

<style scoped>
    
</style>