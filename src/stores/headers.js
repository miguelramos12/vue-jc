import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useHeadersStore = defineStore("headers", () => {
    /* state */
    const activePage = ref(0);

    /* actions */
    function updateActivePage(page){
        console.log(`activePage before: ${activePage.value}`);
        activePage.value = page;
        console.log(`activePage after: ${activePage.value}`);
    }
    
    /* getters */

    return { activePage, updateActivePage}
})