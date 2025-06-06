<script setup>
    import { ref } from 'vue';
    import { useFoodsStore } from '@/stores/foods';

    const foodsStore = useFoodsStore();
    const foodSearchResults = ref([]);
    const inputFocus = ref(false);
    const resultsList = ref(null);

    const handleChange = () => {
        if (foodsStore.searchQuery.length >= 3) {
            foodSearchResults.value = foodsStore.searchFoods(foodsStore.searchQuery);
        }
        addResults(foodSearchResults.value);
    };

    const addResults = (results) => {
        if (results) {
            resultsList.value.innerHTML = '';
            results.forEach(food => {
                const li = document.createElement('li');
                li.classList.add('list-group-item')
                li.innerHTML = `<a href="/menu/${food.primary_category.slug}/${food.slug}" class="text-decoration-none">${food.item.name}</a>`;
                resultsList.value.appendChild(li);
            });
        }
    }
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
            @input="handleChange"
        />
        <i class="bi bi-search" v-show="!inputFocus"></i>
        <div class="search-results" v-show="inputFocus">
            <p v-show="inputFocus && foodsStore.searchQuery.length < 3">Please enter 3 or more characters</p>
            <ul ref="resultsList" v-show="inputFocus" class="list-group list-group-flush"></ul>
        </div>
    </div>
</template>

<style scoped>
    .search-wrapper {
        max-width: 200px;
    }
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
    .search-results ul {
        position: absolute;
        bottom: -24px;
        left: 0;
        width: 100%;
    }
</style>