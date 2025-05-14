<script setup>
    
</script>

<template>
    <section class="love-jenny">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">You'll Love Jenny!</h2>
                </div>
            </div>
            <div class="row reasons">
                <div class="col-12 col-xl-4">
                    <div class="reason">
                        <div class="reason-img">
                            <img src="https://www.jennycraig.com/media/JCC-13836/DeliciousSimplicity-Image.webp" alt="Mac &amp; Cheese with vegetables" class="img-fluid" loading="lazy">
                        </div>
                        <div class="reason-copy">
                            <h3 class="reason-title fw-500">Delicious Simplicity</h3>
                            <p>Get the unmatched convenience of calorie-conscious meals, prepared with fresh
                                ingredients and full of flavor.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-4">
                    <div class="reason">
                        <div class="reason-img">
                            <img src="https://www.jennycraig.com/media/JCC-13836/PersonalSupport-Image.webp" alt="Personal Support" class="img-fluid" loading="lazy">
                        </div>
                        <div class="reason-copy">
                            <h3 class="reason-title fw-500">Personal Support</h3>
                            <p>Connect with caring coaches and a community of friends for inspiration and
                                guidance.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-4">
                    <div class="reason">
                        <div class="reason-img">
                            <img src="https://www.jennycraig.com/media/JCC-13836/MindfulSatisfaction-Image.webp" alt="Food resource" class="img-fluid" loading="lazy">
                        </div>
                        <div class="reason-copy">
                            <h3 class="reason-title fw-500">Effective Approach</h3>
                            <p>Support your weight loss goals with dietitian-designed menu plans &amp; resources
                                for optimal nutrition.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="row-review">
                    <p class="review-quote text-center">“It was effective and it works. Jenny Craig
                        has
                        everything that I need.”
                    </p>
                    <div class="review">
                        <div class="review-img">
                            <img src="https://www.jennycraig.com/media/JCC-13836/Venae.webp" alt="Venae" class="img-fluid" loading="lazy">
                        </div>
                        <div class="review-copy">Venae, lost 18 lbs*</div>
                    </div>
                </div>
                <div class="text-center row-headline">
                    See for yourself why so many people have experienced life-changing results.
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .love-jenny {
        padding: 24px 0;
    }

    .love-jenny .section-title {
        margin: 0 0 24px;
    }

    .love-jenny .reason {
        margin-bottom: 24px;
        display: flex;
        gap: 12px;
    }

    .love-jenny .reason.mbl-flip {
        flex-direction: row-reverse;
    }

    .love-jenny .reason-img {
        max-width: 165px;
        width: 125px;
    }

    .love-jenny .reason-copy {
        width: 80%;
    }

    .love-jenny .reason-title {
        margin-bottom: 4px;
        font-size: 1.1875em;
        font-style: normal;
        line-height: 1.5;
    }

    .love-jenny .reason-copy>p:last-child {
        margin-bottom: 0;
    }

    .love-jenny .row-review {
        display: flex;
        flex-direction: column;
    }

    .love-jenny .review-quote {
        font-size: 1em;
        font-style: italic;
        line-height: 1.5;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .love-jenny .review {
        padding: 8px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .love-jenny .review-img {
        width: 56px;
    }

    .love-jenny .row-headline {
        font-size: 1.4375em;
        line-height: 1.1;
        font-weight: 400;
        margin-top: 1rem;
    }
    @media (min-width: 768px) {
        .love-jenny .reason-title {
            font-size: 1em;
        }

        .love-jenny .reason-copy>p:last-child, 
        .love-jenny .review-quote, 
        .love-jenny .review-copy {
            font-size: 0.842105em;
        }

        .love-jenny .row-headline {
            font-size: 1.473684em;
            line-height: 1.1;
            margin-top: 24px;
	    }
    }
    @media (min-width: 992px) {
        .love-jenny, .hiw, .food, .solutions, .ba, .faq {
            padding: 64px 0;
        }

        .love-jenny .reason {
            gap: 24px;
        }

        .love-jenny .row-review {
            flex-direction: row;
            justify-content: center;
            gap: 8px;
        }

        .love-jenny .review {
            max-width: 889px;
            gap: 8px;
            justify-content: center;
        }

        .love-jenny .review-img {
            width: 50px;
        }

        .love-jenny .review-quote {
            margin: 0;
        }

        .love-jenny .review-quote span {
            margin: 0 0 0 8px;
            display: inline-block;
            font-size: 1em;
        }
    }
    @media (min-width: 1200px) {
        .love-jenny .reason {
            gap: 12px;
            align-items: start;
        }

        .love-jenny .reason.mbl-flip {
            flex-direction: row;
        }
    }
    @media (min-width: 1440px) {
        .love-jenny .reasons .col-xl-3 {
            width: 25%;
        }

        .love-jenny .reason-copy>p:last-child {
            min-height: 171px;
        }
    }
</style>