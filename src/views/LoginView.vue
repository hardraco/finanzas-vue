<template>
  <div>
    <h1>Login</h1>

    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />

    <button @click="handleLogin">Ingresar</button>

    <p v-if="error">{{ error }}</p>

    <router-link to="/register">Registrarse</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../services/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    await login(email.value, password.value)
    router.push('/dashboard')
  } catch (err) {
    error.value = 'Credenciales incorrectas'
  }
}
</script>