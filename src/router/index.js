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
      name: 'WhyJenny',
      component: () => import('../views/WhyJennyView.vue'),
    },
    {
      path: '/how-it-works',
      name: 'how-it-works',
      component: () => import('../views/HowItWorksView.vue'),
    },
    {
      path: '/stories',
      name: 'stories',
      component: () => import('../views/StoriesView.vue'),
    },
  ],
})

export default router
