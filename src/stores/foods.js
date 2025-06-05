import { ref } from "vue";
import { defineStore } from "pinia";

export const useFoodsStore = defineStore("foods", () => {
    /* state */
    const foods = ref([]);
    const searchQuery = ref('');

    /* actions */
    function updateFoods(newFoods) {
        foods.value = newFoods;
    }

    function searchFoods(query){
        if (!query) {
            return foods.value; // Return all foods if no query is provided
        }
        const lowerCaseQuery = query.trim().toLowerCase();
        return foods.value.filter(food => 
            food.item.name.toLowerCase().includes(lowerCaseQuery)
        );
    }
    
    /* getters */

    return { foods, searchQuery, updateFoods, searchFoods }
})