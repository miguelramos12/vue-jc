<script setup>
    
</script>

<template>
    <section class="ba">
        <div class="container">
            <div class="ba-content">
                <div class="ba-img">
                    <img src="https://www.jennycraig.com/media/JCC-13836/B&amp;A Image.webp" alt="Brooke Testimony" class="img-fluid" loading="lazy">
                </div>
                <div class="ba-body mb-3">
                    <div class="title text-left">
                        "I was so excited to live again and stop hiding."
                    </div>
                    <p class="review-copy">Brooke lost 50 lbs</p>
                    <p>
                        Brooke is a full-time teacher and mother who knows just how important it is to
                        balance time and energy. After trying other plans, Jenny Craig finally worked for
                        her—with deliciously satisfying meals, plus the support and advice from the
                        Jenny coaching team. Her absolute favorite meal is dessert and she loves the Lemon
                        Cake!
                    </p>

                </div>
            </div>
            <div class="ba-footer text-center">
                <div class="cta-wrapper mb-3">
                    <RouterLink to="/stories" class="btn btn-default text-white" onclick="omni_track('ReadMore:Testimony')">Read More Real Life Stories</RouterLink>
                </div>
                <div class="small pad">*Real success stories. Compensated for appearance. Expect to lose an avg 1-2 lbs per week.</div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .ba {
        padding: 32px 0;
    }

    .ba .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ba-body .title {
        font-size: 1.75rem;
        line-height: 1.1;
        font-weight: 400;
        text-align: left;
        margin-top: 22px;
        margin-bottom: 16px;
    }

    .ba-footer .small {
        width: 327px;
    }

    .ba-footer .cta-wrapper .btn {
        font-size: 1rem;
        padding: 0.8rem 1.7rem;
    }
    @media (min-width: 768px) {
        .ba-content .ba-body p:not(.title) {
            font-size: 1rem;
        }
        .ba-content {
            display: flex;
            justify-content: center;
            gap: 40px;
            max-width: 848px;
            margin-bottom: 30px;
        }

        .ba-body .title {
            font-size: 1.5rem;
        }

        .ba-img, .ba-body {
            width: 50%;
        }

        .ba-footer .cta-wrapper .btn {
            font-size: 1rem;
            padding: 1rem 2rem;
        }
    }
    @media (min-width: 992px) {
        .ba {
            padding: 64px 0;
        }
    }
</style>