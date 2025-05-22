<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        card: {
            type: Object,
            required: true,
        }
    });
</script>

<template>
    <RouterLink :to="card.route" onclick="omni_track('Card:JennyCraigProgram')" class="card" :class="card.cardClass">
        <h2>{{ card.title }}</h2>
        <hr>
        <div class="card-copy mb-4">
            <p class="h3 mb-3">{{ card.tagline }}</p>
            <ul>
                <li v-for="(detail, index) of card.details" :key="index">
                    {{ detail }}
                </li>
            </ul>
        </div>
        <div class="price fw-500 mb-3 d-md-flex flex-md-column justify-content-md-end">
            <div class="save-wrapper mb-2 d-flex gap-2-5 justify-content-center align-items-center gap-xl-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none" class="save-icon" v-if="card.cardColor === '#0881C7' || card.cardColor === '#0875B5'"><g clip-path="url(#clip0_147_1052)"><path d="M15.427 26H0.802034C0.379534 26 0.0437012 25.6642 0.0437012 25.2417V0.758333C0.0437012 0.335833 0.379534 0 0.802034 0H15.427C15.7087 0 15.9579 0.151667 16.0879 0.39L22.8479 12.6317C22.9779 12.8592 22.9779 13.1408 22.8479 13.3683L16.0879 25.61C15.9579 25.8483 15.6979 26 15.427 26Z" fill="#0881C7"></path></g><defs><clipPath id="clip0_147_1052"><rect width="22.9125" height="26" fill="white" transform="translate(0.0437012)"></rect></clipPath></defs></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none" class="save-icon" v-if="card.cardColor === '#16384E'"><g clip-path="url(#clip0_188_206)"><path d="M15.4271 26H0.80208C0.37958 26 0.0437469 25.6642 0.0437469 25.2417V0.758333C0.0437469 0.335833 0.37958 0 0.80208 0H15.4271C15.7087 0 15.9579 0.151667 16.0879 0.39L22.8479 12.6317C22.9779 12.8592 22.9779 13.1408 22.8479 13.3683L16.0879 25.61C15.9579 25.8483 15.6979 26 15.4271 26Z" fill="#16384E"></path></g><defs><clipPath id="clip0_188_206"><rect width="22.9125" height="26" fill="white" transform="translate(0.0437469)"></rect></clipPath></defs></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none" class="save-icon" v-if="card.cardColor === '#BD357A'"><g clip-path="url(#clip0_147_818)"><path d="M15.927 26H1.30203C0.879534 26 0.543701 25.6642 0.543701 25.2417V0.758333C0.543701 0.335833 0.879534 0 1.30203 0H15.927C16.2087 0 16.4579 0.151667 16.5879 0.39L23.3479 12.6317C23.4779 12.8592 23.4779 13.1408 23.3479 13.3683L16.5879 25.61C16.4579 25.8483 16.1979 26 15.927 26Z" fill="#BD357A"></path></g><defs><clipPath id="clip0_147_818"><rect width="22.9125" height="26" fill="white" transform="translate(0.543701)"></rect></clipPath></defs></svg>
                <span class="fw-700 cta-line">
                    {{  card.ctaLine }}
                </span>
            </div>
        </div>
        <div class="d-grid gap-2">
            <p class="btn btn-default">{{ card.btnText }}</p>
        </div>
    </RouterLink>
</template>

<style scoped>
    .card {
        color:#16384E;
        display: block;
        padding: 1.5rem 1rem 2rem;
        border-radius: 8px;
        border: 2px solid #0875B5;
        border-top: 16px solid #0875B5;
        width: 100%;
        text-align: center;
        margin:0 0 16px;
        text-decoration: none;
    }
    .card:hover,
    .card:focus{
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
        text-decoration: none;
    }
    .card:hover .btn{
        background-color:#B43825;
        box-shadow: 2px 3px 3px -2px rgba(0, 0, 0, .3);
    }
    .card h2{
        font-size: 1.625rem;
        font-weight: 700;
        margin: 0;
    }

    .card hr {
        border-top: 2px solid #0875B5;
        margin: 16px auto;
    }
    .card.lowcarb,
    .card.lowcarb hr {
        border-color: #16384E;
    }
    .card.clubjenny,
    .card.clubjenny hr {
        border-color:#BD357A;
    }
    .card p.h3{
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5;
    }
    .card ul {
        text-align: left;
        line-height: 1.5;
    }
    .card .price {
        color: #0881C7;
        font-size: 1.1875rem;
        line-height: 1.1;
        text-align: center;
    }
    .card.lowcarb .price {
        color: #16384E;
    }
    .card.clubjenny .price {
        color:#BD357A;
    }
    .card .save-icon {
        width: 16px;
    }
    .card .save-wrapper span {
        width: calc(100% - 16px);
    }
    .card .starting {
        color: #7E7E7F;
        font-size: 1.1875rem;
        font-weight: 400;
        line-height: 1.1;
        margin-bottom: 8px;
    }
    .card .btn{
        font-size: 1.34025rem;
        padding: 11px 0;
    }
    @media(min-width:768px) {
        .card {
            margin: 0 0 40px;
        }
        .card h2{
            font-size: 1.7rem;
            min-height: 55px;
        }
        .card p.h3{
            font-size: 1rem;
        }
        .card-copy {
            min-height: 400px;
        }
        .card .btn{
            padding: 11px 0;
        }
        .card .price {
            min-height: 62px;
            font-size: 1rem;
            text-align: left;
        }
    }
    @media(min-width: 992px) {
        .card {
            margin:0 0 40px;
        }
        .card h2{
            font-size: 2.0625rem;
            min-height: 66px;
        }
        .card-copy {
            min-height: 256px;
        }
        .card .price {
            font-size: 1.1875rem;
            line-height: 1.1;
            min-height: 75px;		
        }
        .card .btn{
            font-size:1.1875rem;
            padding: 11px 0;
        }
    }
    @media(min-width: 1200px) {
        .card {
            padding: 32px 15px;
        }
        .card-copy {
            min-height: 246px;
        }
        .card h2{
            font-size:1.92rem;
            min-height: auto;
        }
        .card p.h3{
            font-size:1.1875rem;
        }
        .card .price {
            font-size: 1.1875rem;
            line-height: 1.1;
            min-height: 52px;
        }
        .card .btn{
            font-size:1.375rem;
        }
    }
    @media(min-width:1440px) {
        .card-copy{
            min-height: 217px;
            height: auto;
        }
        .card h2 {
            font-size: 2.0625rem;
        }
        .card p.h3{
            font-size: 1.1875rem;
        }
        .card .price {
            min-height: 55px;
        }
        .save-wrapper span {
            font-size: 1.375rem;
        }
        .card .save-icon {
            width: auto;
        }
    }
</style>