'use strict'

const noswears = require('./index')

let badString = "hell brainfuck is weird"

noswears.filter(badString, goodString => {
	console.log("Testing filter\nWant string \"**** brain**** is weird\", got", goodString)
	if (goodString == "**** brain**** is weird") {
		console.log("✔ Success!")
	} else {
		console.log("✖ Failed!")
	}
})

noswears.hasSwears(badString, swearBool => {
	console.log("\nTesting hasSwears\nWant true, got", swearBool)
	if (swearBool == true) {
		console.log("✔ Success!")
	} else {
		console.log("✖ Failed!")
	}
})