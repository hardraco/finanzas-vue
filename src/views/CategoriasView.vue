<template>
  <div>
    <h1>Categorías</h1>

    <!-- Crear -->
    <input v-model="nuevaCategoria" placeholder="Nueva categoría" />
    <button @click="crearCategoria">Agregar</button>

    <!-- Listado -->
    <ul>
      <li v-for="cat in categorias" :key="cat.id">
        <span v-if="editandoId !== cat.id">
          {{ cat.nombre }}
        </span>

        <!-- Editar -->
        <input
          v-else
          v-model="editNombre"
        />

        <button @click="eliminarCategoria(cat.id)">
          Eliminar
        </button>

        <button v-if="editandoId !== cat.id" @click="iniciarEdicion(cat)">
          Editar
        </button>

        <button v-else @click="guardarEdicion(cat.id)">
          Guardar
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const categorias = ref([])
const nuevaCategoria = ref('')

const editandoId = ref(null)
const editNombre = ref('')

// Obtener categorías
const obtenerCategorias = async () => {
  try {
    const res = await api.get('/categorias')
    categorias.value = res.data
  } catch (err) {
    console.error(err)
  }
}

// Crear
const crearCategoria = async () => {
  if (!nuevaCategoria.value) return

  try {
    await api.post('/categorias', {
      nombre: nuevaCategoria.value
    })

    nuevaCategoria.value = ''
    obtenerCategorias()
  } catch (err) {
    console.error(err)
  }
}

// Eliminar
const eliminarCategoria = async (id) => {
  try {
    await api.delete(`/categorias/${id}`)
    obtenerCategorias()
  } catch (err) {
    console.error(err)
  }
}

// Editar
const iniciarEdicion = (cat) => {
  editandoId.value = cat.id
  editNombre.value = cat.nombre
}

const guardarEdicion = async (id) => {
  try {
    await api.put(`/categorias/${id}`, {
      nombre: editNombre.value
    })

    editandoId.value = null
    editNombre.value = ''
    obtenerCategorias()
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  obtenerCategorias()
})
</script>