<script setup>

import { ref } from "vue"
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps(['car'])

const navigateToDetails = (id) => {

    router.push({ name: 'details', params: { id: id } })

}

</script>

<template>
    <div class="bg-gray-100 shadow-lg h-128 p-3 xl:pt-6 sm:pt-8 md:pt-4 lg:pt-6 pt-14 rounded-md hover:border-[1px] hover:delay-3000 hover:border-gray-500">
        <div class="w-full h-32 flex items-center justify-center">
            <img class="card-img rounded-md" :src="car.image" alt="">
        </div>

        <div class="xl:mt-6 sm:mt-6 md:mt-4 lg:mt-6 mt-12">
            <h3 class="text-lg font-medium">{{ car.name }}</h3>
            <div class="flex space-x-3">
                <h3 class="text-lg font-medium">Rs. 24244</h3>
                <h3>|</h3>
                <div class="flex">
                    <img width="30" height="30" src="https://img.icons8.com/material-outlined/50/626060/marker.png"
                        alt="marker" />
                    <h3>Sydney</h3>
                </div>
            </div>
            <div class="flex space-x-2 space-y-1 text-sm">
                <div class="flex space-x-1 items-center">
                    <img width="18" height="18" src="https://img.icons8.com/ios/50/626060/speedometer.png"
                        alt="speedometer" />
                    <h3>2500 miles</h3>
                </div>
                <div class="flex items-center">
                    <img width="18" height="18" src="https://img.icons8.com/small/16/626060/petrol.png" alt="petrol" />
                    <h3>Petrol + Gas</h3>
                </div>

            </div>
            <div class="flex justify-between items-center">
                <button @click="navigateToDetails(car.id)" class="px-2 py-2 bg-black text-white my-3 shadow-xl">
                    View Detail
                </button>

                <a href="#" class="bg-white p-2 shadow-md rounded-full">
                    <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FF0101/like--v1.png"
                        alt="like--v1" /> </a>
            </div>

        </div>
    </div>
</template>

<style scoped>
.card-img {
    background-size: cover;
}
</style>