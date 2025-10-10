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

    <!-- 👇 New customer info form -->
    <div class="customer-form">
      <h2>🧾 Booking Details</h2>
      <p>Please enter your information to confirm your booking:</p>

      <form @submit.prevent="submitBooking">
        <div class="form-group">
          <label for="name">Full Name:</label>
          <input id="name" v-model="customer.name" type="text" required />
        </div>

        <div class="form-group">
          <label for="email">Email Address:</label>
          <input id="email" v-model="customer.email" type="email" required />
        </div>

        <div class="form-group">
          <label for="phone">Phone Number:</label>
          <input id="phone" v-model="customer.phone" type="tel" required />
        </div>

        <div class="form-group">
          <label for="address">Address:</label>
          <textarea id="address" v-model="customer.address" rows="3" required></textarea>
        </div>

        <button type="submit" class="submit-btn">Confirm Booking</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { bookingStore } from './bookingStore.js' // Assume a simple store managing bookings

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString()
}

function cancelBooking(tutorId) {
  if (confirm('Are you sure you want to cancel this booking?')) {
    bookingStore.removeBooking(tutorId)
  }
}

// 👇 Reactive form data
const customer = reactive({
  name: '',
  email: '',
  phone: '',
  address: ''
})

// 👇 Fake submit for now — can later save to store or localStorage
function submitBooking() {
  if (!customer.name || !customer.email || !customer.phone || !customer.address) {
    alert('Please fill out all fields before submitting.')
    return
  }

  alert(`Booking confirmed!\n\nName: ${customer.name}\nEmail: ${customer.email}\nPhone: ${customer.phone}\nAddress: ${customer.address}`)
  
  // Optional: clear form
  customer.name = ''
  customer.email = ''
  customer.phone = ''
  customer.address = ''
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
  margin-bottom: 2rem;
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

/* 👇 New form styling */
.customer-form {
  background-color: #fff;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.customer-form h2 {
  margin-bottom: 0.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

input, textarea {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.submit-btn {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #1d4ed8;
}

.empty-message {
  text-align: center;
  color: #666;
  padding: 2rem 0;
}
</style>
<!-- old code below, left it just in case --> 
<!--
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

//
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
-->