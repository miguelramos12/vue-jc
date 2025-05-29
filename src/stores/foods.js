import { ref } from "vue";
import { defineStore } from "pinia";

export const useFoodsStore = defineStore("foods", () => {
    /* state */
    const foods = ref([]);

    /* actions */
    function updateFoods(newFoods) {
        foods.value = newFoods;
    }
    
    /* getters */

    return { foods, updateFoods }
})