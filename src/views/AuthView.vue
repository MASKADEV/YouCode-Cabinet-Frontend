<template lang="">
    <div>
        <SignIn/>
    </div>
</template>
<script>

import SignIn from '@/components/auth/SignIn.vue'

export default {
    name : 'AuthView',
    components : {SignIn},
     mounted() {
        if(localStorage.getItem("user")) {
            this.$router.push({path : '/appointment'});
        }
    },
}  
</script>
<style lang="">
    
</style>