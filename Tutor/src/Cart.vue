<template>
  <div class="bookings-page">
    <h1>📘 Your Booked Tutors</h1>

    <div v-if="bookingStore.bookedTutors.length === 0" class="empty-message">
      <p>You haven't booked any tutors yet.</p>
    </div>

    <div v-else class="bookings-list">
      <div v-for="tutor in bookingStore.bookedTutors" :key="tutor.id" class="booking-card">
        <h3>{{ tutor.name }}</h3>
        <p><strong>Subject:</strong> {{ tutor.subject }}</p>
        <p><strong>Price:</strong> £{{ tutor.price }}</p>
        <p><strong>Rating:</strong> ⭐ {{ tutor.rating }}</p>
        <p><em>Booked on: {{ formatDate(tutor.bookedAt) }}</em></p>
        <button @click="cancelBooking(tutor.id)" class="cancel-btn">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { bookingStore } from './bookingStore'

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString()
}

function cancelBooking(tutorId) {
  if (confirm('Are you sure you want to cancel this booking?')) {
    bookingStore.removeBooking(tutorId)
  }
}
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

.cancel-btn {
  margin-top: 0.5rem;
  background-color: #ef4444;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-btn:hover {
  background-color: #dc2626;
}

.empty-message {
  text-align: center;
  color: #666;
  padding: 2rem 0;
}
</style>