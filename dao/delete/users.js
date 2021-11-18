module.exports = function (req, client, res) {
	let insertQuery = `delete from "Users" where "userID" = ${req.params.id}`

	client.query(insertQuery, (err, result) => {
		if (!err) {
			res.send("Deletion was successful")
			res.status(201)
		} else {
			console.log(err.message)
		}
	})
}
