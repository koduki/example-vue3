<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Auth from '/src/modules/auth';

const router = useRouter();
const user = ref({})
const onLogin = () => {
    Auth.login({ id: user.value.name });
    router.push({ path: "/list" });
}
</script>

<template>
    <h1>Login</h1>
    <div>
        <p>
            <label>User Name:</label>
            <input type="text" v-model="user.name" />
        </p>
        <p>
            <button @click="onLogin">Login</button>
        </p>
    </div>
</template>