<template>
  <v-container>
    <v-row>
      <img src="../assets/logo_sm.png" style="margin: auto" />
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-text-field label="Fornavn" solo />
      </v-col>
      <v-col cols="6">
        <v-text-field label="Etternavn" solo />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-text-field label="E-post" solo />
      </v-col>
      <v-col cols="6">
        <v-text-field label="Telefon" type="number" solo />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-text-field label="Adresse" solo />
      </v-col>
      <v-col cols="3">
        <v-text-field label="Postnummer" type="number" solo />
      </v-col>
      <v-col cols="3">
        <v-text-field label="By" solo />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-text-field label="Navn på kortholder" solo />
      </v-col>
      <v-col cols="10">
        <stripe-elements
          ref="elementsRef"
          :pk="publishableKey"
          :amount="10000"
        />
      </v-col>
      <v-col cols="2">
        <v-btn @click="$emit('success')">Betal</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { StripeElements } from "vue-stripe-checkout";
export default {
  components: {
    StripeElements,
  },
  data: () => ({
    loading: false,
    publishableKey:
      "pk_test_51HtxD3JUB1rJpdAEchFgYl2UPE3iX87s8R7EX4t9Yt5bHLu6qlFZxo3RhG90bUkVbac136mAHQZZUiKHCpa1lquB00R7Au5hOO",
    items: [
      {
        sku: "sku_FdQKocNoVzznpJ",
        quantity: 1,
      },
    ],
    successUrl: "http://localhost:8080",
    cancelUrl: "http://localhost:8080",
  }),
  methods: {
    checkout() {
      //this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
