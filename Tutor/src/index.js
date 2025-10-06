import { createRouter, createWebHistory } from 'vue-router'
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

export default router