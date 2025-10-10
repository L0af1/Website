<!--
<template>
  <div id="app">
    <header>
      <h1>TutorConnect</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/tutors">Tutors</RouterLink> |
        <RouterLink to="/login">Login</RouterLink> |
        <RouterLink to="/signup">Sign Up</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />  This is where your pages will load 
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f9fafb;
  color: #333;
}

#app {
  text-align: center;
  padding: 1rem;
}

header {
  background-color: #be4dd8;
  color: white;
  padding: 1rem 0;
  margin-bottom: 2rem;
}

nav a {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
}

nav a.router-link-active {
  text-decoration: underline;
}

main {
  padding: 2rem;
}
</style>
-->

<!-- added the new part to the template above -->
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
