<template>
  <div>
    <h1>Dashboard</h1>

    <button @click="cargarCategorias">
      Cargar Categorías
    </button>

    <ul>
      <li v-for="cat in categorias" :key="cat.id">
        {{ cat.nombre }}
      </li>
    </ul>

    
    <router-link to="/categorias">
        Ir a Categorías
    </router-link>
    <router-link to="/transacciones">
        Ir a Transacciones
    </router-link>

    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../services/api'
import { useRouter } from 'vue-router'

const categorias = ref([])
const router = useRouter()

const cargarCategorias = async () => {
  try {
    const res = await api.get('/categorias')
    categorias.value = res.data
  } catch (err) {
    console.error('Error:', err.response?.data || err)
  }
}

const logout = () => {
  localStorage.removeItem('token')
  router.push('/')
}
</script>