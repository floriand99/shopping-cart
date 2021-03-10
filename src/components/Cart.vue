<template>
  <div v-show="$store.state.showCart">
    <div class="cart">
      <div class="d-flex justify-content-between align-items-center">
        <h4 class="p-3 font-weight-bold">Your cart</h4>
        <div class="p-3" @click="$store.commit('toggleCart')">
          <svg
            class="close-button"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
            />
          </svg>
        </div>
      </div>
      <div v-if="$store.state.cartItems.length > 0">
        <div v-for="product in $store.state.cartItems" :key="product.id">
          <div
            class="py-2 px-3 d-flex align-items-center justify-content-between"
          >
            <div class="d-flex align-items-center">
              <img :src="product.image" class="cart-image rounded mr-2" />
              <div>
                {{ product.title }}
                <span class="text-secondary">- {{ product.numOfItems }}x</span>
              </div>
            </div>
            <button
              @click="
                $store.commit('removeFromCart', { productId: product.id })
              "
              class="btn btn-outline-secondary btn-sm"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div v-else class="mx-3">
        No items in the cart.
      </div>
      <div class="my-4 text-right p-3">
        Total price: ${{ $store.getters.totalPrice }}
      </div>
    </div>
    <div class="dark-background"></div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>
