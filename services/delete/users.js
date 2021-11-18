const remove = require("../../dao/delete/users")

module.exports = function (req, client, res) {
	remove(req, client, res)
	client.end
}
