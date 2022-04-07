<template >
    <div>
        <div class=" w-screen bg-gray-50 h-screen flex flex-col items-center justify-center">
            <form @submit.prevent="submit" class="flex flex-col items-center h-[250px] w-[400px] bg-white shadow-lg justify-center rounded">
                <h1 class="mt-3 font-[Poppins] font-semibold text-2xl">Sign In</h1>
                <input v-model="id" placeholder="Enter ID" class ="mt-6 border-indigo-500 border-2 w-80 px-3 py-3 rounded-md"/>
                <button class="mt-5 px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg">Sign in</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name : 'SignIn',
    methods: {
        submit(){
            console.log(this.id);
        }
    },
    data : () => {
        return {
            id : '',
        }
    }
}
</script>