<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from "./layouts/Header.vue"
import Footer from "./layouts/Footer.vue"
import carStore from "./stores/car/index"
import Loader from "./components/reusable/Loader.vue"

const getCarStore = carStore();

</script>

<template>
  <Loader :active="getCarStore.loading" opacity=0.8 spin_color_1="red" spin_color_2="red" bgColor="black" loader="double-spin"/>

  <div class="text-black">
    <Header />

    <!-- <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/details">Details</RouterLink>
    </div> -->

    <RouterView />
    <Footer />

  </div>
</template>

<style scoped></style>
