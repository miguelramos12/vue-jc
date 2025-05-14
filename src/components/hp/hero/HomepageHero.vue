<script setup>
    
</script>

<template>
    <section class="hero">
        <img src="https://www.jennycraig.com/media/jc/hero/jcc16370/flowers-image_tablet-mobile.webp" alt="flowers" class="flowers img-fluid img-responsive d-block d-xxl-none mb-3 hidden-xxl">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-10 col-xxl-10 offset-xxl-1 col-xl-offset-1">
                    <div class="hero-content d-flex flex-column flex-lg-row gap-4 align-items-xxl-center gap-xxl-5">
                        <div class="hero-txt d-flex flex-column">
                            <p class="new">Meal plans starting at</p>
                            <img src="https://www.jennycraig.com/media/jc/hero/jcc16370/66week.svg" alt="Save $66" class="save-66">
                            <h1 class="visually-hidden sr-only">Meal plans starting at $66 per week</h1>
                            <p class="code">Use Code: JENNY4ME</p>
                            <p class="agree">Reach your goals with delicious calorie-smart meals that make healthy eating easier.</p>
                            <div class="cta-wrapper d-flex flex-column align-items-center gap-3">
                                <RouterLink class="btn btn-default" onclick="omni_track('Hero:CTA')" href="/plans-pricing">Save Now</RouterLink>
                            </div>
                        </div>
                        <div class="hero-img">
                            <img src="https://www.jennycraig.com/media/jc/hero/jcc16370/BA-image_desktop.webp" alt="Jess lost 35 lbs*" class="hero-img img-fluid img-responsive">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped> 
    .hero .row{ display: flex; flex-wrap: wrap; } .hero .mb-3 { margin-bottom: 1rem; } .hero .justify-content-center { justify-content: center; } .hero .d-block{ display: block; } .hero .align-items-center{ align-items: center; } .hero .d-flex{ display:flex; } .hero .flex-column { flex-direction: column; } .hero .gap-4{ gap:1.5rem; } .hero .gap-3{ gap:1rem; } .hero { text-align: center; position: relative } .hero .save-66{ width:16rem; height:auto; margin:0 auto .5rem; } .hero .cta-wrapper .btn { font-size: 1.188rem; padding: .5rem 0; width: 12.8125rem; background-color: #d4422b; border-color: #d4422b } .hero .cta-wrapper .btn:hover { background: #b43825; border-color: #b43825 } .hero .code { color: #5176BD; font-family: Prompt; font-size: 1rem; margin-bottom:1rem; } .hero .agree{ font-family: Prompt; font-size: 1rem; line-height: 1.5; margin-bottom:1.5rem; } .hero .new{ color: #5176BD; font-family: Prompt; font-size: 1.5rem; line-height: 1.5; margin-bottom:.25rem; } .hero .view-all{ font-size: 1.1875rem; } @media(min-width:360px){ .hero .save-66 { width: 18rem; } } @media (min-width:768px) { .hero .hero-txt{ align-items: center; } .hero .new {font-size: 2rem;}.hero .save-66{ width:24.875rem; } .hero .agree { font-size: 1.1875rem; } } @media (min-width:992px) { .hero .flowers{ margin-top:-.15rem; } .hero .flex-lg-row{ flex-direction: row; } } @media (min-width:1200px) { .hero .flowers{ margin-top:-.45rem; } } @media (min-width:1440px) { .hero .hidden-xxl{ display: none; }.hero{ background: url(https://www.jennycraig.com/media/jc/hero/jcc16370/flowers-image_desktop.webp)no-repeat bottom left; background-size: contain; padding-top:2.3rem; background-size:20%; } .hero .hero-content{ gap:3rem; } .hero .align-items-xxl-center{ align-items: center; } } 
</style>