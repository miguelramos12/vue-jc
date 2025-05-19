<script setup>
    import HomepageHero from '@/components/hp/hero/HomepageHero.vue';
    import ClubJennyBanner from '@/components/hp/sections/ClubJennyBanner.vue';
    import LoveJenny from '@/components/hp/sections/LoveJenny.vue';
    import HowJennyWorks from '@/components/hp/sections/HowJennyWorks.vue';
    import FoodOptions from '@/components/hp/sections/FoodOptions.vue';
    import SolutionsGoals from '@/components/hp/sections/SolutionsGoals.vue';
    import BeforeAfter from '@/components/hp/sections/BeforeAfter.vue';
    import FAQ from '@/components/hp/sections/FAQ.vue';
</script>

<template>
    <main id="content">
        <HomepageHero />
        <ClubJennyBanner />
        <LoveJenny />
        <HowJennyWorks />
        <FoodOptions />
        <SolutionsGoals />
        <BeforeAfter />
        <FAQ />
    </main>
</template>

<style>
    h1, h2, h3, h4, h5, h6, p, span:not(.text-white, .banner-promo, .banner-details, .mobile_number_href .visible-lg) {
        color: #16384e;
    }

    .section-title {
        text-align: center;
        font-size: 1.875rem;
        line-height: 1.1;
    }

    .section-subtitle {
        text-align: center;
        font-size: 1.1875rem;
        line-height: 1.3;
    }

    .review-copy {
        color: #0881c7;
        font-weight: 500;
    }
    @media (min-width: 768px) {
        .section-title {
            font-size: 2.125rem;
        }
    }
</style>