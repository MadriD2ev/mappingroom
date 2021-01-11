const express = require('express')
const app = express()
const PORT = 3001 || process.env.PORT
const { db } = require('./config/database')
const routerRooms = require('./routes/rooms')
const bodyParser = require('body-parser')
const cors = require('cors')

db.authenticate()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routerRooms)

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})

