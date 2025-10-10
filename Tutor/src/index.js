import { createRouter, createWebHistory } from 'vue-router'

// Importted the components
import Home from './Home.vue'
import Tutors from './Tutors.vue'
import TutorProfile from './TutorProfile.vue'
import Login from './Login.vue'
import Signup from './Signup.vue'
import Cart from './Cart.vue'
//import Booking from './Booking.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/tutors', component: Tutors },
  { path: '/tutor/:id', component: TutorProfile, props: true },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/cart', component: Cart },
  //{path : '/booking', component: Booking}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router