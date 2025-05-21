<script setup>
    import DefaultBreadcrumb from '@/components/breadcrumbs/DefaultBreadcrumb.vue';
    import { ref } from 'vue';

    const pageBreadcrumbs = ref([
        { label: 'Home', route: '/'},
        { label: 'FAQs'}
    ])
</script>

<template>
    <main id="content">
        <DefaultBreadcrumb :breadcrumbs="pageBreadcrumbs" />
        <div class="container">
            <div class="row py-4 mb-5">
                <div class="col-12 col-md-8 about-container">
                    <h1 class="fw-700 mb-4-5 mb-lg-5">Frequently Asked Questions</h1>
                    <h2 class="h6 fw-500 mb-3">I'm a new or returning customer, what do I need to know? </h2>
                    <div class="faq1-container mb-5">
                        <div id="accordionFAQ1" class="accordion faqs">
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('offProgram:Faq1');" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" class="accordion-button collapsed">
                                            What is the Jenny Craig Plan?
                                        </button></h2>
                                <div id="flush-collapseOne" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>Jenny Craig Home-Delivery Plan &mdash; Same great food, Same great weight loss &mdash; Delivered to your door!
                                            </li>
                                            <li>Shipment option (2-week shipment is Auto-Ship)</li>
                                            <li>2-week shipments includes:
                                                <ul>
                                                    <li>14 Recharge bars</li>
                                                    <li>14 breakfasts</li>
                                                    <li>14 lunches</li>
                                                    <li>14 dinners</li>
                                                    <li>14 snacks</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('offProgram:Faq2');" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" class="accordion-button collapsed">
                                            Are the recipes the same as before?
                                        </button></h2>
                                <div id="flush-collapseTwo" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>YES! Jenny Craig foods are many of the same recipes you know and love.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('offProgram:Faq3');" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                                            Can I still use my old Lifetime Membership?
                                        </button></h2>
                                <div id="flush-collapseThree" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>The NEW Jenny Craig is not affiliated with the previous company, ownership, or agreements. Good news, you don’t need it. The NEW Jenny Craig will not have a membership fee associated with plan purchases and every plan will
                                            include access to the full menu of food selections, delivered to your door for FREE. The plan also provides convenient access to our Coaches to help support you with your weight loss journey. And we will have special
                                            offers for former Jenny Craig members.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('offProgram:Faq4');" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                                            Where does Jenny Craig Ship to?
                                        </button></h2>
                                <div id="flush-collapseFour" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>Shipping is FREE for all 2-week auto-ship plan orders shipped within the Contiguous U.S.and select locations in Canada. 2-week plan orders include frozen and non-frozen food items. Your order will be delivered in one shipment.</p><br>
                                        <p>The processing and delivery time frame will take up to 1 to 5 business days from when the order is placed. However, this time frame may take up to 10 business days if the carrier experiences any delays.</p><br>
                                        <p>We are unable to ship outside of the Contiguous United States. Locations outside the Contiguous U.S. include AK, HI, Puerto Rico, APO and PO Boxes, military addresses, other U.S. territories and possessions. For Canada,
                                            we are unable to ship to areas outside British Columbia, Alberta and Ontario.</p><br>
                                        <p>The shipping fee to Canada is $49.99 (USD) for each order. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('offProgram:Faq5');" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                                            Will the NEW Jenny Craig be reopening centers?
                                        </button></h2>
                                <div id="flush-collapseFive" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>The NEW Jenny Craig will not have physical center locations. However, the NEW Jenny Craig will remain true to the core principles of structure, coaching and great food. Our support team will be available to you via phone,
                                            chat, and email. You can reference our Contact Us page for more information.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('offProgram:Faq6');" data-bs-toggle="collapse" data-bs-target="#faqflush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                                            What is the return policy?
                                        </button></h2>
                                <div id="faqflush-collapseSix" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>Non-Frozen and Frozen foods are non-refundable once the order begins to be fulfilled.
                                            </li>
                                            <li>Please note: Changes to your menu must be made by the 6pm ET cut off,the day before your order is to be fulfilled at our warehouse. Any changes made after this deadline will be applied to the following order.
                                            </li>
                                            <li>Orders that have entered fulfillment cannot be delayed or cancelled. You will be responsible for all charges.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('offProgram:Faq7');" data-bs-toggle="collapse" data-bs-target="#faqflush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                                            What is Auto-Ship?
                                        </button></h2>
                                <div id="faqflush-collapseSeven" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>Choosing Auto-Ship means your plan will be shipped to your door every 2 weeks!
                                            </li>
                                            <li>Stay on track with automatic shipping and billing where you can save up to half off of the retail value!
                                            </li>
                                            <li>Get reminders when your order is about to process!</li>
                                            <li>Delay, update or cancel your order anytime!</li>
                                            <li>Free shipping on EVERY 2-week order! * (Contiguous U.S.)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('offProgram:Faq18');" data-bs-toggle="collapse" data-bs-target="#faqflush-collapseSEight" aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                                            What are the dimensions of the package/weight?
                                        </button></h2>
                                <div id="faqflush-collapseSEight" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>The package dimensions are generally around 25 x 18 x 26 and can weigh 40 to 50lbs. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('offProgram:Faq9');" data-bs-toggle="collapse" data-bs-target="#faqflush-collapsesNine" aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                                            What payment methods can I use?
                                        </button></h2>
                                <div id="faqflush-collapsesNine" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>Jenny Craig accepts PayPal<sup>™</sup>, Apple Pay, Google Pay, Venmo, Visa, MasterCard, Discover, American Express credit card payments. We do not accept payment via Electronic Benefit Transfer. We are also unable to accept
                                            paper checks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('offProgram:Faq10');" data-bs-toggle="collapse" data-bs-target="#faqflush-collapsesTen" aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                                            When will my order be charged?
                                        </button></h2>
                                <div id="faqflush-collapsesTen" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>The funds for your order will be authorized and placed on hold on the auto-ship fulfilment date. Your method of payment is charged, and funds will be collected when your order is assigned a tracking number for shipping.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('offProgram:Faq11');" data-bs-toggle="collapse" data-bs-target="#faqflush-collapseeleven" aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                                            Does Jenny have an app?
                                        </button></h2>
                                <div id="faqflush-collapseeleven" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>Yes, Jenny Craig does have an app for active members.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('offProgram:Faq12');" data-bs-toggle="collapse" data-bs-target="#faqflush-collapsetwelve" aria-expanded="false" aria-controls="faqflush-collapsetwelve" class="accordion-button collapsed">
                                            How do I change or reset my password?
                                        </button></h2>
                                <div id="faqflush-collapsetwelve" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p class="fw-500">To change your password:</p>
                                        <ol>
                                            <li>Log into your account and Select MY PROFILE.</li>
                                            <li>Click UPDATE MY GENERAL INFORMATION.</li>
                                            <li>Select CHANGE PASSWORD.</li>
                                            <li>Requirements will display as you enter your new password.</li>
                                            <li>Select SAVE CHANGES at the bottom of your MY PROFILE.</li>
                                        </ol>
                                        <p class="fw-500">Forgot your password and need to reset it: </p>
                                        <ol>
                                            <li>Visit <RouterLink to="/login" onclick="omni_track('FAQ:Login');">https://www.jennycraig.com/login</RouterLink>.
                                            </li>
                                            <li>Select FORGOT PASSWORD.</li>
                                            <li>Enter your email address and select SEND.</li>
                                            <li>Find your Password Reset email and select the Reset Password link.</li>
                                            <li>Enter a new password and select Reset Password to save.</li>
                                            <li>You will automatically be logged in to your account.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" data-bs-toggle="collapse" data-bs-target="#faqflush-collapsethirteen" aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                                            How do I unsubscribe from receiving emails, call and texts?
                                        </button></h2>
                                <div id="faqflush-collapsethirteen" data-bs-parent="#accordionFAQ1" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p class="fw-700">Consumer with an account with Jenny Craig</p>
                                        <p>Step 1: Click here <a href="/unsubscribe" onclick="omni_track('FAQ:unsubscribe');" target="_blank">Unsubscribe</a> OR Log into <RouterLink to="/account/profile" onclick="omni_track('FAQ:Account');">My
                                                    Account</RouterLink></p>
                                        <p>Step 2: In My Profile, Select “Change My Account and Contact Preferences”</p>
                                        <p>Step 3: Email Preferences, update email preferences accordingly </p>
                                        <p>If you opt-out of promotional or newsletter emails from Jenny Craig, we may continue to send you certain transactional communications, such as service announcements and administrative messages relating to your account with
                                            us that are necessary to our relationship with you.</p>
                                        <p>Please be aware, at times customers may receive Jenny Craig offers, which are NOT Jenny Craig. This happens when an individual, at some point while browsing on the web, may opt to receive emails on a third party’s website
                                            to get information on diet or wellness.</p>
                                        <p>Unsubscribing takes 7 to 10 business days for the cycle to run through and update.
                                        </p>
                                        <p class="fw-700">Consumer without an account with Jenny Craig</p>
                                        <p>If you are receiving unwanted emails and you do not have an account with Jenny Craig, see one of the following suggestions to remove emails:</p>
                                        <p>Click unsubscribe at the bottom of the email you are receiving </p>
                                        <p>Delete the email from your mailbox</p>
                                        <p>Unsubscribing takes 7 to 10 business days for the cycle to run through and update.
                                        </p>
                                        <p class="fw-700">UNSUBSCRIBE FROM PHYSICAL MAIL</p>
                                        <p>Step 1: Log into My Account</p>
                                        <p>Step 2: In My Profile, Select Change My Account and Contact Preferences </p>
                                        <p>Step 3: After entering the Contact Preferences section, select the check box to opt out of direct mailers</p>
                                        <p class="fw-700">OPT OUT OF PHONE CALLS</p>
                                        <p>Step 1: Log into My Account</p>
                                        <p>Step 2: In My Profile, Select Change My Account and Contact Preferences</p>
                                        <p>Step 3: Call Preferences, update call preferences accordingly</p>
                                        <p class="fw-700">OPT OUT OF TEXT MESSAGES</p>
                                        <p>Step 1: Type STOP to the Text Message</p>
                                        <p>Step 2: Please check out our <RouterLink to="/about/privacy" onclick="omni_track('Faq8:Privacy');">Privacy
                                                    Policy</RouterLink> page for more information.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 class="h6 fw-500 mb-3">I've purchased a Jenny Craig Plan, what do I need to know? </h2>
                    <div class="faq2-container">
                        <div id="accordionFAQ2" class="accordion faqs">
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('onProgram:Faq1');" data-bs-toggle="collapse" data-bs-target="#faq2flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" class="accordion-button collapsed">
                                            What is the typical weight loss on the Jenny Craig Plan?
                                        </button></h2>
                                <div id="faq2flush-collapseOne" data-bs-parent="#accordionFAQ2" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>Lose up to 24 pounds in your first 8 weeks with an average weight loss of 22 pounds in 8 weeks.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('ofProgram:Faq2');" data-bs-toggle="collapse" data-bs-target="#faq2flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" class="accordion-button collapsed">
                                            What types of grocery foods should be added to the plan?
                                        </button></h2>
                                <div id="faq2flush-collapseTwo" data-bs-parent="#accordionFAQ2" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>Grocery foods are split into 6 different categories (see below). </p>
                                        <ul>
                                            <li>Note: See <RouterLink to="/account/grocery-guide" onclick="omni_track('FAQ:groceryGuide');">Grocery Guide</RouterLink> for specific food recommendations and serving sizes. Consume as directed on your menu (i.e., number of servings
                                                and time of day).
                                                <ul>
                                                    <li>Vegetables (non-starchy) - Servings unlimited, so long as you eat them without added fat. We recommend consuming at least 3 servings per day. Non-Starchy Vegetables (with no added fat) are approximately 25 calories,
                                                        5g carbohydrate and 2g protein per serving.
                                                    </li>
                                                    <li>Fruit or Starch - We recommend at least 1 fruit serving per day! In general: 1 fruit = 1 small or ½ large piece. These options are around 60- 80 calories and 15g carbohydrates.
                                                    </li>
                                                    <li>Protein or Dairy – Encourage selecting lean proteins and low or reduced fat dairy choices more often. You can replace any ½ Starch or 1 Healthy Fat with 1 Flavor Limited, if needed.
                                                    </li>
                                                    <li>Healthy Fats – Approximately 45 calories and 5g fat per serving</li>
                                                    <li>Flavor Unlimited (Free foods!) - optional add-ons and condiments that can be used to spice up your meal plan. Enjoy as many as you’d like (i.e., unlimited); 1 serving = less than 10 calories per serving.
                                                    </li>
                                                    <li>Flavor Limited - optional add-ons and condiments for your meal plan to add additional flavor! These are approximately 0-35 calories, enjoy up to 3 servings listed per day to stay on your plan. Should not be
                                                        consumed during the fasting period.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('ofProgram:Faq3');" data-bs-toggle="collapse" data-bs-target="#faq2flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                                            How can I schedule a coaching session?
                                        </button></h2>
                                <div id="faq2flush-collapseThree" data-bs-parent="#accordionFAQ2" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>From Jenny Craig "My Dashboard" select "<RouterLink to="/account/coaching" onclick="omni_track('Faq:scheduleCoaching');">schedule
                                                    coaching</RouterLink>" from left hand menu or top navigation and follow steps on screen
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('ofProgram:Faq4');" data-bs-toggle="collapse" data-bs-target="#faq2flush-collapseFour" aria-expanded="false" aria-controls="faq2flush-collapseFour" class="accordion-button collapsed">
                                            What are Flavor Unlimited and Flavor Limited foods on the Jenny Craig plan?
                                        </button></h2>
                                <div id="faq2flush-collapseFour" data-bs-parent="#accordionFAQ2" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>Flavor Unlimited –optional add-ons and condiments that can be used to spice up your meal plan. Enjoy as many as you’d like (i.e., unlimited); 1 serving = less than 10 calories per serving. *Reminder: during the fasting
                                                period only Recharge Bar, water, unsweetened tea and black coffee can be consumed.
                                            </li>
                                            <li>Flavor Limited - optional add-ons and condiments for your meal plan to add additional flavor! These are approximately 0-35 calories, enjoy up to 3 servings listed per day to stay on your plan. Should not be consumed
                                                during the fasting period. See full list of flavor unlimited/limited foods in the
                                                <RouterLink to="/account/grocery-guide" onclick="omni_track('FAQ4:groceryGuide');">Grocery
                                                        Guide</RouterLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('ofProgram:Faq5');" data-bs-toggle="collapse" data-bs-target="#faq2flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                                            How do I edit my order?
                                        </button></h2>
                                <div id="faq2flush-collapseFive" data-bs-parent="#accordionFAQ2" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>Editing your order online is easy! Follow the steps below to ensure you receive the items you most enjoy! </p>
                                        <ol>
                                            <li>After logging in to your account, click on the orange EDIT NEXT ORDER button.
                                                <ul>
                                                    <li>Review your order details: order fulfillment date and pricing, shipping and payment information, and if you have any discontinued or low inventory menu items.
                                                    </li>
                                                    <li>Retired items: You will not see these listed as part of your menu selection when editing.
                                                    </li>
                                                    <li>Low inventory: You will not be able to add any additional items that are low inventory. If you choose to keep these on your menu, they may be substituted.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>Click on one of the Edit buttons for a specific meal occasion to start your changes.
                                                <ul>
                                                    <li>A message will display letting you know how many menu items you need to add or remove. Your order will not save if the order does not contain the correct number of food items for each meal occasion.
                                                    </li>
                                                    <li>If you choose to not make any changes, you will receive the same items in your last order unless there are substitutions due to retired or low inventory items.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>Click on SAVE &amp; REVIEW to finalize your changes
                                                <ul>
                                                    <li>After saving, you will once again see the details of your upcoming order. Double check this page to ensure that changes to your menu were saved and all of the information associated with your order is correct.
                                                    </li>
                                                    <li>*Keep an eye out for the email, “Time Is Running Out To Make Changes to Your Order,” two days prior to your auto-ship date.
                                                    </li>
                                                    <li>Please note: Changes to your menu must be made by the 6pm ET cut off, the day before your order is fulfilled at our warehouse. Any changes made after this deadline will be applied to your next scheduled order.
                                                        Orders that have entered fulfillment cannot be edited, delayed or cancelled. You will be responsible for all charges.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('ofProgram:Faq6');" data-bs-toggle="collapse" data-bs-target="#faq2flush-collapseSix" aria-expanded="false" aria-controls="faq2flush-collapseSix" class="accordion-button collapsed">
                                            How do I change the date of my next order?
                                        </button></h2>
                                <div id="faq2flush-collapseSix" data-bs-parent="#accordionFAQ2" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p class="fw-500">Follow the steps below if you need to update your next order’s fulfillment date.</p>
                                        <ol>
                                            <li>After logging in to your account, click on DELAY/RESUME MY ORDER or MOVE NEXT SHIPMENT UP.
                                            </li>
                                            <li>Select your new fulfillment date from the calendar.</li>
                                        </ol>
                                        <p class="fw-500">If you are delaying your order:</p>
                                        <ol>
                                            <li>Under the PLEASE NOTE section you will be given a timeframe for when you can delay.
                                            </li>
                                            <li>When opening up the calendar to delay, you may only be given a few dates to choose from in order to stay within your timeframe.
                                            </li>
                                            <li>If you have exceeded the amount of allowable delay days, you will receive a message to call our Customer Care Department.
                                            </li>
                                            <li>You will receive an email confirmation after this change. Please make sure that your new fulfillment date is correct.
                                            </li>
                                            <li>*Keep an eye out for the email, “Time Is Running Out To Make Changes to Your Order,” 1 day prior to your next auto-ship date. This email is a reminder to make any menu/date changes to your next order. <br>Please note:
                                                Delaying your order <strong>will not cancel</strong> an order. You have until the 6pm ET cut off, the day before your order’s fulfillment date to make changes to the date or the menu. Orders that have entered fulfillment,
                                                cannot be delayed or cancelled. You will be responsible for all charges.
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button type="button" onclick="omni_track('ofProgram:Faq7');" data-bs-toggle="collapse" data-bs-target="#faq2flush-collapseSeven" aria-expanded="false" aria-controls="faq2flush-collapseSeven" class="accordion-button collapsed">
                                            How can I track my order?
                                        </button></h2>
                                <div id="faq2flush-collapseSeven" data-bs-parent="#accordionFAQ2" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>You will receive an email confirmation when your order ships, with your order number and a link to track your order. You can also log into My Account to see your order and tracking information. If your order is shipped
                                            by FedEx, sign up for FedEx Delivery Manager<sup>®</sup> to receive alerts and the latest updates on your order. <a href="https://www.fedex.com/en-us/delivery-manager.html" target="_blank">FedEx Delivery Manager</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 helpful-container">
                    <h2 class="fw-500 my-3 mt-md-0">Helpful Links</h2>
                    <div class="helpful-links">
                        <p class="mb-md-0"><RouterLink to="/account/profile" onclick="omni_track('HL:Account');" class="btn btn-link fw-700 text-decoration-none p-0">Account
                                </RouterLink></p>
                        <p class="mb-md-0"><RouterLink to="/about/contact" onclick="omni_track('HL:ContactUs');" class="btn btn-link fw-700 text-decoration-none p-0">Contact Us
                                </RouterLink></p>
                        <p class="mb-md-0"><RouterLink to="/about/faqs" onclick="omni_track('HL:FAQs');" class="btn btn-link fw-700 text-decoration-none p-0">FAQs
                                </RouterLink></p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    
</style>