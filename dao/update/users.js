module.exports = function (req, client, res) {
	const id = parseInt(req.params.id)
	let user = req.body
	let updateQuery = `update "Users"
                       set name = '${user.name}'
                       where "userID" = ${id}`

	client.query(updateQuery, (err, result) => {
		if (!err) {
			res.status(201)
			res.send("Update was successful")
		} else {
			console.log(err.message)
		}
	})
}
