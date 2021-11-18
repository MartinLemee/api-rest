const remove = require("../../services/delete/users")
const getAllUsers = require("../../services/get/users").getAllUsers
const checkUser = require("../../services/get/users").checkUser
const checkUserLogin = require("../../services/get/users").checkUserLogin
const getUsersWith = require("../../services/get/users").getUsersWith
const post = require("../../services/post/users")
const put = require("../../services/put/users")

module.exports = function (app, client) {
	/** GET */
	app.get("/users", (req, res) => {
		getAllUsers(client, res)
	})
	app.post("/users/search", (req, res) => {
		getUsersWith(req, client, res)
	})

	// login and signin check
	app.post("/user/check", (req, res) => {
		checkUser(req, client, res)
	})
	// login and signin check
	app.post("/user/check/login", (req, res) => {
		checkUserLogin(req, client, res)
	})

	/** POST */
	app.post("/users", (req, res) => {
		post(req, client, res)
	})

	/** PUT */
	app.put("/users/:id", (req, res) => {
		put(req, client, res)
	})

	/** DELETE */
	app.delete("/users/:id", (req, res) => {
		remove(req, client, res)
	})
}
