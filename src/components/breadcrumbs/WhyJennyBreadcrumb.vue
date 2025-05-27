<script setup>
    import { defineProps } from 'vue';
    import { useHeadersStore } from '@/stores/headers';

    const headersStore = useHeadersStore();

    const props = defineProps({
        breadcrumbs: {
            type: Array,
            required: true,
        }
    });

    // omni_track placeholder - DO NOT INCLUDE IN PRODUCTION
    function omni_track(location) {
        console.log(`omni_track:${location}`);
    }
</script>

<template>
    <div class="container sub-header">
        <ul class="breadcrumb gap-3 gap-md-4 mt-2-5">
            <li v-for="(item, index) in breadcrumbs" :key="index" :index="index" :class="{ active: index === headersStore.activePage}">
                <RouterLink :to="`${item.route}`" class="text-decoration-none" @click="headersStore.updateActivePage(index);omni_track(`Breadcrumb:${item.label}`);">{{ item.label }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .sub-header li {
        display: list-item;
    }
    .sub-header li a {
        color: #16384E;
        font-size: 0.8125rem;
        line-height: 1.3;
    }
    .sub-header li.active a {
        color: #0881C7;
    }
    @media (min-width: 768px) {
        .sub-header li a {
            font-size: 1rem;
        }
    }
</style>