
<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
    <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Welcome </h1>
        <p class="text-gray-600">Get ready for Knowledgae!</p>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="you@example.com"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="••••••••"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>

        <!-- Password Requirements -->
        <div v-if="password" class="mb-6 p-4 bg-gray-50 rounded-lg">
          <p class="text-xs font-medium text-gray-700 mb-2">Password must contain:</p>
          <div class="space-y-1">
            <div 
              v-for="(req, index) in requirements" 
              :key="index"
              class="flex items-center gap-2"
            >
              <span 
                class="text-xs font-bold"
                :class="req.test(password) ? 'text-green-500' : 'text-gray-300'"
              >
                {{ req.test(password) ? '✓' : '✗' }}
              </span>
              <span 
                class="text-xs"
                :class="req.test(password) ? 'text-green-600' : 'text-gray-500'"
              >
                {{ req.label }}
              </span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          :disabled="!isPasswordValid"
          class="w-full font-semibold py-3 rounded-lg transition duration-200 shadow-md"
          :class="isPasswordValid 
            ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'"
        >
          Login
        </button>
      </form>

      
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

// Password requirements
const requirements = [
  {
    label: 'At least 8 characters',
    test: (pwd) => pwd.length >= 8
  },
  {
    label: 'Contains uppercase letter (A-Z)',
    test: (pwd) => /[A-Z]/.test(pwd)
  },
  {
    label: 'Contains lowercase letter (a-z)',
    test: (pwd) => /[a-z]/.test(pwd)
  },
  {
    label: 'Contains number (0-9)',
    test: (pwd) => /[0-9]/.test(pwd)
  },
  {
    label: 'Contains special character (. ! @ # $ % etc)',
    test: (pwd) => /[.!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)
  }
]

// Check if all requirements are met
const isPasswordValid = computed(() => {
  if (!password.value) return false
  return requirements.every(req => req.test(password.value))
})

const handleLogin = () => {
  // Add the authentication logic here
  


  console.log('Login with:', { email: email.value, password: password.value })
  
  // For i had to just redirect to tutors page
  // Replace this with actual authentication
  router.push('/tutors')
}
</script>


<!-- <template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
    <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Welcome </h1>
        <p class="text-gray-600">Get ready for Knowledgae!</p>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="you@example.com"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="••••••••"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
        >
          Login
        </button>
      </form>

      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Add the authentication logic here



  console.log('Login with:', { email: email.value, password: password.value })
  
  // For i had to just redirect to tutors page
  // Replace this with actual authentication
  router.push('/tutors')
}
</script> -->