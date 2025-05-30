<script setup>
    import { defineProps, computed } from 'vue';

    const imgBaseUrl = 'https://www.jennycraig.com';

    const props = defineProps({
        food: {
            type: Object,
            required: true,
        }
    });

    const linkPath = computed(() => `/menu/${props.food.primary_category.slug}/${props.food.slug}`);
    const imgPath = computed(() => `${imgBaseUrl}/${props.food.media[0].path}`);
</script>

<template>
    <div class="food-item" :product-id="food.product_id">
        <div class="img-wrap">
            <RouterLink :to="linkPath">
                <img :src="imgPath" :alt="food.item.name" class="food-img img-fluid" loading="lazy">
            </RouterLink>
        </div>
        <div class="food-item-info">
            <div class="wrap-item">
                <div class="badge-holder">
                    <div class="badge-img-wrapper d-flex gap-2" v-if="food.below_tags.length">
                        <img v-for="(badge, index) in food.below_tags" :key="index" :src="imgBaseUrl + badge.image_path" :alt="badge.alt" class="badge-img" :class="badge.class_name" loading="lazy">
                    </div>
                </div>
                <RouterLink :to="linkPath" class="food-title">{{ food.item.name }}</RouterLink>
                <div class="cat-rate-wrap">
                    <div class="prod-cat">
                        <div class="prod-cat-img-wrapper d-flex gap-2" v-if="food.badges.length">
                            <img v-for="(badge, index) in food.badges" :key="index" :src="imgBaseUrl + badge.image_path" :alt="badge.alt" class="prod-cat-img" :class="badge.class_name" loading="lazy">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .food-item {
        width: 100%;
        border: 0;
        border-radius: 0;
        padding: 1rem;
        position: relative;
        background: #fff;
        display: flex;
        gap: 1rem;
    }
    .food-item .img-wrap {
        width: 100%;
        max-width: 40%;
    }
    .food-item .img-wrap a {
        display: block;
    }
    .badge-holder {
        display: flex;
        align-items: center;
        gap: .5rem;
        min-height: 28px;
        margin-bottom: .3rem;
    }
    .food-item .food-title {
        text-decoration: none;
        color: #29353A;
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.3;
        min-height: 4.5rem;
        display: block;
    }
    .cat-rate-wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: .5rem;
        margin-bottom: .75rem;
    }
    .prod-cat {
        min-height: 1.5rem;
    }
</style>