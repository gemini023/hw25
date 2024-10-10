<template>
    <div>
        // form login
        <form @submit.prevent="login">
            <input type="text" v-model="username" placeholder="Username" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref} from 'vue'
     const username = ref('');
    const password = ref('');
</script>

<style lang="scss" scoped>

</style>