/*import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/Home.vue'
import Tutors from '/src/Tutors.vue'
import TutorProfile from '/src/TutorProfile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/tutors', component: Tutors },
  { path: '/tutor/:id', component: TutorProfile, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router */

import { createRouter, createWebHistory } from 'vue-router'

// Importted the components
import Home from './Home.vue'
import Tutors from './Tutors.vue'
import TutorProfile from './TutorProfile.vue'
import Login from './Login.vue'
import Signup from './Signup.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/tutors', component: Tutors },
  { path: '/tutor/:id', component: TutorProfile, props: true },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router