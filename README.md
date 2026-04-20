# Finanzas Personales - Vue 3

## Descripción

Aplicación web desarrollada con **Vue 3** que permite gestionar finanzas personales mediante el registro de **transacciones** (ingresos y gastos) organizadas por **categorías**.

El sistema incluye autenticación de usuarios, CRUD completo, filtrado, búsqueda y visualización detallada de registros.

---

## Tecnologías utilizadas

* Vue 3 (Composition API)
* Vue Router
* Axios
* JSON Server + JSON Server Auth
* CSS básico

---

## Funcionalidades principales

### Autenticación

* Registro de usuario
* Inicio de sesión
* Manejo de token (JWT)
* Protección de rutas privadas

---

### Categorías

* Crear categoría
* Listar categorías
* Editar categoría
* Eliminar categoría

---

### Transacciones

* Crear transacción
* Listar transacciones
* Eliminar transacción
* Relación con categoría

---

### Extras

* Filtro por categoría
* Buscador de transacciones
* Ruta dinámica para ver detalle de una transacción

---

## Estructura del proyecto

```
src/
 ├── components/
 ├── views/
 │    ├── LoginView.vue
 │    ├── RegisterView.vue
 │    ├── DashboardView.vue
 │    ├── CategoriasView.vue
 │    ├── TransaccionesView.vue
 │    ├── TransaccionDetail.vue
 ├── router/
 ├── services/
 ├── App.vue
 └── main.js
```

---

## Instalación y ejecución

### 1️ Clonar repositorio

```
git clone https://github.com/hardraco/finanzas-vue.git
cd finanzas-vue
```

---

### 2️ Instalar dependencias

```
npm install
```

---

### 3️ Ejecutar backend (JSON Server Auth)

```
npm run server
```

Servidor disponible en:

```
http://localhost:3000
```

---

### 4️ Ejecutar frontend

```
npm run dev
```

Aplicación disponible en:

```
http://localhost:5173
```

---

## Uso del sistema

### Registro

1. Ir a `/register`
2. Crear un usuario con email y contraseña

### Login

1. Ir a `/`
2. Iniciar sesión con las credenciales registradas

---

### Funcionalidades

* Acceder al dashboard
* Gestionar categorías
* Crear y visualizar transacciones
* Filtrar y buscar registros
* Ver detalle de una transacción

---

## Archivo importante

El archivo `db.json` contiene los datos del sistema y debe estar incluido en el repositorio.

---

## Notas importantes

* No incluir la carpeta `node_modules`
* Es necesario tener Node.js instalado
* El backend debe estar corriendo para que la app funcione correctamente

---

## Objetivo académico

Este proyecto fue desarrollado como parte de una evaluación práctica para aplicar:

* Manejo de Vue 3
* Consumo de APIs con Axios
* Autenticación
* CRUD completo
* Manejo de rutas
* Relaciones entre entidades

---

## Estado del proyecto

✔ Funcional
✔ Cumple requisitos académicos
✔ Listo para demostración

---


## Autor

Hans Andrade
