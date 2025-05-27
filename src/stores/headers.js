import { ref } from "vue";
import { defineStore } from "pinia";

export const useHeadersStore = defineStore("headers", () => {
    /* state */
    const activePage = ref(0);

    /* actions */
    function updateActivePage(page){
        activePage.value = page;
    }
    
    /* getters */

    return { activePage, updateActivePage}
})