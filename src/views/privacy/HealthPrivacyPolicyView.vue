<script setup>
    import DefaultBreadcrumb from '@/components/breadcrumbs/DefaultBreadcrumb.vue';
    import { ref } from 'vue';

    const pageBreadcrumbs = ref([
        { label: 'Home', route: '/'},
        { label: 'Health Privacy Policy'}
    ])
</script>

<template>
    <main id="content">
        <DefaultBreadcrumb :breadcrumbs="pageBreadcrumbs" />
        <div class="container">
            <div class="row py-4 mb-5">
                <div class="col-12 col-md-8 about-container">
                    <h1 class="h2 fw-700">Health Privacy Policy</h1>
                    <p>Effective: October 21, 2024</p>
                    <p>This Health Privacy Policy will tell you how JCR Holdings II, LLC ("JCR Holdings II, “Jenny Craig”, “we,” or “us”) collects, uses, shares, and protects information about you that may be considered consumer health data (“health data”) under
                        certain state laws. We urge you to read our entire Health Privacy Policy so that you will understand our privacy practices.</p>
                    <p>By interacting with Jenny Craig through our websites, mobile application(s), products, services, and any other platforms that link to this health privacy policy and providing your health data, you acknowledge the practices described in this
                        privacy policy. Where required by law, Jenny Craig will obtain consent for collecting, using, sharing, or selling your health data. For more information on how Jenny Craig handles information about you, please read our full <RouterLink to="/about/privacy">Privacy Policy</RouterLink></p> <br>
                    <h3 class="h6 fw-700">Types of Health Data We Collect</h3>
                    <p>For purposes of this Health Privacy Policy, consumer health data means personal information that is linked or reasonably linkable to a consumer and that identifies the consumer's past, present, or future physical or mental health status.</p>
                    <p>The categories of consumer health data we may collect from you include the following:
                    </p>
                    <ul>
                        <li><strong>Medical Information:</strong> including information about health conditions (such as obesity or being underweight), symptoms, status, diagnoses, diagnostic testing, medication (such as diabetes and A1C testing), or treatments (e.g.,
                            purchase of certain health-related items that may identify such information); measurements of bodily functions, vital signs, or other characteristics (e.g., height, weight, BMI, and physical activity); social, psychological, behavioral,
                            and medical interventions, such as dieting, exercise plans, and coaching; use or purchase of prescribed medication (such as weight loss and weight management medications); and reproductive and sexual health information (such as information
                            pertaining to conditions affecting aging populations).</li>
                        <li><strong>User Interaction Information:</strong> including information collected that could identify your attempt to acquire or receive health care services or products (e.g., search on Jenny Craig website for certain health-related products
                            or in-store health services provided by third parties).</li>
                        <li><strong>Precise Location Information:</strong> information that may indicate your attempt to acquire or receive health services or products (e.g., when you use the Jenny Craig mobile application to find certain health-related products
                            or in-store health services provided by third parties).</li>
                        <li><strong>Other Information</strong> that you provide to us on a voluntary basis and that may be used to infer or derive data related to the above or other health information.</li>
                    </ul>
                    <p></p> <br>
                    <h2 class="h4 fw-700">How We Collect Your Health Data</h2>
                    <p>We may collect consumer health data from you in a few different ways, including:</p>
                    <ul>
                        <li>Information you provide directly to us (such as when you sign up for a membership or weight loss plan).</li>
                        <li>Information you share through interactions with our products and services. </li>
                        <li>Information from third parties (such as third-party applications or devices, if you allow these applications to share your data).</li>
                        <li>Information from publicly available sources.</li>
                    </ul>
                    <h2 class="h4 fw-700">How We Use Your Health Data</h2>
                    <p>Health data we collect is used for a variety of business and commercial purposes as described in our <RouterLink to="/about/privacy">Privacy Policy</RouterLink> to the extent permitted by applicable state laws.</p>
                    <p>We primarily collect and use health data as reasonably necessary for the following purposes, including, but not limited to:</p>
                    <ul>
                        <li>Product and service fulfillment (e.g., fulfill orders, manage returns/exchanges, web/mobile app features). </li>
                        <li>Internal operations essential to supporting those activities (e.g., improving products and services, analyzing our performance, inventory management, conducting research and development).</li>
                        <li>Business transfers.</li>
                        <li>For marketing purposes (e.g. information about our company, including customer surveys, advertising, or providing you with information about products and offers and sending you communications).</li>
                        <li>Prevention, detection, protection against, and response to security incidents, identity theft, fraud, harassment, malicious or deceptive activities, or any activity that is illegal under certain state laws or federal law; compliance with
                            laws; preservation of the integrity and security of our systems; and to investigate, report, or prosecute those responsible for any illegal action under certain state laws or federal law.</li>
                    </ul>
                    <p>As required, we will obtain your consent for these and other uses of your health data. Jenny Craig or third parties may collect personal information over time and across different websites/online services when consumers use Jenny Craig’s website/online
                        services for advertising purposes. To the extent health data (as defined by applicable state laws) is included in this personal information, it will not be collected or shared without your consent where required by law.</p>
                    <p>Note that you may still receive marketing that includes health-related content as marketing may be based on a variety of factors unrelated to your individual health data (e.g., geography, season, context of site/page, demographic information).</p>
                    <br>
                    <h2 class="h4 fw-700">How We Share Your Health Data</h2>
                    <p>We may share each of the categories of consumer health data described above with the categories of third parties below. As required by law, we will obtain your consent to share health data with third parties if it is not for a purpose considered
                        reasonably necessary, necessary for provision of Jenny Craig or Jenny Craig app services, or otherwise permitted by law. We also do not “sell” consumer health data, as that term is defined by certain state laws. </p>
                    <ul>
                        <li>Jenny Craig Subsidiaries and Affiliates – Jenny Craig Corporation and its associated subsidiaries and affiliates own and operate Jenny Craig websites and mobile application(s). Jenny Craig Corporation subsidiaries and affiliates also include
                            Nutrisystem, Inc., Wellful, Inc., Direct Digital LLC d/b/a Adaptive Health, and Healthy Directions, LLC.</li>
                        <li>Service Providers – companies that provide support services to us who may need information about you, including health data, in order to perform their functions (e.g., product and service fulfillment activities)</li>
                        <li>Third Parties</li>
                        <ul>
                            <li>Business Partners—e.g. retail partners.</li>
                            <li>Advertising Networks—e.g., entities supporting online advertising activities.</li>
                            <li>Operational and Technology Support—e.g., payment processors, internet service providers, data analytics providers, operating systems and platforms.</li>
                            <li>Legal, Risk and Security—e.g., government agencies, law enforcement, business transfer related companies to the extent required or permitted by law.</li>
                            <li>Other Third Parties—e.g., at your direction or with your consent.</li>
                        </ul>
                    </ul> <br>
                    <h2 class="h4 fw-700">How to Exercise Your Rights</h2>
                    <p>If you are a Nevada or Washington resident, you have certain rights related to your health data:</p>
                    <ul>
                        <li><strong>The right to confirm</strong> whether we are collecting, sharing, or selling consumer health data we have collected about you. </li>
                        <li><strong>The right to opt-out</strong> of the collection, sharing, or sale of your consumer health data.</li>
                        <li><strong>The right to access</strong> consumer health data we have collected about you. If you are a Nevada resident, you also have the right to access a list of all third-party recipients to whom we have shared or sold your consumer health
                            data. </li>
                        <li><strong>The right to request that we delete</strong> the consumer health data we collected about you.</li>
                        <li>If you are a Nevada resident, <strong>the right to request we cease collecting or</strong> sharing consumer health data about you. Please note that if you cease our collection or sharing of consumer health data, we may be unable to provide
                            you with some services. </li>
                        <li><strong>The right not to receive discriminatory treatment</strong> for the exercise of the consumer health rights listed above.</li>
                    </ul>
                    <p>If you or an authorized agent wish to exercise these rights, you can submit a request using one of the methods listed below:</p>
                    <ul>
                        <li>Phone: 1-888-914-9661 PIN: 898901</li>
                        <li>Web Link: <a href="https://privacyportal.onetrust.com/webform/4c2d79f7-9e3b-4583-9222-e96f3c7f2fee/6e9cb085-dfe2-4a58-987f-5adb0836e869">https://privacyportal.onetrust.com/webform/4c2d79f7-9e3b-4583-9222-e96f3c7f2fee/6e9cb085-dfe2-4a58-987f-5adb0836e869</a></li>
                    </ul>
                    <p>Please provide us with the following information when making any such request:</p>
                    <ul>
                        <li>Name</li>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>E-mail address</li>
                        <li>Identify the Request (e.g., “Access Rights Request”)</li>
                        <li>State of Residence</li>
                    </ul>
                    <p>If you reside in another state and would like to exercise a privacy right related to your personal information, including sensitive information, please see our general <RouterLink to="/about/privacy">Privacy Policy</RouterLink>.</p>
                    <p>If you previously provided consent, then you can withdraw consent by changing the applicable settings in your account or contacting <a href="mailto:Privacy@JennyCraig.com.">Privacy@JennyCraig.com.</a></p>
                    <p>You will be required to submit information about yourself that Jenny Craig will use to determine if we have information about you. If we are able to locate information about you, then we will fulfill your right to know, opt-out, access or
                        delete request. Any privacy rights request you submit to us is subject to a verification process. We will not fulfill your request unless you have provided sufficient information for us to reasonably verify you are the consumer about whom
                        we have collected consumer health data. Please follow the instructions we provide to you and promptly respond to any follow-up inquiries so that we may confirm your identity. If you are an authorized agent, then you will be required to
                        submit your contact information and complete a certification form as well as provide information about the customer for whom you are making a request. </p>
                    <p>If you have submitted a request that we have not reasonably fulfilled, you may appeal our decision with respect to a request you have submitted by emailing us at Privacy@JennyCraig.com with “Notice of Appeal” in the subject line. </p>
                    <p>If you are a Jenny Craig customer from another state, please see our <RouterLink to="https://www.jennycraig.com/about/privacy">Privacy Policy</RouterLink> for information about rights you may have regarding your personal information.</p>
                    <br>
                    <h2 class="h4 fw-700">Changes to this Policy</h2>
                    <p>Jenny Craig reserves the right to amend this Health Privacy Policy at any time. If Jenny Craig changes its privacy practices, a new Health Privacy Policy will reflect those changes and the effective date of the revised Health Privacy Policy
                        will be set forth at the top of this section. <strong>We encourage you to review this Health Privacy Policy periodically.</strong></p> <br>
                    <h2 class="h4 fw-700">How to Contact Us</h2>
                    <p>Mail:<br> JCR Holdings II, LLC<br> 1100 Virginia Drive, Suite 175<br> Fort Washington, PA 19034<br> Phone:
                        <br> 1-800-585-5483 <br> Email:
                        <br> <a href="mailto:Privacy@JennyCraig.com.">Privacy@JennyCraig.com.</a></p>
                </div>
            </div>
        </div>
    </main>
</template>

<style>

</style>
