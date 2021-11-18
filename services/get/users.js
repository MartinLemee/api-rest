const functions = require("../../dao/select/users")
const getAllUsers = functions.getAllUsers
const checkUser = functions.checkUser
const checkUserLogin = functions.checkUserLogin
const getUsersWith = functions.getUsersWith

module.exports.getAllUsers = function (client, res) {
	getAllUsers(client, res)
	client.end
}
module.exports.checkUser = function (req, client, res) {
	checkUser(req, client, res)
	client.end
}
module.exports.checkUserLogin = function (req, client, res) {
	checkUserLogin(req, client, res)
	client.end
}
module.exports.getUsersWith = function (req, client, res) {
	getUsersWith(req, client, res)
	client.end
}
