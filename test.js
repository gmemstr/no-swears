'use strict';

const noswears = require('./index');

let badString = 'hell brainfuck is a weird bitch';

noswears.filterSwearWords(badString, goodString => {
  let expected = '**** brain**** is a weird *****';

  console.log(
    `Testing filterSwearWords
    Want string "${expected}", got "${goodString}"`
  );

  if (goodString === expected) {
    console.log('✔ Success!');
  } else {
    console.log('✖ Failed!');
  }
});

noswears.hasSwears(badString, swearBool => {
  console.log(
    `Testing hasSwears
    Want true, got ${swearBool}`
  );

  if (swearBool === true) {
    console.log('✔ Success!');
  } else {
    console.log('✖ Failed!');
  }
});

let hasSwearsSyncResult = noswears.hasSwearsSync(badString);

console.log(
  `Testing hasSwearsSync
  Want true, got ${hasSwearsSyncResult}`
);

if (hasSwearsSyncResult) {
  console.log('✔ Success!');
} else {
  console.log('✖ Failed!');
}
