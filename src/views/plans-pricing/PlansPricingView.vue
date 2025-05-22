<script setup>
    import { ref } from 'vue';
    import DefaultBreadcrumb from '@/components/breadcrumbs/DefaultBreadcrumb.vue';
    import ShopPlansCard from '@/components/plans-pricing/ShopPlansCard.vue';
    import BreakCopy from '@/components/plans-pricing/BreakCopy.vue';
    import PlansBenefits from '@/components/plans-pricing/PlansBenefits.vue';
    import TrailerBanner from '@/components/plans-pricing/TrailerBanner.vue';

    const pageBreadcrumbs = ref([
        { label: 'Home', route: '/'},
        { label: 'Shop Plans'}
    ])

    const cards = ref([
        {
            title: 'Jenny Craig Program',
            route: '/diet-plans/program',
            tagline: 'Lose up to 24 lbs in your first 8 weeks.*',
            details: [
                'Enjoy breakfast, lunch, dinner, and a snack daily',
                'Access to our app, guides and support',
                'FREE home delivery'
            ],
            ctaLine: 'As low as $132/week with code JENNY4ME',
            btnText: 'Start Now',
            cardColor: '#0875B5', 
            cardClass: 'fourteen'
        },
        {
            title: 'Meal Delivery Plan',
            route: '/diet-plans/meal-delivery-plan',
            tagline: '4 out of 5 say Jenny is easier to follow than any other weight loss plan.†',
            details: [
                'Supports intermittent fasting and low-carb lifestyles',
                'Enjoy daily breakfasts and entrées',
                'Access to our app, guides and support',
                'FREE home delivery'
            ],
            ctaLine: 'Starting for as low as $66/week with code JENNY4ME',
            btnText: 'Start Now',
            cardColor: '#16384E',
            cardClass: 'lowcarb'
        },
        {
            title: 'Club Jenny',
            route: '/club-jenny',
            tagline: '3 out of 4 say Club Jenny saves them time and money vs DIY dieting.††',
            details: [
                'Get delicious meals in any amount, delivered on your schedule',
                'All meals under 300 calories',
                'Access to our app, guides, support and special offers',
                'FREE home delivery'
            ],
            ctaLine: 'Get $100 in FREE Meals',
            btnText: 'Join Today',
            cardColor: '#BD357A',
            cardClass: 'clubjenny'
        },
    ])
</script>

<template>
    <main id="content">
        <DefaultBreadcrumb :breadcrumbs="pageBreadcrumbs" />
        <section class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>Choose How You Lose Weight with Jenny</h1>
                    <p class="subtitle">Easy & convenient options to fit your lifestyle & goals</p>
                </div>
            </div>
            <div class="row">
                <div v-for="(card, index) of cards" :key="index" class="col-12 col-md-4">
                    <ShopPlansCard :card="card" />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p class="small text-center mb-4 text-gray-70">*Based on prior program including Recharge bars, now sold separately. <sup>†</sup>Based on a December 2024 customer survey with 542 Jenny Craig program customer responses. <sup>††</sup>Based on a December 2024 customer survey with 184 Club Jenny customer responses.</p>
                </div>
            </div>
        </section>

        <BreakCopy />

        <PlansBenefits />

        <TrailerBanner />
    </main>
</template>

<style scoped>
    h1{
        font-size: 1.875rem;
        font-weight:400;
        margin:0 0 12px;
        line-height:1.1;
    }
    .subtitle{
        font-size: 1.1875rem;
        font-weight:400;
        margin:0 0 24px;
        line-height:1.1;
    }
    @media (min-width: 768px) {
        h1{
            font-size: 2.1375rem;
        }
        .subtitle{
            font-size: 1.3rem;
            margin:0 0 40px;
        }
    }
    @media (min-width: 992px) {
        h1{
            font-size: 2.85rem;
        }
        .subtitle{
            font-size: 1.75rem;
        }
    }
    @media (min-width: 1200px) {
        h1{
            font-size: 3rem;
        }
        .subtitle{
            font-size: 1.75rem;
        }
    }
</style>