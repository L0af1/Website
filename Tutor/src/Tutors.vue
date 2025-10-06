x<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Available Tutors</h1>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TutorCard
          v-for="tutor in tutors"
          :key="tutor.id"
          :tutor="tutor"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import TutorCard from '../components/TutorCard.vue'
  
  const tutors = [
    { id: 1, name: 'Lewis Johnson', subject: 'Math', price: 25, rating: 4.8 },
    { id: 2, name: 'Vinnie Hec', subject: 'English', price: 20, rating: 4.6 },
    { id: 3, name: 'Jude Richard', subject: 'Science', price: 30, rating: 4.9 },
  ]
  </script>