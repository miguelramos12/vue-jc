<script setup>
    
</script>

<template>
    <section class="hiw">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">How Jenny Works</h2>
                </div>
            </div>
            <div class="row d-block d-lg-none">
                <div class="col-12">
                    <div id="hiw-carousel" class="carousel slide pointer-event" data-bs-ride="carousel">
                        <!-- Indicators -->
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#hiw-carousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
                            <button type="button" data-bs-target="#hiw-carousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                            <button type="button" data-bs-target="#hiw-carousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                        </div>
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner text-center">
                            <div class="carousel-item active">
                                <div class="hiw-img">
                                    <img src="https://www.jennycraig.com/media/JCC-8941/SelectYourOption.svg" alt="" class="img-fluid" loading="lazy">
                                </div>
                                <div class="hiw-copy">
                                    <h3 class="fw-700">1. Select Your Approach</h3>
                                    <p>Choose from our plans or subscribe to Club Jenny.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="hiw-img">
                                    <img src="https://www.jennycraig.com/media/JCC-8941/SelectYourFoods.svg" alt="" class="img-fluid" loading="lazy">
                                </div>
                                <div class="hiw-copy">
                                    <h3 class="fw-700">2. Choose Your Meals</h3>
                                    <p>From our menu of chef-crafted entrées and snacks.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="hiw-img">
                                    <img src="https://www.jennycraig.com/media/JCC-8941/StartLosingWeight.svg" alt="" class="img-fluid" loading="lazy">
                                </div>
                                <div class="hiw-copy">
                                    <h3 class="fw-700">3. Follow Your Plan</h3>
                                    <p>Enjoy delicious meals, expert nutritional guidance, and love your
                                        results.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Controls -->
                        <button class="carousel-control-prev left" type="button" data-bs-target="#hiw-carousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next right" type="button" data-bs-target="#hiw-carousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>


            <div class="row d-none d-lg-flex justify-content-sm-center align-items-sm-center gap-3 flex-nowrap">
                <div class="col-lg-4">
                    <div class="hiw-step">
                        <div class="hiw-img">
                            <img src="https://www.jennycraig.com/media/JCC-8941/SelectYourOption.svg" alt="" class="img-fluid" loading="lazy">
                        </div>
                        <div class="hiw-copy">
                            <p class="fw-700">1. Select Your Approach</p>
                            <p>Choose from our plans or subscribe to Club Jenny.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="hiw-step">
                        <div class="hiw-img">
                            <img src="https://www.jennycraig.com/media/JCC-8941/SelectYourFoods.svg" alt="" class="img-fluid" loading="lazy">
                        </div>
                        <div class="hiw-copy">
                            <p class="fw-700">2. Choose Your Meals</p>
                            <p>From our menu of chef-crafted entrées and snacks.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="hiw-step">
                        <div class="hiw-img">
                            <img src="https://www.jennycraig.com/media/JCC-8941/StartLosingWeight.svg" alt="" class="img-fluid" loading="lazy">
                        </div>
                        <div class="hiw-copy">
                            <p class="fw-700">3. Follow Your Plan</p>
                            <p>Enjoy delicious meals, expert nutritional guidance, and love your results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .hiw {
        padding: 24px 0 62px;
        background: #faf7f4;
    }

    .hiw .section-title {
        margin: 0 0 24px;
    }

    .hiw .carousel .hiw-copy h3 {
        margin-bottom: 8px;
        font-size: 1.1875rem;
        line-height: 1.1;
    }

    .hiw .carousel .hiw-copy p {
        margin-bottom: 0;
        min-height: 48px;
    }

    .hiw .carousel .hiw-img {
        min-height: 141px;
        margin-bottom: 16px;
    }

    .hiw .carousel .hiw-img img {
        margin: 0 auto;
    }

    .hiw .carousel .carousel-control {
        display: none;
    }

    .hiw .carousel-indicators {
        bottom: -50px;
    }

    .hiw .carousel-indicators li {
        width: 10px;
        height: 10px;
        background-color: #9b9c9c;
    }

    .hiw .carousel-indicators li.active {
        background-color: #16384e;
    }
    @media (min-width: 768px) {
        .hiw .carousel .hiw-copy h3 {
            font-size: 1.1875rem;
        }
        .hiw .carousel .hiw-copy p {
            font-size: 0.875rem;
        }
    }
    @media (min-width: 992px) {
        .hiw, .food, .solutions, .ba, .faq {
            padding: 64px 0;
        }
        .hiw .hiw-step {
            text-align: center;
        }
        
        .hiw .hiw-step .hiw-img {
            margin-bottom: 24px;
            height: 141px;
        }
        
        .hiw .hiw-step .hiw-img img {
            margin: 0 auto;
        }
        
        .hiw .hiw-copy h3 {
            margin-bottom: 4px;
        }
        
        .hiw .hiw-copy p {
            font-size: 0.875rem;
        }
    }
    @media (min-width: 1200px) {
        .hiw .hiw-copy p {
            width: 88%;
            margin: 0 auto;
        }
    }

</style>