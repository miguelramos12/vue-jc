<script setup>
    import HomepageHero from '@/components/hp/hero/HomepageHero.vue';
    import ClubJennyBanner from '@/components/hp/sections/ClubJennyBanner.vue';
    import LoveJenny from '@/components/hp/sections/LoveJenny.vue';
</script>

<template>
    <main id="content">
        <HomepageHero />
        <ClubJennyBanner />
        <LoveJenny />
    </main>
</template>

<style>
    h1, h2, h3, h4, h5, h6, p, span:not(.top-promo-banner .glyphicon, .text-white, .banner-details, .mobile_number_href .visible-lg) {
        color: var(--Text-text-primary, #16384e);
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
    @media (min-width: 768px) {
        .section-title {
            font-size: 2.125rem;
        }
    }
</style>