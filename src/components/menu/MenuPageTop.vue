<script setup>
    import MenuSearchSortFilter from './MenuSearchSortFilter.vue';
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-5 col-lg-6">
                    <h1 class="fw-600">All Meals</h1>
                    <p class="mb-3">Enjoy the meals &amp; flavors you love&mdash;all under 300 calories.</p>
                </div>
                <div class="col-12 col-md-7 col-lg-6">
                    <MenuSearchSortFilter />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="filters-selected">filters selected</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    h1 {
        font-size: 1.25rem;
        line-height: 1.4;
    }
    @media (min-width: 768px) {
        h1 {
            font-size: 1.75rem;
        }
    }
</style>