<script setup>
    import DefaultBreadcrumb from '@/components/breadcrumbs/DefaultBreadcrumb.vue';
    import { ref } from 'vue';

    const pageBreadcrumbs = ref([
        { label: 'Home', route: '/'},
        { label: 'Contact Jenny Craig'}
    ])
</script>

<template>
    <main id="content" class="contact">
        <DefaultBreadcrumb :breadcrumbs="pageBreadcrumbs" />
        <div class="container">
            <div class="row py-4 mb-5">
                <div class="col-12 col-md-8 contact-container">
                    <h1 class="contact-us fw-700">Contact Us</h1>
                    <p class="sub-head">Whether you need help placing an order, have questions about your order or need to schedule time with a coach, Jenny Craig is here to help!</p>
                    <h2 class="fw-700">Call Customer Care</h2>
                    <div class="info-wrap"><a href="tel:800-536-6922" onclick="omni_track('CustomerCare:jennyCares')">800-JENNYCARES (800-536-6922)</a>
                        <p>Monday &mdash; Friday: 8:00am &mdash; 8:00pm ET</p>
                        <p>Saturday &amp; Sunday: 9:00am &mdash; 7:00pm ET </p>
                    </div>
                    <h2 class="fw-700">Weight Loss Advisors</h2>
                    <div class="info-wrap"><a href="tel:800-536-6922" onclick="omni_track('Advisors:jennyCares')">800-JENNYCARES (800-536-6922)</a>
                        <p>Monday &mdash; Friday: 8:00am &mdash; 8:00pm ET</p>
                        <p>Saturday: 9:00am &mdash; 7:00pm ET</p>
                        <p>Sunday: 9:00am &mdash; 7:00pm ET</p>
                    </div>
                    <h2 class="fw-700">For Weight Loss Coaching</h2>
                    <div class="info-wrap">
                        <p>Schedule a call with a weight loss coach! Log in to your account and select Schedule Coaching.</p>
                    </div>
                    <h2 class="fw-700">Can't Talk &mdash; Chat Us</h2> <a href="javascript:void(0)" onclick="omni_track('Chat'); chatClick();" class="text-decoration-none text-link-blue">Chat Now</a>
                    <div class="info-wrap">
                        <p>Monday &mdash; Friday: 8:00am &mdash; 8:00pm ET</p>
                        <p>Saturday: 9:00am &mdash; 7:00pm ET</p>
                        <p>Sunday: 9:00am &mdash; 7:00pm ET</p>
                    </div>
                </div>
                <div class="col-12 col-md-4 helpful-container">
                    <h2 class="fw-500 my-3 mt-md-0">Helpful Links</h2>
                    <div class="helpful-links">
                        <p><RouterLink to="/account/profile" onclick="omni_track('HL:Account');" class="btn btn-link fw-700 text-decoration-none p-0">Account</RouterLink></p>
                        <p><RouterLink to="/about" onclick="omni_track('HL:ContactUs');" class="btn btn-link fw-700 text-decoration-none p-0">About Us</RouterLink></p>
                        <p><RouterLink to="/about/faqs" onclick="omni_track('HL:FAQs');" class="btn btn-link fw-700 text-decoration-none p-0">FAQs</RouterLink></p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .contact h1 {
        font-size: 2rem;
        line-height: 2.25rem;
        margin-bottom: 1.5rem;
    }

    .contact .sub-head {
        margin-bottom: 1.5rem;
    }

    .contact h2 {
        margin-bottom: .75rem;
    }

    .contact .info-wrap {
        margin-bottom: 1.5rem;
    }

    .contact p {
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.6875rem;
        margin: .5rem auto;
    }

    .help-wrapper {
        flex-wrap: wrap;
    }

    .help-wrapper svg,
    .coaching-btn img {
        width: 45px;
        height: 45px;
    }

    .help-method-title {
        font-size: 1rem;
    }

    .help-wrapper .item {
        padding: 1.25rem 1rem;
        background-color: #FFFFFF;
        width: 195px;
        border: 1px solid #BFC2C4;
    }

    .help-wrapper a {
        color: #16384E;
        text-decoration: none;
    }

    .contact h2.contact-us {
        font-size: 2.0625rem;
        line-height: 1.1;
    }

    .contact .contact-container h2 {
        font-size: 1.1875rem;
        line-height: 1.1;
    }

    .contact .helpful-container h2 {
        font-size: 1.625rem;
        line-height: 1.1;
    }

    @media (min-width: 768px) {
        .contact h1 {
            font-size: 3rem;
        }
        .contact .contact-container h2 {
            font-size: 1.4375rem;
        }
        .contact .helpful-container h2 {
            font-size: 2.0625rem;
        }
        .contact p {
            font-size: 1.1875rem;
        }
    }
</style>