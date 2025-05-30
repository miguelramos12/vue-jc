<script setup>
    import { onMounted, ref } from 'vue';
    import { useFoodsStore } from '@/stores/foods';
    import DefaultBreadcrumb from '@/components/breadcrumbs/DefaultBreadcrumb.vue';
    import MenuSubHeader from '@/components/header/MenuSubHeader.vue';
    import MenuPageTop from '@/components/menu/MenuPageTop.vue';

    const foodsStore = useFoodsStore();

    const pageBreadcrumbs = ref([
        { label: 'Home', route: '/'},
        { label: 'All Meals'}
    ])

    onMounted(() => {
        async function getFoods(){
            try {
                const res = await fetch('./foods.json');
                const data = await res.json();
                // console.log('foods:', data);
                await foodsStore.updateFoods(data);
            } catch (error) {
                console.log(error);
            }
        }

        getFoods();
    })
</script>

<template>
    <main id="content">

        <MenuSubHeader />

        <DefaultBreadcrumb :breadcrumbs="pageBreadcrumbs" />

        <RouterView name="hero" />

        <MenuPageTop />

        <RouterView />
        
    </main>
</template>

<style scoped>
    main {
        background: #F5F5F5;
    }
</style>