
<template>
  <div>
    <nav class="navbar">
      <h2 class="logo">TutorConnect</h2>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/tutors">Tutors</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/signup">Signup</router-link></li>
        <li><router-link to="/cart">Bookings</router-link></li>
      </ul>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2563eb;
  color: white;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.25rem;
  font-weight: bold;
}

ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

li a:hover {
  text-decoration: underline;
}
</style>
