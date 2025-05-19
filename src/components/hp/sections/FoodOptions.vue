<script setup>
    
</script>

<template>
    <section class="food">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">Enjoy Satisfying Flavors for Every Occasion</h2>
                    <p class="section-subtitle">Kick-start healthy weight loss and indulge in seasonal picks
                        &amp; customer favorites!</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 food-col">
                    <div class="food-wrapper" tabindex="0" aria-label="Food Options">
                        <div class="food-item">
                            <RouterLink to="/menu/breakfast/Blueberry-Muffin" onclick="omni_track('BlueberryMuffin')">
                                <div class="food-img">
                                    <img src="https://www.jennycraig.com/media/JCC-12851/BlueberryMuffin.webp" alt="" class="img-fluid" loading="lazy">
                                    <div class="new-badge">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="28" viewBox="0 0 57 28" fill="none">
                                            <path d="M0 0H57L48.0588 15L57 28H0V0Z" fill="#0875B5"></path>
                                        </svg>
                                        <span class="text-white fw-700">New</span>
                                    </div>
                                </div>
                                
                                <p class="food-title">Blueberry Muffin</p>
                            </RouterLink>
                        </div>
                        <div class="food-item">
                            <RouterLink to="/menu/snacks-desserts/Carrot-Cake" onclick="omni_track('CarrotCake')">

                                <div class="food-img">
                                    <img src="https://www.jennycraig.com/media/JCC-11780/CarrotCake.webp" alt="" class="img-fluid" loading="lazy">
                                </div>
                                
                                <p class="food-title">Carrot Cake</p>
                            </RouterLink>
                        </div>
                        <div class="food-item">
                            <RouterLink to="/menu/breakfast/Cheddar-Cheese-Omelet" onclick="omni_track('CheddarOmelet')">
                                <div class="food-img">
                                    <img src="https://www.jennycraig.com/media/JCC-12851/CheddarOmelet.webp" alt="" class="img-fluid" loading="lazy">
                                </div>
                                
                                <p class="food-title">Cheddar Cheese Omelet</p>
                            </RouterLink>
                        </div>
                        <div class="food-item">
                            <RouterLink to="/menu/lunch-dinner/Ham-Swiss-Baguette" onclick="omni_track('HamSwissBaguette')">
                                <div class="food-img">
                                    <img src="https://www.jennycraig.com/media/JCC-13247/HamSwissBaguette.webp" alt="" class="img-fluid" loading="lazy">
                                    <div class="new-badge">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="28" viewBox="0 0 57 28" fill="none">
                                            <path d="M0 0H57L48.0588 15L57 28H0V0Z" fill="#0875B5"></path>
                                        </svg>
                                        <span class="text-white fw-700">New</span>
                                    </div>
                                </div>
                                
                                <p class="food-title">Ham &amp; Swiss Baguette</p>
                            </RouterLink>
                        </div>
                        <div class="food-item">
                            <RouterLink to="/menu/breakfast/Cinnamon-Rolls" onclick="omni_track('CinnamonRolls')">
                                <div class="food-img">
                                    <img src="https://www.jennycraig.com/media/JCC-11780/CinnamonRolls.webp" alt="" class="img-fluid" loading="lazy">
                                </div>
                                
                                <p class="food-title">Cinnamon Rolls</p>
                            </RouterLink>
                        </div>
                        <div class="food-item">
                            <RouterLink to="/menu/lunch-dinner/Chicken-Fajita" onclick="omni_track('ChickenFajita')">
                                <div class="food-img">
                                    <img src="https://www.jennycraig.com/media/JCC-12851/ChickenFajita.webp" alt="" class="img-fluid" loading="lazy">
                                    <div class="new-badge">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="28" viewBox="0 0 57 28" fill="none">
                                            <path d="M0 0H57L48.0588 15L57 28H0V0Z" fill="#0875B5"></path>
                                        </svg>
                                        <span class="text-white fw-700">New</span>
                                    </div>
                                </div>
                                
                                <p class="food-title">Chicken Fajita</p>
                            </RouterLink>
                        </div>
                        <div class="food-item">
                            <RouterLink to="/menu/snacks-desserts/Chocolate-Lava-Cake" onclick="omni_track('ChocolateLavaCake')">
                                <div class="food-img">
                                    <img src="https://www.jennycraig.com/media/JCC-12851/LavaCake.webp" alt="" class="img-fluid" loading="lazy">
                                </div>
                                
                                <p class="food-title">Chocolate Lava Cake</p>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-12 food-cta-wrapper text-center mb-3">
                    <RouterLink to="/menu" class="fw-500 text-decoration-none" onclick="omni_track('ViewMenu')">View Menu <i class="bi bi-caret-right-fill"></i></RouterLink>
                </div>
            </div>
            <div class="text-center small pad">serving suggestioins</div>
        </div>
    </section>
</template>

<style scoped>
    .food {
        padding: 24px 0 32px;
    }

    .food .leaficon {
        width: 51px;
        margin: 0 auto 8px;
        display: block;
    }

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

    .food .section-title {
        margin: 0 0 10px;
    }

    .food .section-subtitle {
        font-size: 1em;
        line-height: 1.5;
        margin-bottom: 16px;
    }

    .food .food-item {
        width: 180px;
    }

    .food .food-img {
        margin-bottom: 16px;
        position: relative;
    }

    .food .food-rating .glyphicon-star {
        color: #0881c7;
        font-size: 0.8em;
        width: 10px;
    }

    .food .food-rating .glyphicon-star.gray {
        color: #e1e2e3;
    }

    .food .food-title {
        margin-bottom: 0;
        font-size: 0.8125em;
        line-height: 1.3;
        color: var(--bs-body-color);
    }

    .food .food-item .new-badge {
        position: absolute;
        right: 0;
        top: 0;
    }

    .food .food-item .new-badge span {
        position: absolute;
        left: 7px;
        top: 2px;
    }

    .food .food-col {
        overflow: hidden;
        overflow-x: scroll;
    }

    .food .food-wrapper {
        margin-bottom: 16px;
        min-width: 1404px;
        display: flex;
        gap: 24px;
    }

    .food a:hover {
        color: #16384e;
        text-decoration: none;
    }

    .food .food-cta-wrapper {
        margin-top: 16px;
    }

    .food .food-cta-wrapper a {
        font-size: 1.1875em;
        line-height: 1.5;
    }

    .food .food-cta-wrapper a span, .food .food-cta-wrapper a:hover, .food .food-cta-wrapper a span:hover {
        color: #0881c7;
    }
    .food a {
        text-decoration: none;
        text-align: center
    }
    @media (min-width: 768px) {
        .section-title {
            font-size: 2.125rem;
        }
        .food .section-subtitle {
            font-size: 1.1875rem;
        }
        .food .food-title {
            font-size: 0.68421em;
        }

        .food .food-cta-wrapper a, .solutions .section-subtitle {
            font-size: 1em;
        }

        .food .leaficon {
            width: 58px;
            margin: 0 14px 0 0;
            display: inline-block;
        }

        .food .food-item .new-badge span {
            font-size: 0.842105rem;
        }
    }
    @media (min-width: 992px) {
        .food {
            padding: 64px 0;
        }
    }
    @media (min-width: 1440px) {
        .food .food-wrapper {
            margin: 0 auto 24px;
            width: 1404px;
        }

        .food .food-col {
            overflow: hidden;
        }
    }
</style>