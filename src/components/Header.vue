<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/favorites">Favorites</router-link>
  </div>
</template>


<style>
.navbar {
  overflow: hidden;
  background-color: #191D8A;
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  height: 50px;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change background on mouse-over */
.navbar a:hover {
  background: #ddd;
  color: black;
  height: 100%;
}
</style>
