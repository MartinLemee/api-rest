const express = require("express")
const routes = require("./routes/index")
const cors = require("cors")
const app = express()

// Données
const client = require("./services/connection")

app.use(express.json(), cors())

app.listen(8080, () => {
	console.log("Serveur à l'écoute du port 8080")
})

routes(app, client)

client.connect()
