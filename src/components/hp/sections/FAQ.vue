<script setup>
    
</script>

<template>
    <section class="faq mb-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="section-title mb-3">Frequently Asked Questions</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="accordion" id="faq-accordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" onclick="omni_track('FAQ1')">
                                    What is the Jenny Craig plan?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faq-accordion">
                                <div class="accordion-body">
                                    <p>The Jenny Craig plan offers bi-weekly shipments of daily meals for
                                        a guided plan that keeps you on track and takes the guesswork out of
                                        meal prepping.</p>
                                    <p>Shipment option (2-week shipment is Auto-Ship)</p>
                                    <p>2-week shipments include:</p>
                                    <ul>
                                        <li>14 breakfasts</li>
                                        <li>14 lunches</li>
                                        <li>14 dinners</li>
                                        <li>14 snacks</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onclick="omni_track('FAQ2')">
                                    What is Club Jenny?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faq-accordion">
                                <div class="accordion-body">
                                    <p>Club Jenny is a weight loss &amp; wellness solution with individual
                                        meals, support &amp; resources. You'll receive exclusive full menu
                                        access as an option available for a specific subscription period.
                                        Choose the meals you want, with no minimum purchase required, and
                                        have them delivered to your location for a flat $20 per shipment. If
                                        you select Auto-Ship, you receive an additional 10% off with each
                                        order!</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onclick="omni_track('FAQ3')">
                                    Where does Jenny ship?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faq-accordion">
                                <div class="accordion-body">
                                    <p>Shipping is FREE for all 2-week auto-ship plan orders shipped within
                                        the Contiguous U.S. 2-week plan orders include frozen and non-frozen
                                        food items. Your order will be delivered in one shipment.</p>
                                    <p>The processing and delivery time frame will take up to 1 to 5
                                        business days from when the order is placed. However, this time
                                        frame may take up to 10 business days if the carrier experiences any
                                        delays.</p>
                                    <p>We are unable to ship outside of the Contiguous U.S. Locations
                                        outside the Contiguous U.S. include AK, HI, Puerto Rico, APO and PO
                                        Boxes, military addresses, other U.S. territories and possessions
                                        and Canada areas outside British Columbia, Alberta and Ontario.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" onclick="omni_track('FAQ4')">
                                    What is Auto-Ship?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faq-accordion">
                                <div class="accordion-body">
                                    <p>Auto-Ship means your order will be shipped to you every 2 weeks.
                                        Prior to each shipment, you will receive communications to notify
                                        you about your upcoming order.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" onclick="omni_track('FAQ5')">
                                    Does Jenny Craig offer coaching?
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faq-accordion">
                                <div class="accordion-body">
                                    <p>Yes! Coaching is available with all Jenny Craig plans and Club Jenny.
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSix">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" onclick="omni_track('FAQ6')">
                                    What payment methods can I use?
                                </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faq-accordion">
                                <div class="accordion-body">
                                    <p>Jenny Craig accepts PayPal<sup>™</sup>, Apple Pay, Google Pay, Venmo,
                                        Visa, MasterCard, Discover, American Express credit card payments.
                                        We do not accept payment via Electronic Benefit Transfer. We are
                                        also unable to accept paper checks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
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
    .faq #faq-accordion {
        max-width: 1170px;
        margin: 0 auto;
    }

    .faq #faq-accordion .panel-default {
        border: none;
        border-bottom: 1px solid #bfc2c4;
    }

    .faq #faq-accordion .panel-heading {
        border-color: #fff0;
        background-color: #fff;
    }

    .faq #faq-accordion .panel-title>a {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .faq .section-maintitle {
        font-size: 1.75em;
        line-height: 1.1;
        text-align: center;
    }
    .faq .accordion-item {
        border: none;
        border-bottom: 1px solid #bfc2c4;
    }

    .faq .accordion-button::after {
        background-image: none;
        content: "\F64D";
        font-family: bootstrap-icons;
        font-weight: bold;
    }

    .faq .accordion-button:not(.collapsed)::after {
        background-image: none;
        transform: none;
        content: "\2014";
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
    @media (min-width: 768px) {
        .section-title {
            font-size: 2.125rem;
        }
        
        .faq {
            padding: 24px 0;
        }

        .faq .section-maintitle {
            font-size: 1.736842em;
            line-height: 1.1;
        }

        .faq #faq-accordion .panel-title>a {
            font-size: 1rem;
        }
    }
    @media (min-width: 992px) {
        .faq {
            padding: 64px 0;
        }
    }
</style>