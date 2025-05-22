<script setup>
    
</script>

<template>
    <div class="benefits">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-7 order-1 order-md-2 px-md-0">
                    <h2>Convenient &amp; Delicious Support for:</h2>
                    <p class="h3">Low-Carb • High Protein • Intermittent Fasting • and more!</p>
                    <ul class="list-checked check-d-blue">
                        <li>Perfectly-portioned and under 300 calories.</li>
                        <li>Designed by dietitians for balanced nutrition; chef-crafted for satisfying indulgence.</li>
                        <li>Delivered conveniently right to your door.</li>
                        <li>Personalized 1-on-1 coaching and nutrition resources to help you stay on track.</li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-5 order-2 order-md-1">
                    <img src="https://www.jennycraig.com/media/jc/diet-plans/10082024/PlansFoodImage.webp" alt="various plates of food" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .benefits {
        background: #FAF7F4;
        padding:32px 0;
    }
    .benefits h2{
        font-size:1.75rem;
        font-weight:400;
        margin:0 0 8px;
    }
    .benefits p.h3{
        font-size:1.4375rem;
        font-weight:400;
        margin:0 0 16px;
    }
    .benefits .list-checked.check-d-blue > li{
        padding: 0 0 0 30px;
    }
    .benefits .list-checked.check-d-blue > li:before {
        background: url(https://www.jennycraig.com/media/jc/diet-plans/10082024/Checkmark_JennyBlue.svg) 0 0 no-repeat;
        width:20px;
        height:17px;
        top:3px;
    }
    @media(min-width:768px){
        .benefits h2{
            font-size:2.1rem;
        }
        .benefits .list-checked.check-d-blue > li{
            font-size:1rem;
        }
        .benefits img{
            margin-top:30px;
        }
    }
    @media(min-width:992px){
        .benefits h2{
            font-size:1.99rem;
        }
        .benefits p.h3 {
            font-size: 1.24rem;
        }
        .benefits .list-checked.check-d-blue > li{
            font-size:1.1875rem;
        }
        .benefits img{
            margin-top:0;
        }
    }
    @media(min-width:1200px){
        .benefits {
            padding: 16px 0;
        }
        .benefits h2{
            font-size:2.3rem;
            margin-top: 52px;
        }
        .benefits p.h3 {
            font-size: 1.47rem;
        }
    }
    @media(min-width:1440px){
        .benefits h2{
            font-size:2.5rem;
            margin-top: 100px;
        }
        .benefits p.h3 {
            font-size: 1.75rem;
        }
    }
</style>