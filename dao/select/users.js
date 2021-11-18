module.exports.getAllUsers = function (client, res) {
	client.query(`Select * from "Users"`, (err, result) => {
		if (!err) {
			res.status(201)
			res.send(result.rows)
		} else {
			console.log(err.message)
		}
	})
}

module.exports.checkUser = function (req, client, res) {
	const user = req.body
	client.query(`SELECT * from "Users" WHERE username = '${user.userName}' OR email = '${user.email}'`, (err, result) => {
		if (!err) {
			res.status(201)
			res.send(result.rows)
		} else {
			console.log(err.message)
		}
	})
}

module.exports.checkUserLogin = function (req, client, res) {
	const user = req.body
	client.query(`SELECT * from "Users" WHERE password = '${user.password}' AND email = '${user.email}'`, (err, result) => {
		if (!err) {
			res.status(201)
			res.send(result.rows)
		} else {
			console.log(err.message)
		}
	})
}
module.exports.getUsersWith = function (req, client, res) {
	const user = req.body
	client.query(
		`SELECT name, username, lastname FROM "Users" WHERE 
			UPPER(name) LIKE UPPER('%${user.contain}%') OR
			UPPER(username) LIKE UPPER('%${user.contain}%') OR
			UPPER(lastname) LIKE UPPER('%${user.contain}%')`,
		(err, result) => {
			if (!err) {
				res.status(201)
				res.send(result.rows)
			} else {
				console.log(err.message)
			}
		}
	)
}
