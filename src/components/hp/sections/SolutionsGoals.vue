<script setup>
    
</script>

<template>
    <section class="solutions">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">Solutions for Your Goals</h2>
                    <p class="section-subtitle">Choose the option that best fits your goal &amp; lifestyle. Personalized support &amp; resources are always included.</p>
                </div>
            </div>
            <div class="row flex-column flex-lg-row">
                <div class="col">
                    <div class="solution jc">
                        <div class="solution-copy">
                            <div>
                                <h3 class="solution-title">Jenny Craig Program</h3>
                                <p>A simple, science-based plan, with all your meals delivered</p>
                                <p class="sub">Lose up to 24 lbs. in your first 8 weeks*</p>
                            </div>
                            <div>
                                <p class="text-brand-blue">As low as $132/week with code JENNY4ME</p>
                            </div>
                        </div>
                        <RouterLink href="/diet-plans/program" class="btn btn-default text-white" onclick="omni_track('StartPlan:JennyCraigProgram')">Start Plan</RouterLink>
                    </div>
                </div>
                <div class="col">
                    <div class="solution low-carb">
                        <div class="solution-copy">
                            <div>
                                <h3 class="solution-title">Meal Delivery Plan</h3>
                                <p>A simple plan with 2 daily meals provided + FREE access to Club Jenny</p>
                                <p class="small">Terms &amp; Conditions Apply</p>
                            </div>
                            <div>
                                <p class="text-brand-blue">Starting for as low as $66/week with code JENNY4ME</p>
                            </div>
                        </div>
                        <RouterLink href="/diet-plans/meal-delivery-plan" class="btn btn-default text-white" onclick="omni_track('StartPlan:MealDeliveryPlan')">Start Plan</RouterLink>
                    </div>
                </div>
                <div class="col">
                    <div class="solution cj">
                        <div class="solution-copy">
                            <div>
                                <h3 class="solution-title">Club Jenny</h3>
                                <p>Access to your choice of meals that support your weight loss</p>
                                <p class="small">Terms &amp; Conditions Apply</p>
                            </div>
                            <div>
                                <p class="text-brand-blue">Get $100 in FREE Meals</p>
                            </div>
                        </div>
                        <RouterLink href="/club-jenny" class="btn btn-default text-white" onclick="omni_track('JoinToday:CJ')">Join Today</RouterLink>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <p class="disclaimer small">*In a study, avg weight loss was 22 lbs in 8 weeks.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .solutions {
        padding: 32px 0;
        background-color: #faf7f4;
    }

    .solutions .section-title {
        margin: 0 0 10px;
    }

    .solutions .section-subtitle {
        margin-bottom: 16px;
    }

    .solutions .solution {
        padding: 16px;
        background-color: #fff;
        max-width: 443px;
        margin: 0 auto 1rem;
    }

    .solutions .solution.cj {
        border: 1px solid #bd357a;
        border-top: 16px solid #bd357a;
    }

    .solutions .solution.jc {
        border: 1px solid #0881c7;
        border-top: 16px solid #0881c7;
    }

    .solutions .solution.low-carb {
        border: 1px solid #16384e;
        border-top: 16px solid #16384e;
    }

    .solutions .solution-title {
        margin-bottom: 10px;
        font-size: 1.4375rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.1;
    }

    .solutions .solution.cj .solution-title span {
        color: #bd357a;
        font-style: italic;
    }

    .solutions p:not(.solution-title, .solution-subtitle, .section-subtitle) {
        margin-bottom: 8px;
    }

    .solutions .solution-subtitle {
        margin-bottom: 10px;
        font-size: 0.8125rem;
        font-style: italic;
        font-weight: 400;
        line-height: 1.3;
    }

    .solutions .solution.low-carb .solution-title {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .solutions p.text-brand-blue {
        font-size: 1rem;
        line-height: 1.3;
        font-weight: 500;
    }

    .solutions .solution a.btn {
        font-size: 1rem;
        padding: 4px 8px;
    }

    .solutions .sub {
        font-size: 0.8125rem;
        line-height: 1.3;
    }

    .solutions p.starting {
        font-size: 0.8125rem;
        line-height: 1.3;
        color: #7e7e7f;
        margin-bottom: 4px;
    }

    .solutions .solution.cj .solution-copy>div:last-child>p:first-child {
        margin-bottom: 8px;
    }
    .solutions .small {
        color: #16384e;
        padding-bottom: .5rem;
    }
    .solutions .flex-row .col {
        padding: 0 1rem;
    }

    .solutions .solution.cj .btn {
        margin-top: 0px;
        line-height: 30.8px;
        margin: 0 0 0 0;
    }
    @media (min-width: 768px) {
        .solutions .section-subtitle {
            font-size: 1rem;
        }
        .solutions .solution-copy p.small {
            font-size: 0.8125rem;
        }
    }
    @media (min-width: 992px) {
        .solutions {
            padding: 64px 0;
        }
        .solutions .solution {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .solutions .solution-title {
            font-size:1.4375rem;
        }
        .solutions .solution.low-carb {
            margin-left: auto;
        }

        .solutions .solution a.btn {
            width: fit-content;
        }

        .solutions .solution-copy {
            min-height: 162px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .solutions .solution-copy>div:first-child {
            min-height: 148px;
        }
        .solutions .solution-copy > div:last-child {
            min-height: 50px;
            align-content: end;
        }
        .solutions .solution-copy>p.text-brand-blue {
            margin-bottom: 1rem;
        }

        .solutions .solution-copy > div:first-child p:not(.solution-title, .solution-subtitle, .section-subtitle):nth-child(2) {
            margin-bottom: 6px;
        }
        .solutions .flex-lg-row {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
        }

        .solutions .flex-lg-row .col {
            padding: 0;
        }
    }
    @media (min-width: 1200px) {
        .solutions .solution-copy>p.text-brand-blue {
            min-height: auto;
        }

        .solutions .solution {
            max-width: 25.9rem;
        }
        .solutions .solution-copy > div:first-child {
            min-height: 124px;
        }
        .solutions .solution.low-carb {
            margin: 0 0 0 auto;
        }
    }
    @media (min-width: 1440px) {
        .solutions .solution {
            min-height: 250px;
        }
    }
</style>