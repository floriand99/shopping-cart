<template>
  <div class="container">
    <div class="row">
      <div
        v-for="product in $store.state.products"
        :key="product.id"
        class="col-lg-4 col my-3"
      >
        <div class="p-3 bg-light rounded">
          <img :src="product.image" class="w-100 rounded" />
          <div class="mx-auto text-center">
            <h4 class="font-weight-bold my-3">
              {{ product.title }}
              <span class="text-secondary">| ${{ product.price }}</span>
            </h4>
            <div
              v-for="item in product.rating"
              :key="item"
              class="d-inline-flex"
            >
              <svg
                class="mx-1 bg-dark p-1 rounded"
                fill="#ffca3a"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                />
              </svg>
            </div>
            <br />
            <button
              class="btn btn-dark my-3"
              @click="$store.commit('addToCart', { product })"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>
