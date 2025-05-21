<script setup>
    import DefaultBreadcrumb from '@/components/breadcrumbs/DefaultBreadcrumb.vue';
    import { ref } from 'vue';

    const pageBreadcrumbs = ref([
        { label: 'Home', route: '/'},
        { label: 'About Us'}
    ])
</script>

<template>
    <main id="content">
        <DefaultBreadcrumb :breadcrumbs="pageBreadcrumbs" />
        <div class="container">
            <div class="row py-4 mb-5">
                <div class="col-12 col-md-8 about-container">
                    <h1 class="fw-700 mb-4-5">About Us</h1>
                    <p>The Jenny Craig plan has helped millions of people lose weight and live healthier lives. We're passionate about our customers and committed to helping them unlock the best version of themselves. Jenny Craig is committed to offering you the
                        best possible experience - bringing back the delicious food you know and love, personal coaching, amazing results and now home delivery.</p>
                    <p>Try Jenny Craig &mdash; and see how stress free losing weight can be!</p>
                </div>
                <div class="col-12 col-md-4 helpful-container">
                    <h2 class="fw-500 my-3 mt-md-0">Helpful Links</h2>
                    <div class="helpful-links">
                        <p class="mb-md-0">
                            <RouterLink to="/account/profile" onclick="omni_track('HL:Account');" class="btn btn-link fw-700 text-decoration-none p-0">
                                Account 
                            </RouterLink>
                        </p>
                        <p class="mb-md-0">
                            <RouterLink to="/about/contact" onclick="omni_track('HL:ContactUs');" class="btn btn-link fw-700 text-decoration-none p-0">
                                Contact Us 
                            </RouterLink>
                        </p>
                        <p
                            class="mb-md-0">
                            <RouterLink to="/about/faqs" onclick="omni_track('HL:FAQ');" class="btn btn-link fw-700 text-decoration-none p-0">
                                FAQs 
                            </RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>

</style>
