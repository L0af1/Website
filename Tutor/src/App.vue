<template>
    <div>
      <!-- Navigation Bar -->
      <nav class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">TutorConnect</h1>
  
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="hover:underline">Home</router-link>
          </li>
          <li>
            <router-link to="/tutors" class="hover:underline">Tutors</router-link>
          </li>
        </ul>
      </nav>
  
      <!-- Page Content -->
      <main class="p-6">
        <router-view />
      </main>
  
      <!-- Footer -->
      <footer class="bg-gray-200 text-center py-4 mt-8">
        <p class="text-gray-600 text-sm">
          © 2025 TutorConnect — All Rights Reserved
        </p>
      </footer>
    </div>
  </template>
  
  <script setup>
  // no extra logic needed yet
  </script>
  
  <style>
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  </style>