<script setup>
    
</script>

<template>
    <footer>
        <div class="container">
            <div class="links-wrap">
                <img src="https://www.jennycraig.com/images/global/JennyCraigLogo.svg" class="jc-logo" alt="jenny craig">
                <div class="links">
                    <ul class="list-unstyled">
                        <li><RouterLink href="/about" onclick="omni_track('AboutUs:Footer')">About Us</RouterLink></li>
                        <li><RouterLink href="/account/profile" onclick="omni_track('Account:Footer')">Account</RouterLink></li>
                        <li><RouterLink href="/about/contact" onclick="omni_track('ContactUs:Footer')">Contact Us</RouterLink></li>
                        <li><RouterLink href="/about/privacy" onclick="omni_track('PrivacyPolicy:Footer')">Privacy Policy</RouterLink>
                        </li>
                        <li><RouterLink href="/about/privacy?healthprivacy" onclick="omni_track('HealthPrivacyPolicy:Footer');">Health Privacy Policy</RouterLink>
                        </li>
                        <li><RouterLink href="/about/terms-conditions" onclick="omni_track('Terms:Footer')">Terms &amp; Conditions</RouterLink></li>
                        <li><RouterLink href="/about/faqs" onclick="omni_track('FAQ:Footer')">FAQs</RouterLink></li>
                        <li><RouterLink href="/sitemap" onclick="omni_track('Sitemap:Footer')">Sitemap</RouterLink></li>
                        <li><a href="https://blog.jennycraig.com/" target="_blank" onclick="omni_track('Sitemap:Blog')">Blog</a></li>
                    </ul>
                </div>
                <div class="get-offers">
                    <p class="head">Get money-saving offers!</p>
                    <p class="sub">Join our mailing list for special deals and unsubscribe any time.</p>
                    <form class="email-lead" id="email-lead">
                        <input type="hidden" name="_token" value="PeUljhKBPngn8mmQwJz2jDXAHuK67dA11fE4qYrM">
                        <input type="email" class="" required="" placeholder="Enter Email Address" id="emailFooter">
                        <button type="submit" class="btn btn-default" onclick="omni_track('Email:JoinNow')">Join Now</button>
                    </form>
                    <div class="footer-form-msg"></div>
                </div>
                <!--email entered success-->
                <div class="get-offers d-none">
                    <div class="joined text-center">
                        <p class="head">Thanks for joining!</p>
                        <p class="sub">Stay tuned for special offers and more.</p>
                    </div>
                </div>
            </div>
            <div class="row footer-icon-links">
                <div class="col-xs-12 d-block d-md-none col-sm-6 col-md-6 col-lg-4 text-center download-apps">
                    <p class="head fw-500 ">Download the Jenny Craig App now!</p>
                    <div class="app-icons d-sm-flex flex-sm-column gap-sm-3 d-md-block">
                        <a href="https://apps.apple.com/us/app/jenny-craig/id6476941202" target="_blank" class="me-2 me-sm-0 me-md-2" onclick="omni_track('Footer:AppStore')">
                            <img src="https://www.jennycraig.com/media/jc/footer/apple-app-store-icon.svg" alt="Apple App Store" style="height: 40px;">
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.wellful.jennycraig" target="_blank" onclick="omni_track('Footer:GooglePlay')">
                            <img src="https://www.jennycraig.com/media/jc/footer/google-play-icon.svg" alt="Google Play Store" style="height: 40px;">
                        </a>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-7 col-lg-7">
                    <div class="social-links def">
                        <a href="https://www.facebook.com/jennycraig" target="_blank" class="fb-link" onclick="omni_track('Footer:Facebook')"><img src="https://www.jennycraig.com/media/jc/footer/fb-foot-icon.svg" alt="facebook"></a>
                        <a href="https://www.instagram.com/jennycraigofficial/" target="_blank" class="insta-link" onclick="omni_track('Footer:Instagram')"><img src="https://www.jennycraig.com/media/jc/footer/instgram-foot-icon.svg" alt="facebook"></a>
                        <a href="https://twitter.com/jennycraig" class="x-link" target="_blank" onclick="omni_track('Footer:X')"><img src="https://www.jennycraig.com/media/jc/footer/x-foot-icon.svg" alt="facebook"></a>
                    </div>
                    <div class="disclaimers">
                        <p class="small">Jenny Craig<sup>®</sup> and related trademarks are registered trademarks and trademarks in the United States and/or other countries, owned by JCR Holdings II, LLC.
                        </p>
                        <p class="small">©2025 JCR Holdings II, LLC. All Rights Reserved.</p>
                        <p class="small" style="display: flex; gap:.25rem; align-items: center;"><img src="https://www.jennycraig.com/media/jc/footer/privacy.svg" alt="Privacy Options"> <a href="https://privacyportal.onetrust.com/webform/4c2d79f7-9e3b-4583-9222-e96f3c7f2fee/6e9cb085-dfe2-4a58-987f-5adb0836e869" target="_blank">Your Privacy Choices </a></p>
                    </div>
                </div>
                <div class="col-xs-12 d-none d-md-block col-md-5 col-lg-4 text-center download-apps">
                    <p class="head fw-500 ">Download the Jenny Craig App now!</p>
                    <div class="app-icons">
                        <a href="https://apps.apple.com/us/app/jenny-craig/id6476941202" target="_blank" class="me-2" onclick="omni_track('Footer:AppStore')">
                            <img src="https://www.jennycraig.com/media/jc/footer/apple-app-store-icon.svg" alt="Apple App Store" style="height: 40px;">
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.wellful.jennycraig" target="_blank" onclick="omni_track('Footer:GooglePlay')">
                            <img src="https://www.jennycraig.com/media/jc/footer/google-play-icon.svg" alt="Google Play Store" style="height: 40px;">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        background: var(--background-background-mid, #ECE7E1);
        padding: 1.875rem 0;
    }

    footer .jc-logo {
        width: 145px;
        height: auto;
    }

    footer .links-wrap {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }

    footer .links ul {
        margin: 0;
        column-count: 2;
    }

    footer .footer-nav a.nav-link {
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5;
    }

    footer .links ul li {
        line-height: 1.3;
    }

    footer .links ul li a {
        color: var(--text-text-primary, #16384E);
        font-weight: 500;
        text-decoration: none;
        font-size: 1rem;
    }

    footer .app-icons {
        padding-top: .5em;
    }

    footer a.me-2 {
        color: transparent;
    }

    footer .get-offers p.head {
        font-size: 1.1875rem;
        margin-bottom: .5rem;
    }

    footer .get-offers p.sub {
        font-size: 0.6875rem;
        font-weight: 500;
        margin-bottom: .5rem;
    }

    footer .get-offers form {
        display: flex;
        align-items: center;
    }

    footer .get-offers button {
        font-size: 1.188rem;
        line-height: 1;
        width: 123px;
        height: 38px;
        padding: .5rem 0;
        border-radius: 0px 4px 4px 0px;
    }

    footer input#emailFooter {
        border-radius: 4px 0px 0px 4px;
        border: 1px solid var(--border-border-primary, #9B9C9C);
        padding: 0 .5rem;
        height: 38px;
    }

    footer .disclaimers {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding-top: 1.5rem;
    }

    footer .ccpa {
        text-decoration: underline;
    }

    footer ::placeholder {
        color: var(--border-border-primary, #9B9C9C);
        font-size: 0.813rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        position: relative;
        bottom: 0.188rem;
    }

    footer.myaccount-footer {
        background-color: #ECE7E1;
        padding: 1.25rem 0 6.25rem;
    }

    footer .social-links {
        display: flex;
        gap: 1.313rem;
        justify-content: left;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        border-top: none;
    }

    footer .footer-icon-links {
        border-top: 1px solid #9B9C9C;
        padding-top: 1.5rem;
    }

    @media(max-width:767px) {
        footer.myaccount-footer .jenny-footer-logo {
            width: 144px;
            height: auto;
            margin-bottom: 1.25rem;
        }
    }

    @media(max-width:320px) {
        footer input#emailFooter {
            width: 80%;
        }
        footer .social-icons-links {
            padding-top: 1em;
        }
    }

    @media(max-width:540px) {
        footer input#emailFooter {
            width: 80%;
        }
        footer .social-icons-links {
            padding-top: 1em;
        }
        footer .social-links {
            display: flex;
            gap: 1.313rem;
            justify-content: center;
            padding-top: 1.5rem;
        }
        footer .links ul li {
            line-height: 1.85;
        }
    }

    @media (min-width: 576px) {
        footer .container {
            padding-right: calc(var(--bs-gutter-x)* 0.15);
            padding-left: calc(var(--bs-gutter-x)* 0.15);
        }
    }

    @media(min-width:768px) {
        footer .jc-logo {
            margin-bottom: 1.875rem;
        }
        footer .links-wrap {
            gap: 0px;
            margin-bottom: 1.875rem;
        }
        footer .links {
            flex-grow: 1;
        }
        footer .links ul {
            column-count: 1;
        }
        footer .links ul li {
            display: inline-block;
            margin: 0 1.875rem 1rem 0;
        }
        footer .links ul li a {
            font-size: 1rem;
        }
        footer.myaccount-footer .small.ccpa-ca a {
            font-weight: 400;
            text-decoration: none;
        }
        footer.myaccount-footer .small.disclaimer {
            color: #16384e;
            margin: 1.1rem 1rem 0 0rem;
        }
        footer.myaccount-footer .copyright {
            margin-top: 1rem;
            text-align: right;
        }
        footer.myaccount-footer .small.ccpa-ca {
            line-height: 1.8;
        }
    }

    @media(min-width:992px) {
        footer .links-wrap {
            display: flex;
            flex-direction: row;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
            align-items: flex-start;
        }
        footer .links ul {
            column-count: 2;
            width: 300px;
            margin: 0 auto;
        }
        footer .jc-logo {
            margin-bottom: 0px;
        }
    }

    @media(min-width:1200px) {
        footer .links ul {
            column-count: 3;
            width: 580px;
            margin: 0;
        }
        footer .links ul li {
            margin: 0 0 1rem 0;
            width: 110px;
        }
    }

    @media(min-width:1440px) {
        footer .jc-logo {
            margin-right: 1.25rem;
        }
        footer .links ul {
            column-count: 5;
            width: 775px;
        }
        footer .links-wrap {
            margin-bottom: 1.5rem;
        }
        footer .links ul li {
            margin: 0 0 1rem 0;
            width: 150px;
        }
    }
</style>