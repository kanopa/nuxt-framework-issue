<script lang="ts" setup></script>
<template>
  <div>
    <div>
      <div class="black"></div>
      <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x1.jpg" />
      <h1>Hello default</h1>
      <nuxt-link :to="{ path: '/products' }">
        <span>Go to error page</span>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 300px;
}

.black {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: black;
}
</style>