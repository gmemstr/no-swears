"use strict";

const noswears = require("./index");

let badString = "hell brainfuck is a weird bitch";

noswears.filter(badString, goodString => {
  var expected = "**** brain**** is a weird *****";
  console.log(
    'Testing filter\nWant string "' + expected + '", got',
    goodString
  );
  if (goodString == expected) {
    console.log("✔ Success!");
  } else {
    console.log("✖ Failed!");
  }
});

noswears.hasSwears(badString, swearBool => {
  console.log("\nTesting hasSwears\nWant true, got", swearBool);
  if (swearBool == true) {
    console.log("✔ Success!");
  } else {
    console.log("✖ Failed!");
  }
});

