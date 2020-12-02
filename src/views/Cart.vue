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

      <v-btn class="cardbutton" v-on:click="removeItemFromCart(product)" icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card>
    <v-btn class="paybutton" @click="paymentDialogVisible = true">
      Til betaling
    </v-btn>

    <v-dialog v-model="paymentDialogVisible">
      <v-card>
        <payment @success="successfulPayment" />
      </v-card>
    </v-dialog>

    <v-dialog v-model="successDialogVisible">
      <v-card>
        <v-alert type="success"> Yey! </v-alert>
        <h4>Tak for bestillingen!</h4>
        <v-btn @click="successDialogVisible = false">Lukk</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Payment from "../components/Payment";
export default {
  props: ["cart"],
  components: {
    Payment,
  },
  data() {
    return {
      paymentDialogVisible: false,
      successDialogVisible: false,
    };
  },
  methods: {
    removeItemFromCart(product) {
      this.cart.splice(this.cart.indexOf(product.id));
    },
    successfulPayment() {
      this.paymentDialogVisible = false;
      this.successDialogVisible = true;
    },
  },
};
</script>

<style scoped>
.cardbutton {
  justify-content: center;
  padding: 10px;
  margin: 8px;
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
.paybutton {
  background-color: #009bff !important;
  margin: 50px;
}

.v-card {
  bottom: 0;
  box-shadow: 0 10px 8px -4px rgba(0, 0, 0, 0.32);
  width: 100%;
}
</style>
