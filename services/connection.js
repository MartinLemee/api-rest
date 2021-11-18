const { Client } = require("pg")

const client = new Client({
	host: "localhost",
	user: "",
	port: 5432,
	password: "",
	database: "apirest",
})

module.exports = client
