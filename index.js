/** 
 * no-swears - Filer our swear words from your strings
 *
 * @author Gabriel Simmer <https://github.com/gmemstr>
 * @version 1.0
 * @license MIT
 **/

'use strict'

const fs = require('fs')
const path = require('path')

module.exports = {
	/**
   * Replaces bad words with asterisks
   *
   * @param {string} words - String of words to filter
   *
   * @returns {string} String of words (censored).
   **/
	filter: (words, callback) => {
		var finalString = words
		fs.readFile(path.join(__dirname,'swearwords.txt'), 'utf8', (err, data) => {
			if (err) throw err
			// Trim down file input to remove weird encoding/returns
			var lines = data.replace(new RegExp('\r','g'),'').split('\n')
			for (var i = 0; i < lines.length; i++) {
				var bw = new RegExp(lines[i], 'gi')
				finalString = finalString.replace(bw, '****')
			}
			callback(finalString)
		});
	}
}