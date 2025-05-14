<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        breadcrumbs: {
            type: Array,
            required: true,
        },
        activePage: {
            type: Number,
            required: true
        },
        navLinkClick: {
            type: Function,
            default: () => {},
        },
    });
</script>

<template>
    <div class="container sub-header">
        <ul class="breadcrumb gap-3 gap-md-4 mt-2-5">
            <!-- 
            <li><a href="/why-jenny" onclick="omni_track('Breadcrumb:WhyJenny')">Why Jenny</a></li>
            <li><a href="/how-it-works" onclick="omni_track('Breadcrumb:HowItWorks')">How it Works</a></li>
            <li><a href="/stories" class="active" onclick="omni_track('Breadcrumb:Stories')">Stories</a></li> 

            TODO: NEED TO ADD OMNI_TRACK TO THE BREADCRUMBS
            -->
            
            
            <li v-for="(item, index) in breadcrumbs" :key="index" :index="index" :class="{ active: index === activePage}">
                <RouterLink :to="`${item.route}`" class="text-decoration-none" @click="navLinkClick(index)">{{ item.label }}</RouterLink>
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