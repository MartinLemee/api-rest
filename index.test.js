const Capitalize = require("./routes/capitalize/capitalizeClass").Capitalize
const assert = require("assert").strict

describe("integration test", function () {
	it("should be able to capitalize a string", function () {
		let capitalize = new Capitalize()
		capitalize.add("test")
		assert.notStrictEqual(capitalize.clone(), false)
	})
})

describe("integration test", function () {
	it("should be able to detecte if it's not a string", function () {
		let capitalize = new Capitalize()
		capitalize.add(1)
		assert.notStrictEqual(capitalize.clone(), true)
	})
})

describe("integration test", function () {
	it("should be able to detecte if there is no parameter", function () {
		let capitalize = new Capitalize()
		capitalize.add()
		assert.notStrictEqual(capitalize.clone(), null)
	})
})
