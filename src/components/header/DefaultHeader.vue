<script setup>
    import { RouterLink } from 'vue-router';
    import $ from "jquery";
    import { onMounted } from 'vue';
    import { useHeadersStore } from '@/stores/headers';

    const headersStore = useHeadersStore();

    onMounted(() => {
        /*hamburger toggle*/
        let navToggle = document.querySelector('.nav-toggle'); 
        let bars = document.querySelectorAll('.bar'); 
        function toggleHamburger(e) { bars.forEach(bar => bar.classList.toggle('x')) } 
        navToggle.addEventListener('click', toggleHamburger); 
        /*header dropdown slide*/ 
        $('header .dropdown').on('show.bs.dropdown', function (e) { 
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300); 
        }); 
        $('header .dropdown').on('hide.bs.dropdown', function (e) { 
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200); 
        }); 
        /*dropdown slide on dt*/ 
        if ($(window).width() >= 992) { 
            $('.navbar .dropdown').hover(
                function () { 
                    $(this).addClass('open');
                    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(); 
                }, 
                function () { 
                    $(this).removeClass('open');
                    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(); 
                }); 
        }; 
    })

    // go to href when dropdown is clicked, DT & MBL
    function dropdownLink(event){
        if((window.innerWidth >= 992 && event.currentTarget.parentElement.classList.contains('open')) || (window.innerWidth < 992 && !event.currentTarget.classList.contains('show'))){
            const dataHref = event.currentTarget.dataset.href;
            if(dataHref === '/why-jenny'){
                headersStore.updateActivePage(0);
            }
            window.location.href = dataHref;
        }
    }
    
    // omni_track placeholder - DO NOT INCLUDE IN PRODUCTION
    function omni_track(location) {
        console.log(`omni_track:${location}`);
    }

</script>

<template>
    <header class="default">
        <div class="container-fluid gx-0">
            <div class="logo-links-wrap bg-white d-flex flex-wrap justify-content-between align-items-center pt-2-5 flex-lg-nowrap justify-content-lg-start gap-lg-4 pb-lg-2-5">
                <div class="logo-wrap d-flex align-items-center gap-3 ms-3">
                    <div class="d-block d-lg-none mbl-hamb">
                        <a href="#" class="nav-toggle collapsed d-flex flex-column justify-content-between" data-bs-toggle="collapse" data-bs-target="#navMbl">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        </a>
                    </div>
                    <img src="https://www.jennycraig.com/images/jc/homepage/all-new-ban.svg" class="all-new-banner d-none d-xxl-block" alt="all new">
                    <RouterLink to="/" class="jenny-craig-logo d-block" @click="omni_track('JennyCraig:Logo');">
                        <img class="img-fluid" src="https://www.jennycraig.com/images/global/JennyCraigLogo.svg" alt="Jenny Craig"></RouterLink>
                </div>
                <ul class="nav nav-pills header-links d-flex align-items-center gap-3 me-3 order-lg-3 gap-lg-4-5 ms-lg-auto gap-xl-4">
                    <li id="navPhone" class="nav-item me-lg-4">
                        <a href="tel:+1-888-964-6465" @click="omni_track('CallSales:Nav');" class="text-decoration-none d-md-flex align-items-md-center gap-md-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="phone-icon d-block d-xl-none" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                            </svg>
                            <span class="mobile-number d-none d-md-block d-lg-none d-xl-block fw-700"><span class="d-block text-center fw-400">Call Us:</span>1-888-964-6465</span>
                        </a>
                    </li>
                    <li id="account" class="nav-item dropdown d-flex align-content-start d-none d-lg-block me-lg-4">
                        <a href="#" class="account-in nav-link dropdown-toggle px-3 py-2 d-xl-flex gap-xl-2 align-items-xl-center" @click="omni_track('MemberLogIn:header');" aria-label="account" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                            <svg class="account-login" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 22C9.875 22 7.1125 20.4 5.5 18C5.5375 15.5 10.5 14.125 13 14.125C15.5 14.125 20.4625 15.5 20.5 18C19.6736 19.2305 18.5573 20.2389 17.2495 20.9365C15.9416 21.634 14.4823 21.9992 13 22ZM13 4.25C13.9946 4.25 14.9484 4.64509 15.6517 5.34835C16.3549 6.05161 16.75 7.00544 16.75 8C16.75 8.99456 16.3549 9.94839 15.6517 10.6517C14.9484 11.3549 13.9946 11.75 13 11.75C12.0054 11.75 11.0516 11.3549 10.3483 10.6517C9.64509 9.94839 9.25 8.99456 9.25 8C9.25 7.00544 9.64509 6.05161 10.3483 5.34835C11.0516 4.64509 12.0054 4.25 13 4.25ZM13 0.5C11.3585 0.5 9.73303 0.823322 8.21646 1.45151C6.69989 2.07969 5.3219 3.00043 4.16117 4.16117C1.81696 6.50537 0.5 9.68479 0.5 13C0.5 16.3152 1.81696 19.4946 4.16117 21.8388C5.3219 22.9996 6.69989 23.9203 8.21646 24.5485C9.73303 25.1767 11.3585 25.5 13 25.5C16.3152 25.5 19.4946 24.183 21.8388 21.8388C24.183 19.4946 25.5 16.3152 25.5 13C25.5 6.0875 19.875 0.5 13 0.5Z" fill="#0881C7"></path>
                            </svg>
                            <span class="account-name-wrapper fw-500 d-none d-xl-flex flex-xl-column">
                                <span class="account-name">Sign In</span>
                                <span class="account-label">Account</span>
                            </span>
                        </a>
                        <ul id="account-menu" class="dropdown-menu p-3 border-0" aria-label="account dropdown">
                            <li class="signin-item mb-1">
                                <RouterLink class=" btn btn-default btn-xs-mobile" to="/login" @click="omni_track('SignIn:header')">Sign In <i class="bi bi-caret-right-fill"></i></RouterLink>
                            </li>
                            <li class="mb-1">
                                <RouterLink class="dropdown-item" to="/register" @click="omni_track('CreateAccount:header');">Create Account</RouterLink>
                            </li>
                            <li class="mb-1">
                                <RouterLink class="dropdown-item" to="/account" @click="omni_track('Dashboard:header');">My Dashboard</RouterLink>
                            </li>
                            <li class="mb-1">
                                <RouterLink class="dropdown-item" to="/account/profile" @click="omni_track('Profile:header');">My Profile</RouterLink>
                            </li>
                            <li class="mb-1">
                                <RouterLink class="dropdown-item" to="/account/manage-next-order" @click="omni_track('ManageAD:header');">Manage Auto-Ship</RouterLink>
                            </li>
                            <li class="mb-1">
                                <RouterLink class="dropdown-item" to="/account/orders" @click="omni_track('OrderHistory:header');">Order History</RouterLink>
                            </li>
                                <li>
                                <RouterLink class="dropdown-item" to="/find-my-order" @click="omni_track('FindMyOrder:header');">Find My Order</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li id="cart" class="nav-item cart me-lg-4">
                        <a id="mainNav" href="javascript:void(0)" aria-label=" cart"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3084 14.2554C18.7579 14.2567 19.1995 14.1371 19.5869 13.909C19.9742 13.6808 20.2931 13.3527 20.5099 12.9589L25.0121 4.79311C25.1179 4.60294 25.1723 4.3885 25.17 4.17091C25.1677 3.95332 25.1088 3.74007 24.999 3.55217C24.8893 3.36427 24.7325 3.20818 24.5441 3.09928C24.3557 2.99038 24.1422 2.93242 23.9246 2.9311H5.29725L4.11431 0.414185H0V2.9311H2.51692L7.04688 12.4768L5.348 15.5519C5.13706 15.9353 5.02953 16.367 5.03595 16.8045C5.04238 17.2421 5.16254 17.6704 5.38464 18.0474C5.60674 18.4245 5.92312 18.7372 6.3027 18.9549C6.68227 19.1727 7.11196 19.2879 7.54954 19.2892H22.6535V16.7723H7.54954L8.93306 14.2554H18.3084ZM6.49227 5.44802H21.7811L18.3084 11.7397H9.47439L6.49227 5.44802ZM7.54954 20.5519C7.05174 20.5519 6.56512 20.6995 6.15122 20.9761C5.73731 21.2527 5.41471 21.6458 5.22421 22.1057C5.03371 22.5656 4.98387 23.0716 5.08099 23.5599C5.1781 24.0481 5.41782 24.4966 5.76981 24.8486C6.12181 25.2006 6.57028 25.4403 7.05852 25.5374C7.54675 25.6345 8.05282 25.5847 8.51273 25.3942C8.97263 25.2037 9.36572 24.8811 9.64228 24.4672C9.91884 24.0533 10.0665 23.5666 10.0665 23.0688C10.0676 22.7378 10.0033 22.4098 9.87724 22.1036C9.7512 21.7975 9.56593 21.5193 9.33205 21.2849C9.09817 21.0506 8.82031 20.8648 8.51441 20.7382C8.20851 20.6116 7.88061 20.5466 7.54954 20.5471V20.5519ZM20.1329 20.5519C19.6351 20.5519 19.1485 20.6995 18.7346 20.9761C18.3207 21.2527 17.9981 21.6458 17.8076 22.1057C17.6171 22.5656 17.5672 23.0716 17.6644 23.5599C17.7615 24.0481 18.0012 24.4966 18.3532 24.8486C18.7052 25.2006 19.1537 25.4403 19.6419 25.5374C20.1301 25.6345 20.6362 25.5847 21.0961 25.3942C21.556 25.2037 21.9491 24.8811 22.2257 24.4672C22.5022 24.0533 22.6498 23.5666 22.6498 23.0688C22.651 22.7378 22.5866 22.4098 22.4606 22.1036C22.3346 21.7975 22.1493 21.5193 21.9154 21.2849C21.6816 21.0506 21.4037 20.8648 21.0978 20.7382C20.7919 20.6116 20.464 20.5466 20.1329 20.5471V20.5519Z" fill="#16384E"></path></svg> <!----></a>
                    </li>
                </ul>
                <nav class="navbar navbar-expand-lg p-0 mt-2-5 order-lg-2 mt-lg-0">
                    <div class="container-fluid gx-0">
                        <div class="collapse navbar-collapse" id="navMbl">
                        <ul class="navbar-nav fw-500 me-auto mb-lg-0 gap-lg-3 ps-lg-4 gap-xxl-4-5">
                            <li id="menu-shop-plans" class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle plans px-4 py-3 d-flex justify-content-between" href="#ShopPlansPanel" data-href="/plans-pricing" @click="omni_track('PlansPricing:Nav');dropdownLink($event)" role="button" data-bs-toggle="dropdown" aria-expanded="false">Plans &amp; Pricing
                                    <i class="d-block d-lg-none bi bi-chevron-right"></i>
                                </a>
                                <ul id="shopPlansPanel" class="dropdown-menu plans mt-0 pt-0 p-lg-2">
                                    <li>
                                        <RouterLink class="dropdown-item fw-500 ps-4-5 pe-4 py-3 p-lg-2" to="/diet-plans/program" @click="omni_track('JennyCraigProgramMenu:Nav');">Jenny Craig Program</RouterLink>
                                    </li> 
                                    <li>
                                        <RouterLink class="dropdown-item fw-500 ps-4-5 pe-4 py-3 p-lg-2" to="/diet-plans/meal-delivery-plan" @click="omni_track('MealDeliveryPlanMenu:MobNav');">Meal Delivery Plan</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink class="dropdown-item fw-500 ps-4-5 pe-4 py-3 p-lg-2" to="/club-jenny" @click="omni_track('ClubJennyMenu:MobNav');">Club Jenny </RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item" id="menu-view-menu">
                                <RouterLink class="nav-link menu px-4 py-3" to="/menu" @click="omni_track('ViewMenu:Nav')">Food Menu</RouterLink>
                            </li>
                            <li id="menu-why-jenny" class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle plans px-4 py-3 d-flex justify-content-between" href="#whyJennyPanel" data-href="/why-jenny" @click="omni_track('WhyJenny:Nav');dropdownLink($event)" role="button" data-bs-toggle="dropdown" aria-expanded="false">Why Jenny
                                    <i class="d-block d-lg-none bi bi-chevron-right"></i>
                                </a>
                                <ul id="whyJennyPanel" class="dropdown-menu plans mt-0 pt-0 p-lg-2">
                                    <li>
                                    <RouterLink class="dropdown-item ps-4-5 pe-4 py-3 fw-500 p-lg-2" to="/how-it-works" @click="omni_track('HowItWorks:MobNav');headersStore.updateActivePage(1)">How It Works</RouterLink>
                                    </li>
                                    <li>
                                    <RouterLink class="dropdown-item ps-4-5 pe-4 py-3 fw-500 p-lg-2" to="/stories" @click="omni_track('Stories:MobNav');headersStore.updateActivePage(2)">Stories</RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item d-lg-none" id="menu-my-account">
                                <RouterLink to="/login" class="nav-link px-4 py-3" @click="omni_track('MemberLogIn:header');">Log In</RouterLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div><!--END logo-links-wrap -->
        </div><!--END container-fluid-->
    </header>
</template>

<style scoped>
    header .jenny-craig-logo {
        width: 96px;
    }
    header .nav-toggle {
        width: 15px;
        height: 15px;
    }
    header .nav-toggle .bar {
        height: 3px;
        width: 100%;
        background-color: #000000;
        transition: all 100ms ease-in-out;
    }
    header .logo-links-wrap {
        border-bottom: 1px solid #e1e2e3;
    }
    header .nav-pills #account .dropdown-toggle::after,
    header .nav-item .dropdown-toggle::after {
        display: none;
    }
    header .header-links #account-menu {
        box-shadow: 0 10px 10px 0 rgb(51 51 51 / 65%);
        z-index: 10000;
    }
    header nav {
        width: 100%;
    }
    header .navbar .nav-link {
        font-size: 1.1875rem;
        color: #163950;
    }
    header .navbar-nav .dropdown-menu {
        border: none;
    }
    @media (max-width: 991px) { 
        header .header-links #account { 
            display: unset; 
        } 
        span#mainNav1.badge{ 
            background-color: #0881c7 !important;
        } 
        header .navbar .nav-link.show {
            background: #f2f2f2;
        }
        header nav .dropdown-menu.plans li {
            border-bottom: 1px solid #bfc2c4;
        }
    } 
    @media (min-width: 768px) {
        header .nav-pills #navPhone .mobile-number {
            font-size: 1.1875rem;
        }
        header .nav-pills #navPhone .mobile-number span {
            font-size: 1.4375rem;
        }
    }
    @media (min-width: 992px) {
        header .jenny-craig-logo {
            width: 144px;
        }
        header nav {
            width: fit-content;
        }
        header .navbar .nav-link {
            font-size: 1rem;
        }
        header .navbar-nav .dropdown-menu a {
            font-size: 1.1875rem;
        }
        header .navbar-nav .dropdown-menu {
            box-shadow: 0 10px 10px 0 rgba(51, 51, 51, 0.65);
        }
    }
    @media (min-width: 1200px) {
        header .nav-pills #navPhone .mobile-number {
            color: var(--bs-link-color);
        }
        header .nav-pills #navPhone .mobile-number span {
            color: #163950;
            font-size: 1.1875rem;
        }
        header .nav-link .account-name-wrapper {
            color: #163950;
            line-height: 1.1;
        }
        header .nav-link .account-label {
            font-size: 1.5rem;
        }
    }
    @media (min-width: 1400px) {
        header .navbar .nav-link {
            font-size: 1.1875rem;
        }
    }
    </style>