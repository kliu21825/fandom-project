import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/components/useAuth'
const { isAuthenticated } = useAuth()

import HomePage from '@/views/HomePage.vue'
import About from '@/components/AboutPage.vue'
import Contact from '@/components/ContactPage.vue'
import Login from '@/components/LoginPage.vue'
import SignUp from '@/components/SignUp.vue'
import BookNow from '@/components/BookNow.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/', name: 'About', component: About },
  { path: '/', name: 'Contact', component: Contact },
  { path: '/', name: 'Login', component: Login },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/', name: 'Book Now', component: BookNow },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router
