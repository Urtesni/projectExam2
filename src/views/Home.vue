<template>
  <div>
    <v-img
      min-height="252"
      min-width="500"
      src="../components/assets/header3.png"
    ></v-img>

    <div class="row m-5 filter">
      <v-checkbox
        class="m-2"
        v-for="size in sizes"
        :key="size"
        v-model="sizeFilter"
        :label="size"
        :value="size"
        color="orange darken-3"
      ></v-checkbox>

      <v-checkbox
        class="m-2"
        v-for="gender in genders"
        :key="gender"
        v-model="genderFilter"
        :label="gender"
        :value="gender"
        color="orange darken-3"
      ></v-checkbox>
    </div>

    <div class="merch container">
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
          <button class="button" v-on:click="addItemToCart(product)">
            Kjøp
          </button>
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
      genderFilter: [],
      genders: ["Dame", "Herre", "Unisex"],
      sizeFilter: [],
      sizes: ["Small", "Medium", "Large"],
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
      this.$emit("addToCart", product);
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
  background-color: #f2f2f2;
  float: center;
}
.filter {
  text-transform: uppercase;
}
</style>
