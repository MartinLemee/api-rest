const users = require("./users/users")
const capitalize = require("./capitalize/capitalize").toCapitalize

module.exports = function (app, client) {
	users(app, client)
	capitalize(app, client)
}
