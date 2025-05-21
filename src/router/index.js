import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/about/contact',
      name: 'contact-us',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/about/terms-conditions',
      name: 'terms-conditions',
      component: () => import('../views/TermsConditionsView.vue'),
    },
    {
      path: '/about/privacy',
      name: 'privacy',
      component: () => import('../views/StaticPolicyPagesLayoutView.vue'),
      children: [
        {path: '', component: () => import('../views/PrivacyPolicyView.vue')},
        {path: '?healthprivacy', component: () => import('../views/HealthPrivacyPolicyView.vue')},
      ]
    },
    // TODO: FIX HEALTH PRIVAY POLICY PAGE
    // {
    //   path: '/about/privacy?healthprivacy',
    //   name: 'health-privacy',
    //   component: () => import('../views/HealthPrivacyPolicyView.vue'),
    // },
    {
      path: '/plans-pricing',
      name: 'plans-pricing',
      component: () => import('../views/PlansPricingView.vue'),
    },
    {
      path: '/diet-plans/program',
      name: 'program',
      component: () => import('../views/JCProgramView.vue'),
    },
    {
      path: '/diet-plans/meal-delivery-plan',
      name: 'meal-delivery-plan',
      component: () => import('../views/MealDeliveryPlanView.vue'),
    },
    {
      path: '/club-jenny',
      name: 'club-jenny',
      component: () => import('../views/ClubJennyView.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue'),
    },
    {
      path: '/why-jenny',
      name: 'Static Pages Layout',
      component: () => import('../views/StaticPagesLayoutView.vue'),
      children: [
        {path: '', component: () => import('../views/WhyJennyView.vue')},
        {path: '/how-it-works', component: () => import('../views/HowItWorksView.vue')},
        {path: '/stories', component: () => import('../views/StoriesView.vue')},
      ]
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: () => import('../views/SitemapView.vue'),
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
