<script setup>
    import DefaultLinkBtn from '@/components/buttons/DefaultLinkBtn.vue';
</script>

<template>
    <section class="cjban">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-10 offset-xl-1">
                    <div class="mob-wrapper">
                        <img src="https://www.jennycraig.com/images/jc/alacarte/club-jenny-logo.svg" alt="club jenny">
                        <div class="mob-copy">
                            <h2>Get $100 in FREE Meals &amp; FREE Shipping</h2>
                            <p class="h3">Support intermittent fasting, mindful eating &amp; calorie goals. Order your choice of meals anytime.</p>
                        </div>
                        <DefaultLinkBtn btn-link="/club-jenny" btn-text="Join Today" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
     .cjban {
        background: #faf7f4;
    }

    .cjban .mob-wrapper {
        padding: 1.5rem 1rem;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column
    }

    .cjban img {
        width: 8.125rem;
        margin: 0 auto 1rem
    }

    .cjban h2 {
        color: var(--Text-text-accent, #bd357a);
        font-size: 1.1875rem;
        font-weight: 700;
        line-height: 1.1;
        margin: 0 auto .5rem
    }

    .cjban p.h3 {
        font-size: .8125rem;
        line-height: 1.3;
        margin: 0 auto 1rem
    }

    .cjban a.btn {
        font-size: 19px;
        padding: .5rem;
        width: 180px;
        margin: 0 auto
    }

    @media (max-width:991px) {
        .cjban .col-12,
        .cjban .container {
            padding: 0;
            width: 100%
        }
        .cjban .row {
            margin: 0
        }
    }

    @media (min-width:768px) {
        .cjban .mob-wrapper {
            padding: 1.68421rem 3.368421rem;
            margin-top: 1rem
        }
        .cjban img {
            width: 9.375rem;
            margin: 0 auto .842105rem
        }
        .cjban h2 {
            font-size: 1.210526rem
        }
        .cjban p.h3 {
            font-size: .842105rem;
            line-height: 1.5;
            margin: 0 auto 1.68421rem
        }
    }

    @media (min-width:992px) {
        .cjban {
            background: #faf7f4;
            padding: 2.52631rem 0
        }
        .cjban .mob-wrapper {
            padding: 0;
            border: 0;
            text-align: left;
            margin: 0;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 2rem
        }
        .cjban h2 {
            margin: 0 0 .5rem
        }
        .cjban p.h3 {
            margin: 0;
            line-height: 1.4
        }
        .cjban a.btn {
            padding: .5rem 1.75rem
        }
    }
</style>