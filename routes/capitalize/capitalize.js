const Capitalize = require("./capitalizeClass").Capitalize
module.exports.toCapitalize = function (app) {
	// CAPITALIZE A STRING
	app.post("/capitalize", async (req, res) => {
		const body = req.body
		const string = {
			old: body.string,
			new: new Capitalize(),
		}
		string.new = string["new"].upperString(string.old)

		res.status(201)
		res.send(string)
	})
}
