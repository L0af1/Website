

<!-- updated css-->

<template>
  <div class="tutors-container">
    <h1 class="tutors-title">Available Tutors</h1>

    <div class="filters-section">
      <div class="filter-group">
        <label>Subject</label>
        <select v-model="filters.subject">
          <option value="">All Subjects</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Art">Art</option>
          <option value="AP Physics">AP Physics</option>
        </select>
      </div>
      <div class="filter-group">
        <label>Price Range</label>
        <select v-model="filters.priceRange">
          <option value="">All Prices</option>
          <option value="0-20">£0 - £20</option>
          <option value="21-30">£21 - £30</option>
          <option value="31-50">£31 - £50</option>
        </select>

        


    <div class="tutors-grid">
      <TutorCard
        v-for="tutor in tutors"
        :key="tutor.id"
        :tutor="tutor"
      />
    </div>
  </div>
</template>

<script setup>
import TutorCard from './components/TutorCard.vue'

const tutors = [
  { id: 1, name: 'Lewis Johnson', subject: 'Math', price: 25, rating: 4.8 },
  { id: 2, name: 'Vinnie Hec', subject: 'English', price: 20, rating: 4.6 },
  { id: 3, name: 'Jude Richard', subject: 'Science', price: 30, rating: 4.9 },
  { id: 4, name: 'Emma Watson', subject: 'History', price: 22, rating: 4.7 },
  { id: 5, name: 'Olivia Brown', subject: 'Art', price: 28, rating: 4.5 },
  { id: 6, name: 'Liam Smith', subject: 'AP Physics', price: 35, rating: 4.9 }
]
</script>

<style scoped>
/* Main container */
.tutors-container {
  padding: 1.5rem; /* same as p-6 */
  background-color: #f9fafb;
  min-height: 100vh;
}

/* Title */
.tutors-title {
  font-size: 1.75rem; /* same as text-2xl */
  font-weight: bold;
  margin-bottom: 1rem; /* same as mb-4 */
  color: #333;
  text-align: center;
}

/* Tutor grid */
.tutors-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem; /* same as gap-4 */
}

/* Responsive layout - 3 columns on medium+ screens */
@media (min-width: 768px) {
  .tutors-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>