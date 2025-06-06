<script setup>

</script>

<template>
    <div class="filter-by d-flex justify-content-center align-items-center">
        <a
            role="button"
            data-bs-toggle="offcanvas"
            href="#filterFlex"
            aria-expanded="false"
            aria-controls="filterFlex"
            onclick="omni_track('FilterBy');"
            class="filter-by-trigger text-decoration-none text-center py-0 px-3"
        >
            <img src="https://www.jennycraig.com/images/jc/shop/filter-icon.svg" alt="" class="filter-icon"> Filter 
        </a>
    </div>
</template>

<style scoped>
.filter-by {
   height: 2.5rem;
   gap: 0.5rem;
   flex: 1 0 0;
   border-radius: 0.25rem;
   border: 1px solid #BFC2C4;
   background: #FFF;
   width: 40%;
   white-space: nowrap;
}
.filter-by:hover {
   background:#FAF7F4;
}
.filter-by a {
   text-decoration: none;
   color: inherit;
   width: 100%;
}
.filter-by:active {
   border: 3px solid #F5CE97;
}
.filter-by .filter-numb {
   font-family: Prompt, Arial, sans-serif;
   width: 1.5rem;
   display: inline-block;
   padding: 0.125rem 0.25rem;
   position: relative;
   text-align: center;
   font-size: 1rem;
   font-weight: bold;
   color: #0875B5;
   z-index: 1;
   color: #fff;
   line-height: 1;
   margin-left:.25rem
}
.filter-by .filter-numb:after {
   content: "";
   display: block;
   background-color: #0875B5;
   border-radius: 6.25rem;
   width: 1.75rem;
   height: 1.75rem;
   z-index: -1;
   position: absolute;
   top: -4px;
   left: -1px;
   right: 0;
}
@media (min-width: 992px) {
    .filter-by {
        max-width: 7.25rem;
    }
}
</style>