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
      <RouterView /> <!-- This is where your pages will load -->
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
