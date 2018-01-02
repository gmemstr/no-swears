no-swears
===

Automagically filter out swear words in strings 

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
	console.log(goodString)
})
```

More options coming soon :)