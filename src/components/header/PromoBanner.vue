<script setup>
    
</script>

<template>
    <div class="jc-top-banner bg-dark-blue sticky-top d-lg-flex justify-content-lg-center align-items-lg-center">
        <div class="container-fluid">
            <a href="#topPromoBanner" class="banner-head text-white text-decoration-none w-100 py-2 d-flex gap-3 justify-content-between align-items-center justify-content-md-center gap-lg-4-5" data-bs-toggle="modal" data-bs-target="#topPromoBanner" onclick="omni_track('Seeofferdetails:TopPromo');">
                <span class="banner-promo">Jenny Meal Plans Starting at Just $66/Week! <span class="d-block d-sm-inline text-white">Use Code: JENNY4ME</span></span>
                <span class="banner-details small text-decoration-underline">details</span>
            </a>
        </div>
    </div>
    <div class="top-promo-modal modal fade" id="topPromoBanner" tabindex="-1" role="dialog" aria-labelledby="topPromoBannerLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="promoBannerLabel">
                        Jenny Meal Plans Starting at Just $66/Week! <span class="d-block d-sm-inline">Use Code: JENNY4ME</span>
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="savings mb-3">
                        <p class="mb-2"><strong>SAVE BIG ON OUR UNIQUELY YOURS PLAN!</strong></p>
                        <p>Get breakfasts, lunches, dinners and snacks delivered to your door.</p>
                        <ul>
                            <li>Only $249 for Uniquely Yours for women</li>
                            <li>Only $284 for Uniquely Yours for men</li>
                        </ul>
                    </div>
                    <div class="bonus-savings mb-3">
                        <p><strong>BONUS SAVINGS:</strong></p>
                        <p>Get 50% off a month of Hunger Control Shakes. Get 28 servings in your choice of flavors: Chocolate, Vanilla or both! Enjoy shakes with every auto-delivery shipment.
                        </p>
                    </div>
                    <div class="card p-2">
                        <h5 class="fw-700 mb-1">
                            <i class="bi bi-tag-fill"></i>
                            How to Redeem:
                        </h5>
                        <p>To activate your offer: Use code SPRING at checkout. You'll also have the option to add shakes to your order. The 50% off is automatically applied when you add shakes!</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <p class="small">†Sale prices are as follows: $249 for Uniquely Yours for women, $284 for Uniquely Yours for men, $299 for Max+ for women 5-day plan, $349 for Max+ for men 5-day plan, $349 for Max+ for women 7-day plan and $399 Max+ for men 7-day plan. Discount on plan off full retail price and valid on first shipment for new customers only. Auto-delivery required. Early termination fee may apply. 7-day money back guarantee, less shipping. With this offer, you are automatically charged and shipped your plan once every 2-4 weeks unless you cancel. This offer is not transferable. 50% off shakes on first shipment only.</p>
                    <p class="small">
                    <strong>MONEY BACK GUARANTEE</strong>: If you're not satisfied with your first order, call 1-800-727-8046 within the first 7 days and send the remaining food back for a full refund, less shipping. Good on new 4-week plans, first order only. Limit one per customer.
                    </p>
                    <div class="btn-wrap">
                    <button type="button" class="btn btn-info d-block d-md-none" aria-label="Close" data-dismiss="modal">
                        Close
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .jc-top-banner {
        z-index: 1060;
    }
    .jc-top-banner .banner-head {
        font-size: 0.8125rem;
    }
    @media (min-width: 992px) {
        .jc-top-banner {
            height: 65px;
        }
        .jc-top-banner .banner-head {
            font-size: 1rem;
        }
    }
</style>