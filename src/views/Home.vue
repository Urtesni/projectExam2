<template>
  <div class="merch container">
    <div class="row">
      <div
        v-for="product in products"
        :key="product.name"
        class="col-xs-12 col-sm-6 col-md-4 mt-5"
      >
        <div class="card">
          <img :src="product.path" />
          <h4 class="mt-3">{{ product.name }}</h4>
          <div class="card-body">
            <div class="describe">{{ product.description }}</div>
          </div>
        </div>
        <button class="button">Se produkt</button>
      </div>
    </div>
  </div>
</template>

<script>
import json from "@/components/assets/data.json";

export default {
  name: "Merch",
  data: function () {
    return {
      products: json.products, // passing array data into Vue
    };
  },

  mounted: function () {
    // Checking if everything works, delete this right after you see that everything works
    console.log(this.products);
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
  min-height: 20rem;
  margin: 2rem;
  border: 1px solid #009bff;
}
</style>

