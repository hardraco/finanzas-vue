<template>
  <div>
    <h1>Transacciones</h1>

    <!-- Crear -->
    <input v-model="descripcion" placeholder="Descripción" />
    <input v-model="monto" type="number" placeholder="Monto" />

    <select v-model="tipo">
      <option value="ingreso">Ingreso</option>
      <option value="gasto">Gasto</option>
    </select>

    <select v-model="categoriaId">
      <option disabled value="">Seleccione categoría</option>
      <option v-for="cat in categorias" :key="cat.id" :value="cat.id">
        {{ cat.nombre }}
      </option>
    </select>

    <button @click="crearTransaccion">Agregar</button>

    <!-- Filtro -->
    <select v-model="filtroCategoria" @change="filtrar">
      <option value="">Todas</option>
      <option v-for="cat in categorias" :key="cat.id" :value="cat.id">
        {{ cat.nombre }}
      </option>
    </select>

    <!-- Buscador -->
    <input v-model="busqueda" placeholder="Buscar..." @input="buscar" />

    <!-- Listado -->
    <ul>
      <li v-for="t in transacciones" :key="t.id">
        <router-link :to="`/transaccion/${t.id}`">
            {{ t.descripcion }}
        </router-link>

        - {{ t.monto }} - {{ t.tipo }} -
        {{ obtenerNombreCategoria(t.categoriaId) }}

        <button @click="eliminarTransaccion(t.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const transacciones = ref([])
const categorias = ref([])

// Crear
const descripcion = ref('')
const monto = ref('')
const tipo = ref('gasto')
const categoriaId = ref('')

// Filtro y búsqueda
const filtroCategoria = ref('')
const busqueda = ref('')

// Cargar categorías
const cargarCategorias = async () => {
  const res = await api.get('/categorias')
  categorias.value = res.data
}

// Obtener transacciones
const obtenerTransacciones = async () => {
  const res = await api.get('/transacciones')
  transacciones.value = res.data
}

// Crear
const crearTransaccion = async () => {
  if (!descripcion.value || !monto.value || !categoriaId.value) return

  await api.post('/transacciones', {
    descripcion: descripcion.value,
    monto: Number(monto.value),
    tipo: tipo.value,
    categoriaId: Number(categoriaId.value)
  })

  descripcion.value = ''
  monto.value = ''
  categoriaId.value = ''

  obtenerTransacciones()
}

// Eliminar
const eliminarTransaccion = async (id) => {
  await api.delete(`/transacciones/${id}`)
  obtenerTransacciones()
}

// Obtener nombre categoría
const obtenerNombreCategoria = (id) => {
  const cat = categorias.value.find(c => c.id === id)
  return cat ? cat.nombre : 'Sin categoría'
}

// Filtro
const filtrar = async () => {
  if (!filtroCategoria.value) {
    obtenerTransacciones()
  } else {
    const res = await api.get(`/transacciones?categoriaId=${filtroCategoria.value}`)
    transacciones.value = res.data
  }
}

// Buscador
const buscar = async () => {
  if (!busqueda.value) {
    obtenerTransacciones()
  } else {
    const res = await api.get(`/transacciones?q=${busqueda.value}`)
    transacciones.value = res.data
  }
}

onMounted(() => {
  cargarCategorias()
  obtenerTransacciones()
})
</script>