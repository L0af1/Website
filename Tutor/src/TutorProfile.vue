<!--
<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Tutor Profile</h1>
    

    

      



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

 Added the about section and book session button -->

 <template>
  <div class="tutor-profile">
    <h1 class="profile-title">Tutor Profile</h1>

    <div class="profile-details">
      <p><strong>Tutor ID:</strong> {{ tutorId }}</p>
      <p><strong>Tutor:</strong> {{ name || '[Tutor]' }}</p>
      <p><strong>About:</strong> Passionate educator with years of experience helping students succeed.</p>
      <p><strong>Subject:</strong> [Subject]</p>
      <p><strong>Price:</strong> £[Price] per hour</p>
      <p><strong>Rating:</strong> [Rating] stars</p>
    </div>

    <button class="book-button">
      Book Session
    </button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const tutorId = route.params.id
</script>

<style scoped>
/* Main container */
.tutor-profile {
  padding: 1.5rem; /* same as p-6 */
  max-width: 600px;
  margin: 2rem auto;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Title */
.profile-title {
  font-size: 1.75rem; /* same as text-2xl */
  font-weight: bold;
  margin-bottom: 1rem; /* same as mb-4 */
  color: #333;
  text-align: center;
}

/* Text content */
.profile-details {
  line-height: 1.8;
  font-size: 1rem;
  color: #444;
  background-color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  border: 1px solid #ddd;
}

/* Book button */
.book-button {
  margin-top: 1.5rem; /* same as mt-4 */
  display: block;
  width: 100%;
  padding: 0.75rem 1rem; /* same as px-4 py-2 */
  background-color: #3b82f6; /* blue-500 */
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.book-button:hover {
  background-color: #2563eb; /* blue-600 */
}
</style>
