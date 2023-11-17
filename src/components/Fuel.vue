<script setup>
const props=defineProps(['car'])

</script>
<template>
    <div>
        <div class="text-red-600 flex space-x-8">
            <div>
                <h2 class="lx:text-xl lg:text-lg md:text-xl text-md">RANGE</h2>
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
                    <h2 class="lx:text-xl lg:text-lg md:text-xl text-md">REFILL</h2>
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
            <div class="fuel-div xl:px-10 lg:px-10 md:px-8 px-6  py-2 flex justify-between shadow-xl shadow-green-500 w-1/2 bg-gray-900">
                <h2 class="lx:text-xl lg:text-lg md:text-xl text-md font-bold" >TOUR</h2>
                <h2 class="lx:text-xl lg:text-lg md:text-xl text-md font-bold">{{ car?.fuel?.tour }}</h2>
            </div>
            <div class="  fuel-div xl:px-16 lg:px-16 md:px-12 px-10 py-2 flex justify-between shadow-xl shadow-green-500 w-3/4 bg-gray-900">
                <h1 class="lx:text-xl lg:text-lg md:text-xl text-md font-bold">ECO+</h1>
                <h1 class="lx:text-xl lg:text-lg md:text-xl text-md font-bold">{{ car?.fuel?.eco }}</h1>
            </div>
            <div class=" fuel-div xl:px-8 lg:px-8 md:px-6 px-3   py-2 flex justify-between shadow-xl shadow-green-500 xl:w-1/2 lg:w-1/2 md:w-1/2 w-3/5 bg-gray-900">
                <h1 class="lx:text-xl lg:text-lg md:text-xl text-sm font-bold">SPORTS+</h1>
                <h1 class="lx:text-xl lg:text-lg md:text-xl text-sm font-bold">{{ car?.fuel?.sport }}</h1>
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