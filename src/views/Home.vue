<template>
  <div>
    <header> {{cart.length}} in cart </header>
    <div class="merch container">
      <div class="row">
        <v-checkbox
          v-model="sizeFilter"
          label="Small"
          value="Small"
          color="orange darken-3"
        ></v-checkbox>
        <v-checkbox
          v-model="sizeFilter"
          label="Medium"
          value="Medium"
        ></v-checkbox>

        <v-checkbox
          v-model="genderFilter"
          label="Herre"
          value="Herre"
        ></v-checkbox>
        <v-checkbox
          v-model="genderFilter"
          label="Dame"
          value="Dame"
        ></v-checkbox>
        <v-checkbox
          v-model="genderFilter"
          label="Unisex"
          value="Unisex"
        ></v-checkbox>
      </div>
      <div class="row">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-10 col-sm-10 col-md-6 col-lg-4 mt-5"
        >
          <div class="card">
            <img class="cardImage" :src="product.imageurl" />
            <h4 class="mt-3">{{ product.name }}</h4>
            <p>{{ product.price }}</p>
            <div class="card-body"></div>
          </div>
          <button class="button" v-on:click="addItemToCart(product)">Kjøp</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "@/components/assets/data.json";

export default {
  name: "Home",

  data: function () {
    return {
      cart: [],
      genderFilter: [],
      sizeFilter: [],
      products: [],
    };
  },
  watch: {
    sizeFilter() {
      this.filterProducts();
    },
    genderFilter() {
      this.filterProducts();
    },
  },
  created() {
    this.products = json.products;
  },
  methods: {
    filterProducts() {
      this.products = json.products.filter((p) => {
        if (this.sizeFilter.length && !this.genderFilter.length) {
          return this.sizeFilter.includes(p.size);
        } else if (this.genderFilter.length && !this.sizeFilter.length) {
          return this.genderFilter.includes(p.gender);
        } else if (!this.sizeFilter.length && !this.genderFilter.length) {
          return true;
        } else {
          return (
            this.sizeFilter.includes(p.size) &&
            this.genderFilter.includes(p.gender)
          );
        }
      });
    },
    addItemToCart(product) {
      this.cart.push(product);
      console.log(this.cart);
    },
  },
};
</script>

<style scoped>
.button {
  justify-content: center;
  width: 200px;
  height: 40px;
  border-radius: 40px;
  background-color: #009bff;
  box-shadow: 0 10px 8px -4px rgba(0, 0, 0, 0.32);
  color: #fff;
  font-size: 20px;
  line-height: 1.5em;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
}
.card {
  border: none;
  background-color: #F2F2F2;
  float: center;
}

</style>
