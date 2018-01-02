no-swears 
===

Automagically filter out swear words in strings 

[![npm version](https://badge.fury.io/js/no-swears.svg)](https://badge.fury.io/js/no-swears)

Very simple package for censoring swear words from JavaScript strings,
replacing offending words with "\*\*\*\*". 

## Usage

```javascript
'use strict'

const noswears = require('no-swears')
```

### filter()

This is the most basic filtering function, and requires the offending 
string and a callback, returning the cleaned up string to the program.

```javascript
let badString = "this is a bitching string"

noswears.filter(badString, goodString => {
	console.log(goodString) // "this is a ****ing string"
})
```

### hasSwears()

This just returns true or false to callback depending on whether the passed string
contains a swear word

```javascript
let badString = "this is a bitching string"

noswears.hasSwears(badString, swearBool => {
	console.log(swearBool) // true
})
```