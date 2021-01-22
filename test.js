"use strict";

const noswears = require("./index");
const expected = "**** brain**** is a weird *****";
const badString = "cunt brainfuck is a weird penis";

console.log("############# Test ###############");

noswears.filterSwearWords(badString, (goodString) => {
  let expected = "**** brain**** is a weird *****";

  console.log(
    `Testing filterSwearWords
    Want string "${expected}", got "${goodString}"`,
  );

  if (goodString === expected) {
    console.log("✔ Success!\n");
  } else {
    console.log("✖ Failed!\n");
  }
});

var filterSyncResult = noswears.filterSync(badString);
console.log('Testing filter\nWant string "' + expected + '", got', expected);
if (filterSyncResult === expected) {
  console.log("✔ Success!\n");
} else {
  console.log("✖ Failed!\n");
}

noswears.hasSwears(badString, (swearBool) => {
  console.log(
    `Testing hasSwears
    Want true, got ${swearBool}`,
  );

  if (swearBool === true) {
    console.log("✔ Success!\n");
  } else {
    console.log("✖ Failed!\n");
  }
});

let hasSwearsSyncResult = noswears.hasSwearsSync(badString);

console.log(
  `Testing hasSwearsSync
  Want true, got ${hasSwearsSyncResult}`,
);

if (hasSwearsSyncResult) {
  console.log("✔ Success!\n");
} else {
  console.log("✖ Failed!\n");
}
