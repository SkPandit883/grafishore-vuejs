<script setup>

</script>

<template>
    <div>

        <div class="text-white">
            <div class="bg-black flex justify-between item-center pr-5 ">
                <div class="h-12 w-20 bg-red-600 side-div1"></div>
                <div class="flex space-x-5 items-center">
                    <div>
                        <h4>Info@test.com</h4>

                    </div>
                    <div>
                        <h4>9800000000</h4>
                    </div>
                    <div class="xl:block lg:block md:block hidden">
                        Sun-Fri (9AM-6PM)
                    </div>
                </div>
                <div class="flex space-x-5 items-center">
                    <div class="flex space-x-1">
                        <img width="25" height="15"
                            src="https://img.icons8.com/ios-filled/50/FFFFFF/login-rounded-right.png"
                            alt="login-rounded-right" />
                        <a href="#">Login</a>
                    </div>
                    <div class="flex space-x-1">
                        <img width="24" height="24"
                            src="https://img.icons8.com/material-outlined/24/FFFFFF/add-user-male.png"
                            alt="add-user-male" />
                        <a href="#">Register</a>
                    </div>
                    <div class=" space-x-3 ml-3 justify-center items-center xl:flex lg:flex md:flex hidden">
                        <h4>
                            Follow us on:
                        </h4>
                        <a href="#">
                            <img width="25" height="25" src="https://img.icons8.com/windows/32/FFFFFF/facebook-new.png"
                                alt="facebook-new" />

                        </a>

                        <a href="#">
                            <img width="25" height="25" src="https://img.icons8.com/badges/48/FFFFFF/twitter.png"
                                alt="twitter" />

                        </a>
                        <a href="#">
                            <img width="25" height="25"
                                src="https://img.icons8.com/material-outlined/24/FFFFFF/instagram-new--v1.png"
                                alt="instagram-new--v1" />

                        </a>


                    </div>
                </div>


            </div>
            <div>

            </div>
        </div>
        <!-- <div class="sticky top-0">

            <div class="flex  items-center justify-between	px-3 py-3">
                <RouterLink to="/">
                    <img class="h-12 w-48" src="../assets/images/logo.png" alt="">
                </RouterLink>
                <div class="w-1/2  space-x-4 text-lg ">
                    <a href="#" class="text-red-500 font-medium uppercase">Home</a>
                    <a class="font-medium uppercase" href="#">Services</a>
                    <a class="font-medium uppercase" href="#">Models</a>
                    <a class="font-medium uppercase" href="#">AboutUs</a>
                    <a class="font-medium uppercase" href="#">Blog</a>
                </div>
            </div>
        </div> -->



        <nav class="bg-white border-gray-200 ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <RouterLink to="/">
                        <img src="../assets/images/logo.png" class="h-8" alt=" Logo" />
                    </RouterLink>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <div class="items-center  border-2 space-y-2 xl:hidden lg:hidden md:hidden grid grid-cols-1  mt-3 rounded-md">
                        <div class="text-lg">
                            Sun-Fri ( 9AM-6PM )
                        </div>
                        <div class="items-center m-0 flex space-x-2">
                            <h4 class="text-lg">
                                Follow us : 
                            </h4>

                            <a href="#" class="bg-black shadow-lg rounded-full p-1">
                                <img width="25" height="25" src="https://img.icons8.com/windows/32/FFFFFF/facebook-new.png"
                                    alt="facebook-new" />

                            </a>

                            <a href="#" class="bg-black shadow-lg rounded-full p-1  mx-1">
                                <img width="25" height="25" src="https://img.icons8.com/badges/48/FFFFFF/twitter.png"
                                    alt="twitter" />

                            </a>
                            <a href="#" class="bg-black shadow-lg rounded-full p-1">
                                <img width="25" height="25"
                                    src="https://img.icons8.com/material-outlined/24/FFFFFF/instagram-new--v1.png"
                                    alt="instagram-new--v1" />

                            </a>


                        </div>
                    </div>
                    <ul
                        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a href="#"
                                class="block text-xl te py-2 px-3 text-red-600  rounded md:bg-transparent md:text-red-600 font-bold md:p-0 ">Home</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Services</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Models</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Pricing</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>

<style scoped>
.side-div1 {
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
}


.corousel-item {
    height: 385px;
}
</style>