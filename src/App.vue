<template>
  <div id="app">
    <div id="nav" class="container mt-10">
      <img src="" alt="" />
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  max-width: 100%;
  background-color: #ff8a32;
  height: 60px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
