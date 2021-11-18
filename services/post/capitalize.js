module.exports.capitalize = function (req, res) {
	const data = req.body
	return (res = data.string.toUpperCase())
}
