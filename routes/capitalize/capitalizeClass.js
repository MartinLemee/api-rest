module.exports.Capitalize = class Capitalize {
	constructor() {
		this.capitalize = null
	}

	clone() {
		return this.capitalize
	}
	add(stringToUpper) {
		if (stringToUpper) {
			let string = stringToUpper
			this.capitalize = string
		} else {
			this.capitalize = false
			this.error(0)
		}
	}
	checkIfString(stringToUpper) {
		let string = stringToUpper
		const isString = typeof string === "string" && Object.prototype.toString.call(string) === "[object String]"
		return isString
	}
	error(number) {
		/**
		 * 0 not a string
		 * 1 empty parameter
		 */
		let error = "Error"
		if (number === 0) {
			error = "No parameter have been passed"
		} else if (number === 1) {
			error = "Expected a string but received something else"
		}

		const errorThrown = new Error(error)
		return errorThrown
	}
	upperString(stringToUpper) {
		this.checkIfString(stringToUpper) ? this.add(stringToUpper) : this.error(1)
		if (this.clone()) {
			this.add(this.clone().toUpperCase())
		}
		return this.clone()
	}
}
