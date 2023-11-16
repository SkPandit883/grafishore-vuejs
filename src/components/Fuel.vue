<script setup>
const props=defineProps(['car'])

</script>
<template>
    <div>
        <div class="text-red-600 flex space-x-8">
            <div>
                <h2 class="text-xl">RANGE</h2>
                <div>
                    <div class="flex">
                        <div>
                            <h2 class="font-bold text-lg">{{ car?.fuel?.refill }}</h2>
                            <div class="bg-red-600 w-12 h-[2px]"></div>

                        </div>

                        <div class="clip-left-top bg-red-600 h-[30px] w-10 ml-[-2px]">
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                    <h2 class="text-xl">REFILL</h2>
                    <div>
                        <div class="flex">
                            <div>
                                <h2 class="font-bold text-lg">{{ car?.fuel?.range }}</h2>
                                <div class="bg-red-600 w-12 h-[2px]"></div>

                            </div>

                            <div class="clip-left-top bg-red-600 h-[30px] w-10 ml-[-2px]">
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
           
        </div>

        <div class="text-red-600 mt-6 space-y-6">
            <div class="fuel-div px-10  py-2 flex justify-between shadow-xl shadow-green-500 w-1/2 bg-gray-900">
                <h2 class="text-xl font-bold" >TOUR</h2>
                <h2 class="text-xl font-bold">{{ car?.fuel?.tour }}</h2>
            </div>
            <div class="  fuel-div px-16 py-2 flex justify-between shadow-xl shadow-green-500 w-3/4 bg-gray-900">
                <h1 class="text-xl font-bold">ECO+</h1>
                <h1 class="text-xl font-bold">{{ car?.fuel?.eco }}</h1>
            </div>
            <div class="fuel-div px-8 py-2 flex justify-between shadow-xl shadow-green-500 w-1/2 bg-gray-900">
                <h1 class="text-xl font-bold">SPORTS+</h1>
                <h1 class="text-xl font-bold">{{ car?.fuel?.sport }}</h1>
            </div>
        </div>

    </div>
</template>

<style>
.fuel-div {
    /* border: 2px solid red; */
    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
    border:2px solid #ff000c;


}

.clip-left-top {
    clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0% 100%);

}
h2{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>