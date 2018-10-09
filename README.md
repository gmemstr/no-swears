no-swears 
===

Automagically filter out swear words in strings 

[![npm version](https://badge.fury.io/js/no-swears.svg)](https://badge.fury.io/js/no-swears)

Very simple package for censoring swear words from JavaScript strings,
replacing offending words with "\*\*\*\*". 

## Usage

```bash
npm install --save no-swears
```

```javascript
'use strict'

const noswears = require('no-swears')
```

### filterSwearWords(string, callback)

This is the most basic filtering function, and requires the offending 
string and a callback, returning the cleaned up string to the program.

```javascript
let badString = "this is a bitching string"

noswears.filterSwearWords(badString, goodString => {
	console.log(goodString) // "this is a ****ing string"
})
```

### hasSwears(string, callback)

This just returns true or false to callback depending on whether the passed string
contains a swear word

```javascript
let badString = "this is a bitching string"

noswears.hasSwears(badString, swearBool => {
	console.log(swearBool) // true
})
```

### hasSwearsSync(string)

This just returns true or false synchronously to be used in true/false conditions

```javascript
let badString = "this is a bitching string"

if (noswears.hasSwearsSync(badString)) {
	console.log("Has swears!") // "Has swears"!
}
```