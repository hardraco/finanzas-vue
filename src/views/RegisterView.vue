<template>
  <div>
    <h1>Registro</h1>

    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />

    <button @click="handleRegister">Registrarse</button>

    <p v-if="msg">{{ msg }}</p>

    <router-link to="/">Ir a login</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { register } from '../services/auth'

const email = ref('')
const password = ref('')
const msg = ref('')

const handleRegister = async () => {
  try {
    await register(email.value, password.value)
    msg.value = 'Usuario creado correctamente'
  } catch (err) {
    msg.value = 'Error al registrar'
  }
}
</script>