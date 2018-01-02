'use strict'

const noswears = require('./index')

let badString = "hell brainfuck is weird"

noswears.filter(badString, goodString => {
	console.log("Want string \"**** brain**** is weird\", got", goodString)
	if (goodString == "**** brain**** is weird") {
		console.log("✔ Success!")
	} else {
		console.log("✖ Failed!")
	}
})