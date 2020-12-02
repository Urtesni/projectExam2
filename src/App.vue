<template>
  <v-app>
    <v-app-bar fixed color="#009bff" elevate-on-scroll dark app>
      <img
        src="./assets/logo.png"
        alt=""
        @click="$router.push('/')"
      />
      <v-spacer />
      <v-btn @click="$router.push('/')" text>Home</v-btn>
      <v-btn @click="$router.push('/about')" text>Om Produktene</v-btn>

      <v-badge
        v-if="cart"
        :content="cart.length"
        color="orange"
        overlap
        :value="cart.length"
      >
        <v-btn @click="$router.push('cart')" icon>
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </v-badge>
    </v-app-bar>
    <v-main>
      <router-view @addToCart="addToCart" :cart="cart" />
    </v-main>
    <v-bottom-navigation color="orange" class="mt-5">
      <v-spacer />
      <v-btn>
        <span>Bli lærer!</span>
      </v-btn>
      <v-spacer />
      <v-btn>
        <span>Hvem er vi</span>
      </v-btn>
      <v-spacer />
      <img src="./assets/logo_sm.png" alt="" height="100%" />
      <v-spacer />
      <v-btn>
        <span>Learnlink i presse</span>
      </v-btn>
      <v-spacer />
      <v-btn>
        <span>Shipping</span>
      </v-btn>
      <v-spacer />
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      cart: []
    };
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
    }
  }
};
</script>

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
