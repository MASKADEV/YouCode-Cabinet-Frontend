<template lang="">
    <div class="w-screen h-screen bg-gray-50">
        <div class ="container mx-auto flex flex-col h-full">
            <div class="flex flex-row items-center justify-center">
                <h1 class ="text-center font-[Poppins] font-semibold text-3xl text-indigo-400 mt-4">APPOINTMENT</h1>
                <button @click="signout" class ="text-center font-[Poppins] font-semibold text-1xl ml-4 text-black mt-4">Sign out</button>
            </div>
            <div class=" w-full h-[600px] my-auto flex md:flex-row flex-col">
                <div class="md:w-[50%] w-[100%] md:h-full h-[500px] ">
                    <Appoinment/>
                </div>
                <div class="md:w-[50%] w-[100%] md:h-full h-[500px] "></div>
            </div>
        </div>
    </div>
</template>
<script>
import Appoinment from '@/components/appointment/AppointmentForm.vue'

export default {
    name : 'AppoinmentView',
    mounted() {
        if(localStorage.getItem("user") == null) {
            this.$router.push({path:'/'});
        }
    },
    components : {
        Appoinment
    },
    methods: {
        signout () {
            localStorage.removeItem("user");      
            localStorage.removeItem("id");      
            this.$router.push({path :'/'});
        }
    },
}
</script>
<style lang="">
    
</style>