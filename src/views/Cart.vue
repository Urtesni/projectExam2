<template>
  <div>
    <v-card
      v-for="product in cart"
      :key="product.id"
      class="mx-auto text-wrap mt-5 mb-2"
      max-width="550"
      min-width="250"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ product.name }}
          </v-list-item-title>
          <div class="overline mb-4">{{ product.size }}</div>
          <v-card-text class="te"> {{ product.description }} </v-card-text>
        </v-list-item-content>

        <v-list-item-avatar tile size="250">
          <img class="cardImage" :src="product.imageurl" />
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn class="cardbutton" outlined rounded text> Fjern vare </v-btn>
      </v-card-actions>
    </v-card>
    <v-btn class="paybutton" @click="$router.push('payment')"> Til betaling
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ["cart"],
};
</script>

<style scoped>
.cardbutton {
  justify-content: center;
  padding: 10px;
  border-radius: 40px;
  background-color: #ff8a32;
  box-shadow: 0 10px 8px -4px rgba(0, 0, 0, 0.32);
  color: #fff;
  font-size: 14px;
  line-height: 1.5em;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
}
.paybutton{
  background-color: #009bff !important;
  margin: 50px;
}

.v-card {
  bottom: 0;
  box-shadow: 0 10px 8px -4px rgba(0, 0, 0, 0.32);
  width: 100%;
}
</style>