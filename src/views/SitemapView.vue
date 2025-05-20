<script setup>
    import DefaultBreadcrumb from '@/components/breadcrumbs/DefaultBreadcrumb.vue';
    import { ref } from 'vue';

    const pageBreadcrumbs = ref([
        { label: 'Home', route: '/'},
        { label: 'Site Map'}
    ])
</script>

<template>
    <main id="content" class="sitemap">
        <DefaultBreadcrumb :breadcrumbs="pageBreadcrumbs" />
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="h2 fw-400 my-4">Site Map</h1>
                </div>
            </div>
            <div class="row text-medium">
                <div class="col-12 col-md-6 col-xl-3"><RouterLink to="/plans-pricing" onclick="omni_track('PlanPricing:Sitemap');" class="page-link text-brand-blue mb-2">Plans &amp; Pricing</RouterLink>
                    <ul>
                        <li><RouterLink to="/diet-plans/program" onclick="omni_track('JenyCraigProgram:Sitemap');" class="page-link text-brand-blue mb-2">Jenny Craig Program</RouterLink></li>
                        <li><RouterLink to="/diet-plans/meal-delivery-plan" onclick="omni_track('14DayPlan:Sitemap');" class="page-link text-brand-blue mb-2">Meal Delivery Plan</RouterLink></li>
                        <li><RouterLink to="/club-jenny" onclick="omni_track('ClubJennyALaCarte:Sitemap');" class="page-link text-brand-blue mb-2">Club Jenny </RouterLink></li>
                        <li><RouterLink to="/diet-plans/low-carb" onclick="omni_track('ClubJennyALaCarte:Sitemap');" class="page-link text-brand-blue mb-2">Low Carb </RouterLink></li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-xl-3"><RouterLink to="/why-jenny" onclick="omni_track('WhyJenny:Sitemap');" class="page-link text-brand-blue mb-2">Why Jenny</RouterLink>
                    <ul>
                        <li><RouterLink to="/how-it-works" onclick="omni_track('HowItWorks:Sitemap');" class="page-link text-brand-blue mb-2">How It Works</RouterLink></li>
                        <li><RouterLink to="/stories" onclick="omni_track('Stories:Sitemap');" class="page-link text-brand-blue mb-2">Stories</RouterLink></li>
                    </ul>
                </div>
            </div>
            <hr class="mt-4 mb-4-5">
            <div class="row text-medium">
                <div class="col-12"><RouterLink to="/menu" onclick="omni_track('FoodMenu:Sitemap');" class="page-link text-brand-blue mb-2">Food Menu</RouterLink></div>
            </div>
            <div class="row text-medium">
                <div class="col-12 col-md-6 col-xl-3">
                    <ul>
                        <li><RouterLink to="/menu/breakfast" onclick="omni_track('Breakfast:Sitemap');" class="page-link text-brand-blue mb-2">Breakfast</RouterLink>
                            <ul>
                                <li><RouterLink to="/menu/breakfast/Cinnamon-Coffee-Cake" onclick="omni_track('Cinnamon Coffee Cake:Sitemap');" class="page-link text-brand-blue mb-2">Cinnamon Coffee Cake</RouterLink></li>
                                <li><RouterLink to="/menu/breakfast/Cheesy-Egg-Steak-Quesadilla" onclick="omni_track('Cheesy Egg &amp; Steak Quesadilla:Sitemap');" class="page-link text-brand-blue mb-2">Cheesy Egg &amp; Steak Quesadilla</RouterLink></li>
                                <li><RouterLink to="/menu/breakfast/Egg-Cheese-Turkey-Sausage-Burrito" onclick="omni_track('Egg, Cheese &amp; Turkey Sausage Burrito:Sitemap');" class="page-link text-brand-blue mb-2">Egg, Cheese &amp; Turkey Sausage Burrito</RouterLink></li>
                                <li><RouterLink to="/menu/breakfast/Cinnamon-Rolls" onclick="omni_track('Cinnamon Rolls:Sitemap');" class="page-link text-brand-blue mb-2">Cinnamon Rolls</RouterLink></li>
                                <li><RouterLink to="/menu/breakfast/Chocolate-Muffin" onclick="omni_track('Chocolate Muffin:Sitemap');" class="page-link text-brand-blue mb-2">Chocolate Muffin</RouterLink></li>
                                <li><RouterLink to="/menu/breakfast/Cranberry-Almond-Barscotti" onclick="omni_track('Cranberry Almond Barscotti:Sitemap');" class="page-link text-brand-blue mb-2">Cranberry Almond Barscotti</RouterLink></li>
                                <li><RouterLink to="/menu/breakfast/Sunshine-Sandwich" onclick="omni_track('Sunshine Sandwich:Sitemap');" class="page-link text-brand-blue mb-2">Sunshine Sandwich</RouterLink></li>
                                <li><RouterLink to="/menu/breakfast/Classic-Waffles" onclick="omni_track('Classic Waffles:Sitemap');" class="page-link text-brand-blue mb-2">Classic Waffles</RouterLink></li>
                                <li><RouterLink to="/menu/breakfast/Cheddar-Cheese-Omelet" onclick="omni_track('Cheddar Cheese Omelet:Sitemap');" class="page-link text-brand-blue mb-2">Cheddar Cheese Omelet</RouterLink></li>
                                <li><RouterLink to="/menu/breakfast/-Blueberry-Pancakes-Sausage" onclick="omni_track('Blueberry Pancakes &amp; Sausage:Sitemap');" class="page-link text-brand-blue mb-2">Blueberry Pancakes &amp; Sausage</RouterLink></li>
                                <li><RouterLink to="/menu/breakfast/-Farmhouse-Breakfast-Bowl" onclick="omni_track('Farmhouse Breakfast Bowl:Sitemap');" class="page-link text-brand-blue mb-2">Farmhouse Breakfast Bowl</RouterLink></li>
                                <li><RouterLink to="/menu/breakfast/Blueberry-Muffin" onclick="omni_track('Blueberry Muffin:Sitemap');" class="page-link text-brand-blue mb-2">Blueberry Muffin</RouterLink></li>
                                <ul>
                                    <ul></ul>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                    <ul>
                        <li><RouterLink to="/menu/lunch-dinner" onclick="omni_track('Lunch &amp; Dinner:Sitemap');" class="page-link text-brand-blue mb-2">Lunch &amp; Dinner</RouterLink>
                            <ul>
                                <li><RouterLink to="/menu/lunch-dinner/Chicken-Marsala" onclick="omni_track('Chicken Marsala:Sitemap');" class="page-link text-brand-blue mb-2">Chicken Marsala</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Bean-Cheese-Burrito" onclick="omni_track('Bean &amp; Cheese Burrito:Sitemap');" class="page-link text-brand-blue mb-2">Bean &amp; Cheese Burrito</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Chicken-Fajita" onclick="omni_track('Chicken Fajita:Sitemap');" class="page-link text-brand-blue mb-2">Chicken Fajita</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Chicken-Burrito" onclick="omni_track('Chicken Burrito:Sitemap');" class="page-link text-brand-blue mb-2">Chicken Burrito</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Seasoned-Steak" onclick="omni_track('Seasoned Steak:Sitemap');" class="page-link text-brand-blue mb-2">Seasoned Steak</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Fish-Chips" onclick="omni_track('Fish &amp; Chips:Sitemap');" class="page-link text-brand-blue mb-2">Fish &amp; Chips</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Margherita-Pizza" onclick="omni_track('Margherita Pizza:Sitemap');" class="page-link text-brand-blue mb-2">Margherita Pizza</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Chicken-Cranberry-Salad-with-Crackers" onclick="omni_track('Chicken Cranberry Salad with Crackers:Sitemap');" class="page-link text-brand-blue mb-2">Chicken Cranberry Salad with Crackers</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Pepperoni-Pizza" onclick="omni_track('Pepperoni Pizza:Sitemap');" class="page-link text-brand-blue mb-2">Pepperoni Pizza</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Deli-Style-Tuna-Salad-with-Crackers" onclick="omni_track('Deli Style Tuna Salad with Crackers:Sitemap');" class="page-link text-brand-blue mb-2">Deli Style Tuna Salad with Crackers</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Classic-Cheeseburger" onclick="omni_track('Classic Cheeseburger:Sitemap');" class="page-link text-brand-blue mb-2">Classic Cheeseburger</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Chicken-Margherita-Pasta" onclick="omni_track('Chicken Margherita Pasta:Sitemap');" class="page-link text-brand-blue mb-2">Chicken Margherita Pasta</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Loaded-Baked-Potato" onclick="omni_track('Loaded Baked Potato:Sitemap');" class="page-link text-brand-blue mb-2">Loaded Baked Potato</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Spaghetti-with-Meatballs" onclick="omni_track('Spaghetti with Meatballs:Sitemap');" class="page-link text-brand-blue mb-2">Spaghetti with Meatballs</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Ham-Swiss-Baguette" onclick="omni_track('Ham &amp; Swiss Baguette:Sitemap');" class="page-link text-brand-blue mb-2">Ham &amp; Swiss Baguette</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Classic-Lasagna-with-Meat-Sauce" onclick="omni_track('Classic Lasagna with Meat Sauce:Sitemap');" class="page-link text-brand-blue mb-2">Classic Lasagna with Meat Sauce</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Orange-Chicken" onclick="omni_track('Orange Chicken:Sitemap');" class="page-link text-brand-blue mb-2">Orange Chicken</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Meatloaf-Vegetable-Medley" onclick="omni_track('Meatloaf &amp; Vegetable Medley:Sitemap');" class="page-link text-brand-blue mb-2">Meatloaf &amp; Vegetable Medley</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Cheesy-Mashed-Potatoes-Fried-Chicken" onclick="omni_track('Cheesy Mashed Potatoes &amp; Fried Chicken:Sitemap');" class="page-link text-brand-blue mb-2">Cheesy Mashed Potatoes &amp; Fried Chicken</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Chicken-Fettuccine-Alfredo" onclick="omni_track('Chicken Fettuccine Alfredo:Sitemap');" class="page-link text-brand-blue mb-2">Chicken Fettuccine Alfredo</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Three-Cheese-Macaroni-with-Broccoli-Carrots" onclick="omni_track('Three Cheese Macaroni with Broccoli &amp; Carrots:Sitemap');" class="page-link text-brand-blue mb-2">Three Cheese Macaroni with Broccoli &amp; Carrots</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Classic-Chicken-Carbonara" onclick="omni_track('Classic Chicken Carbonara:Sitemap');" class="page-link text-brand-blue mb-2">Classic Chicken Carbonara</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Baked-Ziti" onclick="omni_track('Baked Ziti:Sitemap');" class="page-link text-brand-blue mb-2">Baked Ziti</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Chicken-Wild-Rice-Soup" onclick="omni_track('Chicken &amp; Wild Rice Soup:Sitemap');" class="page-link text-brand-blue mb-2">Chicken &amp; Wild Rice Soup</RouterLink></li>
                                <li><RouterLink to="/menu/lunch-dinner/Broccoli-Cheese-Stuffed-Potato" onclick="omni_track('Broccoli &amp; Cheese Stuffed Potato:Sitemap');" class="page-link text-brand-blue mb-2">Broccoli &amp; Cheese Stuffed Potato</RouterLink></li>
                                <ul>
                                    <ul></ul>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                    <ul>
                        <li><RouterLink to="/menu/snacks-desserts" onclick="omni_track('Snacks &amp; Desserts:Sitemap');" class="page-link text-brand-blue mb-2">Snacks &amp; Desserts</RouterLink>
                            <ul>
                                <li><RouterLink to="/menu/snacks-desserts/Chocolate-Cheese-Cake" onclick="omni_track('Chocolate Cheesecake:Sitemap');" class="page-link text-brand-blue mb-2">Chocolate Cheesecake</RouterLink></li>
                                <li><RouterLink to="/menu/snacks-desserts/Strawberry-Cheese-Cake" onclick="omni_track('Strawberry Cheesecake:Sitemap');" class="page-link text-brand-blue mb-2">Strawberry Cheesecake</RouterLink></li>
                                <li><RouterLink to="/menu/snacks-desserts/Chocolate-Chip-Cookies" onclick="omni_track('Chocolate Chip Cookies:Sitemap');" class="page-link text-brand-blue mb-2">Chocolate Chip Cookies</RouterLink></li>
                                <li><RouterLink to="/menu/snacks-desserts/White-Chip-Macadamia-Nut-Cookie" onclick="omni_track('White Chip Macadamia Nut Cookie:Sitemap');" class="page-link text-brand-blue mb-2">White Chip Macadamia Nut Cookie</RouterLink></li>
                                <li><RouterLink to="/menu/snacks-desserts/Vanilla-Buttercream-Cupcake" onclick="omni_track('Vanilla Buttercream Cupcake:Sitemap');" class="page-link text-brand-blue mb-2">Vanilla Buttercream Cupcake</RouterLink></li>
                                <li><RouterLink to="/menu/snacks-desserts/Smores-Bar" onclick="omni_track('S'mores Bar:Sitemap');" class="page-link text-brand-blue mb-2">S'mores Bar</RouterLink></li>
                                <li><RouterLink to="/menu/snacks-desserts/Chocolate-Lava-Cake" onclick="omni_track('Chocolate Lava Cake:Sitemap');" class="page-link text-brand-blue mb-2">Chocolate Lava Cake</RouterLink></li>
                                <li><RouterLink to="/menu/snacks-desserts/Lemon-Cake" onclick="omni_track('Lemon Cake:Sitemap');" class="page-link text-brand-blue mb-2">Lemon Cake</RouterLink></li>
                                <li><RouterLink to="/menu/snacks-desserts/Baked-Cheese-Puffs" onclick="omni_track('Baked Cheese Curls:Sitemap');" class="page-link text-brand-blue mb-2">Baked Cheese Curls</RouterLink></li>
                                <li><RouterLink to="/menu/snacks-desserts/Aged-White-Cheddar-Popcorn" onclick="omni_track('Aged White Cheddar Popcorn:Sitemap');" class="page-link text-brand-blue mb-2">Aged White Cheddar Popcorn</RouterLink></li>
                                <li><RouterLink to="/menu/snacks-desserts/Sea-Salt-Popcorn" onclick="omni_track('Sea Salt Popcorn:Sitemap');" class="page-link text-brand-blue mb-2">Sea Salt Popcorn</RouterLink></li>
                                <li><RouterLink to="/menu/snacks-desserts/Chocolate-Walnut-Brownie" onclick="omni_track('Chocolate Walnut Brownie:Sitemap');" class="page-link text-brand-blue mb-2">Chocolate Walnut Brownie</RouterLink></li>
                                <li><RouterLink to="/menu/snacks-desserts/Carrot-Cake" onclick="omni_track('Carrot Cake:Sitemap');" class="page-link text-brand-blue mb-2">Carrot Cake</RouterLink></li>
                                <ul>
                                    <ul></ul>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                    <ul>
                        <li><RouterLink to="/menu/bars" onclick="omni_track('Bars:Sitemap');" class="page-link text-brand-blue mb-2">Bars</RouterLink>
                            <ul>
                                <li><RouterLink to="/menu/bars/Nut-Honey-Recharge-Bar-7-Pack" onclick="omni_track('Nut &amp; Honey Recharge Bar - 7 Pack:Sitemap');" class="page-link text-brand-blue mb-2">Nut &amp; Honey Recharge Bar - 7 Pack</RouterLink></li>
                                <li><RouterLink to="/menu/bars/Chocolate-Peanut-Butter-Anytime-Bar-7-Pack" onclick="omni_track('Chocolate Peanut Butter Anytime Bar - 7 Pack:Sitemap');" class="page-link text-brand-blue mb-2">Chocolate Peanut Butter Anytime Bar - 7 Pack</RouterLink></li>
                                <ul>
                                    <ul></ul>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-xl-3">
                    <ul>
                        <li><RouterLink to="/menu/kits" onclick="omni_track('Kits:Sitemap');" class="page-link text-brand-blue mb-2">Kits</RouterLink>
                            <ul>
                                <li><RouterLink to="/menu/kits/Low-Carb-Starter-7-Day" onclick="omni_track('7-Day Low-Carb Starter Kit with Frozen Meals:Sitemap');" class="page-link text-brand-blue mb-2">7-Day Low-Carb Starter Kit with Frozen Meals</RouterLink></li>
                                <li><RouterLink to="/menu/kits/Snack-Anytime-Bundle-14ct" onclick="omni_track('Snacks &amp; Anytime Bars Kit—14 Count:Sitemap');" class="page-link text-brand-blue mb-2">Snacks &amp; Anytime Bars Kit—14 Count</RouterLink></li>
                                <li><RouterLink to="/menu/kits/Starter-7-Day" onclick="omni_track('7-Day Starter Meal Kit:Sitemap');" class="page-link text-brand-blue mb-2">7-Day Starter Meal Kit</RouterLink></li>
                                <li><RouterLink to="/menu/kits/14ct-LunchDinner" onclick="omni_track('14-Count Entree Kit:Sitemap');" class="page-link text-brand-blue mb-2">14-Count Entree Kit</RouterLink></li>
                                <ul>
                                    <ul></ul>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="mt-4 mb-4-5">
            <div class="row mb-4-5 text-medium">
                <div class="col-12 col-md-6 col-xl-3"><RouterLink to="/account" onclick="omni_track('MyAccount:Sitemap');" class="page-link text-brand-blue mb-2">My Account</RouterLink>
                    <ul>
                        <li><RouterLink to="/account" onclick="omni_track('MyDashboard:Sitemap');" class="page-link text-brand-blue mb-2">My Dashboard</RouterLink>
                            <ul>
                                <li><RouterLink to="/account/manage-next-order" onclick="omni_track('EditNextOrder:Sitemap');" class="page-link text-brand-blue mb-2">Edit Next Order</RouterLink></li>
                                <li><RouterLink to="/account/orders" onclick="omni_track('TrackMyOrder:Sitemap');" class="page-link text-brand-blue mb-2">Track My Order</RouterLink></li>
                                <li><RouterLink to="/account/manage-my-subscriptions" onclick="omni_track('ManageClubJenny:Sitemap');" class="page-link text-brand-blue mb-2">Manage Club Jenny</RouterLink></li>
                                <li><RouterLink to="/account/orders" onclick="omni_track('OrderHistory:Sitemap');" class="page-link text-brand-blue mb-2">Order History</RouterLink></li>
                                <li><RouterLink to="/account/profile" onclick="omni_track('MyProfile:Sitemap');" class="page-link text-brand-blue mb-2">My Profile</RouterLink></li>
                            </ul>
                        </li>
                        <li><RouterLink to="/account/grocery-guide" onclick="omni_track('Guides:Sitemap');" class="page-link text-brand-blue mb-2">Guides</RouterLink>
                            <ul>
                                <li><a href="/media/pdf/2023/StarterGuide.pdf" onclick="omni_track('StarterGuides:Sitemap');" class="page-link text-brand-blue mb-2" target="_blank">Starter Guides</a></li>
                                <li><a href="/media/jc/pdf/GroceryGuide.pdf" onclick="omni_track('GroceryGuide:Sitemap');" class="page-link text-brand-blue mb-2" target="_blank">Grocery Guide</a></li>
                                <li><a href="/media/jc/pdf/1200MealPlan.pdf" onclick="omni_track('1200CaloriePlan:Sitemap');" class="page-link text-brand-blue mb-2" target="_blank">1200 Calorie Menu Plan</a></li>
                                <li><a href="/media/jc/pdf/1500MealPlan.pdf" onclick="omni_track('1500CaloriePlan:Sitemap');" class="page-link text-brand-blue mb-2" target="_blank">1500 Calorie Menu Plan</a></li>
                                <li><a href="/media/jc/pdf/1700MealPlan.pdf" onclick="omni_track('1700CaloriePlan:Sitemap');" class="page-link text-brand-blue mb-2" target="_blank">1700 Calorie Menu Plan</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-xl-3"><RouterLink to="/about" onclick="omni_track('AboutUs:Sitemap');" class="page-link text-brand-blue mb-2">About Us</RouterLink> <RouterLink to="/about/contact" onclick="omni_track('ContactUs:Sitemap');" class="page-link text-brand-blue mb-2">Contact Us</RouterLink> <RouterLink to="/about/privacy"
                        onclick="omni_track('PrivacyPolicy:Sitemap');" class="page-link text-brand-blue mb-2">Privacy Policy</RouterLink> <RouterLink to="/about/terms-conditions" onclick="omni_track('TermsConditions:Sitemap');" class="page-link text-brand-blue mb-2">Terms &amp; Conditions</RouterLink>            <RouterLink to="/about/faqs" onclick="omni_track('FAQs:Sitemap');" class="page-link text-brand-blue mb-2">FAQs</RouterLink></div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    
</style>