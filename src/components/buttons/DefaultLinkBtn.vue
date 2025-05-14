<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        btnText: {
            type: String,
            required: true,
        },
        btnLink: {
            type: String,
            required: true,
        },
        btnClasses: {
            type: String
        },
    });
</script>

<template>
    <RouterLink :to="btnLink" role="button" class="btn btn-default" :class="btnClasses">{{ btnText }}</RouterLink>
</template>

<style scoped>
    
</style>