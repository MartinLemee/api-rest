const insert = require("../../dao/insert/users")

module.exports = function (req, client, res) {
	insert(req, client, res)
	client.end
}
