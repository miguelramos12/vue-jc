<script setup>
    import MenuSearch from './MenuSearch.vue';
    import MenuSort from './MenuSort.vue';
    import MenuFilter from './MenuFilter.vue';
</script>

<template>
    <div class="search-sort-filter">
        <MenuSearch />
        <div class="sort-filter d-flex justify-content-between align-items-center gap-2 mt-2">
            <MenuSort />
            <MenuFilter />
        </div>
    </div>
</template>

<style scoped>
    
</style>