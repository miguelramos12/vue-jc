<script setup>
    import { ref } from 'vue';
    import { useFoodsStore } from '@/stores/foods';

    const foodsStore = useFoodsStore();
    const inputFocus = ref(false);
</script>

<template>
    <div class="search-wrapper position-relative">
        <input
            type="search"
            class="form-control rounded-1 search-input"
            placeholder="Search meals"
            v-model="foodsStore.searchQuery"
            @focus="inputFocus = true"
            @blur="inputFocus = false"
        />
        <i class="bi bi-search" v-show="!inputFocus"></i>
        <div class="search-results" v-show="inputFocus">
            <p v-show="foodsStore.searchQuery.length < 3">Please enter 3 or more characters</p>
        </div>
    </div>
</template>

<style scoped>
    .search-input {
        width: 100%;
    }
    .bi-search {
        position: absolute;
        top: 7px;
        right: 10px;
        color: #0875B5;
        font-weight: 700;
    }
    .search-results {
        background: #fff;
        padding: 0.5rem 0.75rem;
    }
</style>