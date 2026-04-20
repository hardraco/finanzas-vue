const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require('cors')

const app = jsonServer.create()
const router = jsonServer.router('db.json')

app.db = router.db

// Middlewares
app.use(cors())
app.use(jsonServer.defaults())

// Reglas de autorización
const rules = auth.rewriter({
  "/users*": 600,
  "/categorias*": 660,
  "/transacciones*": 660
})

app.use(rules)

// Auth DESPUÉS de rules
app.use(auth)

// Router al final
app.use(router)

app.listen(3000, () => {
  console.log('JSON Server Auth corriendo en http://localhost:3000')
})