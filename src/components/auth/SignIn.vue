<template >
    <div>
        <div class=" w-screen bg-gray-50 h-screen flex flex-col items-center justify-center">
            <form @submit.prevent="submit" class="flex flex-col items-center h-[250px] w-[400px] bg-white shadow-lg justify-center rounded">
                <h1 class="mt-3 font-[Poppins] font-semibold text-2xl">Sign In</h1>
                <input v-model="id" placeholder="Enter ID" class ="mt-6 border-indigo-500 border-2 w-80 px-3 py-3 rounded-md"/>
                <div v-if="err.length > 0" class="text-start text-red-400 fonr-[Poopins]">{{err}}</div>
                <button class="mt-5 px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg">Sign in</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name : 'SignIn',
    methods: {
        async submit () {
            if(this.id !== null) {
                try {
                    const url = "http://172.16.139.9/Booking_Medical_Backend/users/signin";
                    let res = await axios.post(url, JSON.stringify({id : this.id}));
                    if(res.data.error) {
                         this.err = res.data.message;
                        console.log(this.err);
                    }
                    else {
                        localStorage.setItem("user", true);
                        localStorage.setItem("id", res.data.id);
                        this.$router.push({ path: '/appointment'})
                    }
                }catch(error) {
                    console.log(error);
                }
            }
        }
    },
    data : () => {
        return {
            id : '',
            err:'',
        }
    }
}
</script>