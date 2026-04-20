<template>
  <div v-if="transaccion">
    <h1>Detalle de Transacción</h1>

    <p><strong>Descripción:</strong> {{ transaccion.descripcion }}</p>
    <p><strong>Monto:</strong> {{ transaccion.monto }}</p>
    <p><strong>Tipo:</strong> {{ transaccion.tipo }}</p>
    <p><strong>Categoría:</strong> {{ nombreCategoria }}</p>

    <router-link to="/transacciones">Volver</router-link>
  </div>

  <p v-else>Cargando...</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '../services/api'

const route = useRoute()

const transaccion = ref(null)
const categorias = ref([])
const nombreCategoria = ref('')

// 🔹 Cargar datos
const cargarDetalle = async () => {
  const id = route.params.id

  const res = await api.get(`/transacciones/${id}`)
  transaccion.value = res.data

  const resCat = await api.get('/categorias')
  categorias.value = resCat.data

  const cat = categorias.value.find(c => c.id === transaccion.value.categoriaId)
  nombreCategoria.value = cat ? cat.nombre : 'Sin categoría'
}

onMounted(() => {
  cargarDetalle()
})
</script>