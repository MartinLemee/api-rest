module.exports = function (req, client, res) {
	const user = req.body
	let insertQuery = `insert into "Users" (name, lastname, email, username, password) 
                       values('${user.name}','${user.lastName}','${user.email}','${user.userName}','${user.password}')`

	client.query(insertQuery, (err, result) => {
		if (!err) {
			res.send("Insertion was successful")
			res.status(201)
		} else {
			console.log(err.message)
		}
	})
}
