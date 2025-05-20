<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        breadcrumbs: {
            type: Array,
            required: true,
        },
    });
</script>

<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li v-for="(item, index) in breadcrumbs" :key="index" class="breadcrumb-item" :class="{ active: index === breadcrumbs.length - 1, prev: index === breadcrumbs.length - 2 }">
                    <router-link v-if="item.route" :to="item.route" @click="omni_track(`Breadcrumb:${item.label}`);">{{ item.label }}</router-link>
                    <span v-else>{{ item.label }}</span>
                </li>
            </ol>
        </nav>
    </div>
</template>

<style scoped>
    @media (max-width: 767px){
        .breadcrumb > .breadcrumb-item {
            display: none;
        }
        .breadcrumb > .breadcrumb-item.prev {
            display: inline-block;
        }
    }
</style>