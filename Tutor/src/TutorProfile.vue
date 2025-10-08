<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Tutor Profile</h1>
      <!-- Add tutor profile details here -->

    <!-- <p>Tutor ID: {{ tutorId }}</p>
    <p>Tutor: {{ tutor.name }}</p>
    <p>Subject: {{ tutor.subject }}</p>
    <p>Price: ${{ tutor.price }} per hour</p>
    <p>Rating: {{ tutor.rating }} stars</p> -->

      



      <p>Tutor ID: {{ tutorId }}</p>
      <p>Tutor : {{ name }}</p>
      <p> About: [Tutor] </p>
      <p>Subject: [Subject]</p>
      <p>Price: £[Price] per hour</p>
      <p>Rating: [Rating] stars</p> 

      <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Book Session
      </button>


    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const tutorId = route.params.id
  </script>

  <!-- Added the about section and book session button -->

  