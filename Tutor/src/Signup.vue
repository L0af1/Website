<!--<template>
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

<!-- added the updated verion of the correct css format/ got rid of tailwind -->

<template>
  <div class="signup-container">
    <div class="signup-box">
      <div class="signup-header">
        <h1>Welcome</h1>
        <p>Get ready for Knowledge!</p>
      </div>

      <form @submit.prevent="handleSignup">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="••••••••"
          />
        </div>

        <!-- Password Requirements -->
        <div v-if="password" class="requirements-box">
          <p>Password must contain:</p>
          <ul>
            <li
              v-for="(req, index) in requirements"
              :key="index"
              :class="{ met: req.test(password) }"
            >
              {{ req.label }}
            </li>
          </ul>
        </div>

        <button
          type="submit"
          :disabled="!isPasswordValid"
          :class="{ disabled: !isPasswordValid }"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

// Password validation rules
const requirements = [
  { label: "At least 8 characters", test: (pwd) => pwd.length >= 8 },
  { label: "Contains uppercase letter (A-Z)", test: (pwd) => /[A-Z]/.test(pwd) },
  { label: "Contains lowercase letter (a-z)", test: (pwd) => /[a-z]/.test(pwd) },
  { label: "Contains number (0-9)", test: (pwd) => /[0-9]/.test(pwd) },
  { label: "Contains special character (.!@#$%^&* etc)", test: (pwd) => /[.!@#$%^&*(),?":{}|<>]/.test(pwd) }
];

const isPasswordValid = computed(() => requirements.every((req) => req.test(password.value)));

const handleSignup = () => {
  console.log("Sign Up with:", { email: email.value, password: password.value });
  router.push("/tutors"); // redirect after sign-up
};
</script>

<style scoped>
/* Overall layout */
.signup-container {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, white, white);
  padding: 1rem;
}

/* Main signup box */
.signup-box {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

/* Header */
.signup-header {
  text-align: center;
  margin-bottom: 1.5rem;
}
.signup-header h1 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 0.5rem;
}
.signup-header p {
  color: #666;
  font-size: 0.95rem;
}

/* Input fields */
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  font-weight: 600;
  color: #444;
  margin-bottom: 0.3rem;
}
.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.form-group input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 4px rgba(59, 130, 246, 0.3);
}

/* Password Requirements */
.requirements-box {
  background: #f8f9fb;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.requirements-box p {
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}
.requirements-box ul {
  list-style: none;
  padding: 0;
}
.requirements-box li {
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 0.25rem;
  position: relative;
  padding-left: 18px;
}
.requirements-box li::before {
  content: "✗";
  position: absolute;
  left: 0;
  color: #ccc;
}
.requirements-box li.met {
  color: #16a34a;
  font-weight: 600;
}
.requirements-box li.met::before {
  content: "✓";
  color: #16a34a;
}

/* Submit button */
button {
  width: 100%;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
button:hover {
  background-color: #1d4ed8;
  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
}
button.disabled {
  background-color: #cbd5e1;
  color: #666;
  cursor: not-allowed;
  box-shadow: none;
}
</style>