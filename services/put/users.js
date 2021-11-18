const update = require("../../dao/update/users")

module.exports = function (req, client, res) {
	update(req, client, res)
	client.end
}
