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
                    <div>
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
                    <div class="flex space-x-3 ml-3 justify-center items-center">
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
        <div class="sticky top-0">

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
        </div>
    </div>

</template>

<style scoped>
.side-div1 {
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
}


.corousel-item{
    height: 385px;
}
</style>