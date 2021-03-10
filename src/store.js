import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = {
  state: {
    products: [],
    cartItems: [],
    showCart: false,
  },
  getters: {
    count: ({ cartItems }) => {
      return cartItems.reduce((acc, { numOfItems }) => acc + numOfItems, 0);
    },
    totalPrice: ({ cartItems }) => {
      return cartItems.reduce(
        (acc, { numOfItems, price }) => acc + numOfItems * price,
        0
      );
    },
  },
  mutations: {
    setProducts(state, { products }) {
      state.products = products;
    },
    addToCart(state, { product }) {
      let item = state.cartItems.find((item) => item.id === product.id);
      if (item) item.numOfItems++;
      else state.cartItems.push({ ...product, numOfItems: 1 });
    },
    removeFromCart(state, { productId }) {
      let product = state.cartItems.find((item) => item.id === productId);
      if (product.numOfItems > 1) product.numOfItems--;
      else
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== product.id
        );
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
  actions: {},
};

export default new Vuex.Store(store);
