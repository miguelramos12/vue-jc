<script setup>
import { ref } from 'vue';
// import { useFoodsStore } from '@/stores/foods';

const sortSelected = ref('relevancy');

function handleSortChange(e){
    sortSelected.value = e.target.value;
}
</script>

<template>
    <div class="sort-by">
        <p class="sort-txt no-margin">
            <img
                src="https://www.jennycraig.com/images/jc/shop/sort-icon.svg"
                alt=""
                class="sort-icon"
            > Sort:
        </p> 
        <select
            name="sortBy"
            id="sortBy"
            autocomplete="off"
            onclick="omni_track('SortBy');"
            :value="sortSelected"
            @input="handleSortChange"
            @change="handleSortChange"
        >
            <option
                value="product"
                sort-type="asc"
            > Alphabetically</option>
            <option
                value="relevancy"
                sort-type="asc"
                selected
            > Relevancy</option>
        </select>
    </div>
</template>

<style scoped>
.sort-by {
   display: flex;
   border-radius: 0.25rem;
   border: 1px solid var(--Colors-Grays-Light-Gray, #BFC2C4);
   background: var(--Grays-White, #FFF);
   width: 60%;
}
.sort-by .sort-txt {
   display: flex;
   height: 2.5rem;
   padding: 0rem .2rem 0 1rem;
   justify-content: center;
   align-items: center;
   gap: .4rem;
}

.sort-by select {
   display: flex;
   height: 2.5rem;
   padding: 0rem 1rem;
   justify-content: center;
   align-items: center;
   gap: 0.5rem;
   flex: 1 0 0;
   border: 0;
   color: var(--Text-text-primary, #16384E);
   font-family: Arial, sans-serif;
   font-size: 1rem;
   font-weight: 400;
   line-height: 1;
   background-image: none;
   padding: 0;
   -o-appearance: none;
   -ms-appearance: none;
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   border-radius: 0.25rem;
   background-color: #fff;
}
.sort-by:hover, 
.sort-by:hover #sortBy{
   background:#FAF7F4;
}
.sort-by:active {
   border: 3px solid #F5CE97;
}
@media(min-width:375px){
   .sort-by {
      width: 50%;
  }
}
@media(min-width:992px) {
    .sort-by {
        min-width: 11.8rem;
    }
    .sort-by .sort-txt {
        font-size: 1rem;
    }
}
@media(min-width:1200px) {
    .sort-by {
      width: 12rem;
    }
}
</style>