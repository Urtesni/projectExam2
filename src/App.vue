<template>
  <v-app>
    <v-app-bar fixed color="#009bff" elevate-on-scroll dark app>
      <img src="" alt="" />
      <v-spacer />
      <v-btn @click="$router.push('/')" text>Home</v-btn>
      <v-btn @click="$router.push('/about')" text>About</v-btn>
      <v-spacer />
      <v-badge content="2" color="orange" overlap>
        <v-btn @click="$router.push('cart')" icon>
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </v-badge>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f2f2f2;
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

button.small-button {
  float: right;
}
</style>
