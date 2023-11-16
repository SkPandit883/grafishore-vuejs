<script setup>

import { ref } from "vue"
import { useRoute } from 'vue-router'
import Fuel from "./Fuel.vue"
import carStore from "../stores/car/index"
import CommingSoon from "./ComingSoon.vue"

const getCarStore = carStore();
const route = useRoute()

getCarStore.getCarDetails(route.params.id)

const activeTab = ref('fuel')

const tabs = ref([
    {

        name: "fuel",
        icon: "https://img.icons8.com/external-others-zufarizal-robiyanto/100/FFFFFF/external-fuel-mutuline-traffic-others-zufarizal-robiyanto.png",
        active: true
    },
    {

        name: "flag",
        icon: "https://img.icons8.com/small/100/FFFFFF/flag-2.png",
        active: false
    },
    {
        name: "speed",
        icon: "https://img.icons8.com/material-outlined/100/FFFFFF/circled-up-right-2.png",
        active: false
    },
    {
        name: "mileage",
        icon: "https://img.icons8.com/windows/100/FFFFFF/speedometer.png",
        active: false
    }
])

const changeTab = (tab) => {
    activeTab.value = tab.name;
    tabs.value.map((item, key) => {
        item.active = tab.name == item.name;
    })
}

</script>

<template>
    <div class="h-[450px] bg-black w-full flex p-6">
        <div class="  space-y-3 w-1/3">
            <template v-for="(tab, key) in tabs">
                <button @click="changeTab(tab)"
                    :class="['side-button', tab.active ? 'bg-red-950 animate-bounce duration-500 ease-linear delay-500' : 'bg-red-700', 'px-5', 'py-3', 'text-xl', 'text-white', 'font-bold']">
                    <img width="64" height="64" :src="tab.icon"
                        alt="external-fuel-mutuline-traffic-others-zufarizal-robiyanto" />
                </button><br>
            </template>



        </div>
        <div class="h-full w-1/3 ">
            <Fuel v-if="activeTab == 'fuel'" :car="getCarStore.carDetails" />
            <CommingSoon v-else />
        </div>
        <div class="w-1/2 ">
            <img src="https://wallpaper.dog/large/20576939.jpg" alt="">
            <h3 class="mt-8 text-red-600 text-3xl font-bold">{{ getCarStore.carDetails?.name }}</h3>
        </div>
    </div>
</template>


<style> .side-button {
     clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

 }
</style>
