<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        btnText: {
            type: String,
            required: true,
        },
        btnClasses: {
            type: String
        },
    });
</script>

<template>
    <button type="button" class="btn btn-default" :class="btnClasses">{{ btnText }}</button>
</template>

<style scoped>
    
</style>