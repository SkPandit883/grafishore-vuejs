<script setup>

import { ref } from "vue"
import CarCard from "./CarCard.vue"
import carStore from "../stores/car/index"
import Loader from "../components/reusable/Loader.vue"

const getCarStore = carStore();

if (getCarStore.cars.length == 0) {
    getCarStore.getCars()
}

const images = ref([
  "https://wpshopmart.com/html/demo/car-website-template/img/2.png",
  "https://wpshopmart.com/html/demo/car-website-template/img/3.png",
  "https://wpshopmart.com/html/demo/car-website-template/img/4.png",
  "https://wpshopmart.com/html/demo/car-website-template/img/1.png",
  "https://wpshopmart.com/html/demo/car-website-template/img/2.png"
])

const activeImageIdx = ref(0)
setInterval(() => {

  if (activeImageIdx.value < images.value.length - 1) {
    activeImageIdx.value++
  } else {
    activeImageIdx.value = 0
  }
}, 3000);



const cars = ref([
  {
    name: "Lamborghini Aventador",
    image: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home6/product-img-06.png"
  },
  {
    name: "Hyundai Sonata-2022",
    image: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home6/product-img-05.png"
  },
  {
    name: "BMW 3 Series-2023",
    image: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home6/product-img-04.png"
  },
  {
    name: "Ferrari 458 Italia-2023",
    image: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home6/product-img-03.png"
  }
])


</script>

<template>
  <div class="flex items-center justify-between grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
    <div class="h-[500px]  bg-red-600 side-div1 px-5 pt-8 space-y-5 drop-shadow-lg ">

      <h3 class="text-4xl font-bold text-gray-200">Buy Your Dream Car</h3>
      <div class="font-bold">
        <h1 class="uppercase text-3xl font-bold">Feel The Luxury</h1>
        <div class="uppercase flex items-center text-3xl font-bold">
          <img width="50" height="50" src="https://img.icons8.com/matisse/100/470404/menu.png" alt="menu" />
          Car We Have
        </div>
        <p class="text-lg">
          the best ride to give you the elegant feeling like a boss on your journey.
          With MOTEX ,you can travel like a king With out stress
        </p>
      </div>

      <div class="flex">
        <button class="bg-black px-5 py-4 text-white transition text-lg duration-150 ease-in-out">Explore More</button>
        <div
          class="bg-black rounded-full animate-ping border-2 transition delay-500 duration-500 ease-in-out border-color-white ml-[-12px] mt-[-7px] h-5 w-5">
        </div>
      </div>


    </div>
    <div>
      <img height="500" width="700" class="duration-500" :src="images[activeImageIdx]" alt="test">
    </div>
  </div>

  <div class="mt-8">
    <div class="h-1 w-full bg-red-600">
    </div>
    <div class="bg-black w-1/3 h-16 side-div1  flex items-center pl-3 border-red-500">
      <h3 class="text-white text-2xl font-medium ">Featured Cars</h3>
    </div>
  </div>
  <div class="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10 px-5 space-x-3 gap-4">

    <CarCard v-for="(car, idx) in getCarStore.cars" :car="car" :key="idx" />

  </div>
</template>

<style scoped>
.side-div1 {
  clip-path: polygon(0 0, 100% 0%, 90% 100%, 0% 100%);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
