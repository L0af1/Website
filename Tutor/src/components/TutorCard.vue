<template>
    <div class="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h2 class="font-semibold text-lg">{{ tutor.name }}</h2>
      <p>Subject: {{ tutor.subject }}</p>
      <p>Rate: £{{ tutor.price }}/hr</p>
      <p>⭐ {{ tutor.rating }}</p>
      <router-link
        :to="`/tutor/${tutor.id}`"
        class="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded"
      >
        View Profile
      </router-link>
    </div>
  </template>
  
  <script setup>
  defineProps({
    tutor: Object
  })
  </script>