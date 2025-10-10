<template>
  <div class="bookings-page">
    <h1>📘 Your Booked Tutors</h1>

    <div v-if="bookedTutors.length === 0" class="empty-message">
      <p>You haven’t booked any tutors yet.</p>
    </div>

    <div v-else class="bookings-list">
      <div v-for="tutor in bookedTutors" :key="tutor.id" class="booking-card">
        <h3>{{ tutor.name }}</h3>
        <p><strong>Subject:</strong> {{ tutor.subject }}</p>
        <p><strong>Price:</strong> £{{ tutor.price }}</p>
        <p><strong>Rating:</strong> ⭐ {{ tutor.rating }}</p>
        <p><em>{{ tutor.date ? 'Session: ' + tutor.date : '' }}</em></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// Temporary store (simple local reactive data)
const bookedTutors = reactive([])

// In a real app, you would fetch this data from a backend or manage it
// by saving actual booked tutors in localStorage or a store
</script>

<style scoped>
.bookings-page {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fafafa;
  border-radius: 8px;
}

.bookings-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.booking-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.empty-message {
  text-align: center;
  color: #666;
  padding: 2rem 0;
}
</style>
