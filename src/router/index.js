import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/hp/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about/AboutView.vue'),
    },
    {
      path: '/about/contact',
      name: 'contact-us',
      component: () => import('../views/contact-us/ContactView.vue'),
    },
    {
      path: '/about/terms-conditions',
      name: 'terms-conditions',
      component: () => import('../views/terms/TermsConditionsView.vue'),
    },
    {
      path: '/about/faqs',
      name: 'faqs',
      component: () => import('../views/faqs/FaqsView.vue'),
    },
    {
      path: '/about/privacy',
      name: 'privacy',
      component: () => import('../views/layouts/StaticPolicyPagesLayoutView.vue'),
      children: [
        {path: '', component: () => import('../views/privacy/PrivacyPolicyView.vue')},
        {path: '?healthprivacy', component: () => import('../views/privacy/HealthPrivacyPolicyView.vue')},
      ]
    },
    // TODO: FIX HEALTH PRIVAY POLICY PAGE
    // {
    //   path: '/about/privacy?healthprivacy',
    //   name: 'health-privacy',
    //   component: () => import('../views/privacy/HealthPrivacyPolicyView.vue'),
    // },
    {
      path: '/plans-pricing',
      name: 'plans-pricing',
      component: () => import('../views/plans-pricing/PlansPricingView.vue'),
    },
    {
      path: '/diet-plans/program',
      name: 'program',
      component: () => import('../views/diet-plans/JCProgramView.vue'),
    },
    {
      path: '/diet-plans/meal-delivery-plan',
      name: 'meal-delivery-plan',
      component: () => import('../views/diet-plans/MealDeliveryPlanView.vue'),
    },
    {
      path: '/club-jenny',
      name: 'club-jenny',
      component: () => import('../views/cj/ClubJennyView.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/layouts/MenuLayoutView.vue'),
      children: [
        {path: '', component: () => import('../views/menu/AllMealsMenuView.vue')},
        {path: 'breakfast', component: () => import('../views/menu/BreakfastMenuView.vue')},
        {path: 'lunch-dinner', component: () => import('../views/menu/LunchDinnerMenuView.vue')},
        {path: 'snacks-desserts', component: () => import('../views/menu/SnacksDessertsMenuView.vue')},
        {path: 'kits', component: () => import('../views/menu/KitsMenuView.vue')},
        {path: 'bars', component: () => import('../views/menu/BarsMenuView.vue')},
      ]
    },
    {
      path: '/why-jenny',
      name: 'Static Pages Layout',
      component: () => import('../views/layouts/StaticPagesLayoutView.vue'),
      children: [
        {path: '', component: () => import('../views/why-jenny/WhyJennyView.vue')},
        {path: '/how-it-works', component: () => import('../views/hiw/HowItWorksView.vue')},
        {path: '/stories', component: () => import('../views/stories/StoriesView.vue')},
      ]
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: () => import('../views/sitemap/SitemapView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Use saved position if available (e.g., back/forward navigation)
    } else {
      return { top: 0 }; // Scroll to top for new route navigation
    }
  },
})

export default router
