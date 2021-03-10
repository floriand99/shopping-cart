<template>
  <div>
    <Main />
    <CartButton />
    <Cart />
  </div>
</template>

<script>
import products from "./products.json";
import Main from "./components/Main.vue";
import CartButton from "./components/CartButton.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: { Main, CartButton, Cart },
  created() {
    this.$store.commit("setProducts", { products: products.data });
  },
};
</script>
