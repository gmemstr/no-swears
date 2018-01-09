/**
 * no-swears - Filter out or detect swear words in your strings
 *
 * @author Gabriel Simmer <https://github.com/gmemstr>
 * @version 1.0
 * @license MIT
 **/

"use strict";

const fs = require("fs");
const path = require("path");

module.exports = {
  /**
   * Replaces bad words with asterisks
   **/
  filter: (words, callback) => {
    var finalString = words;
    swearList(lines => {
      for (var i = 0; i < lines.length; i++) {
        var bw = new RegExp(lines[i], "gi");
        finalString = finalString.replace(bw, "*".repeat(lines[i].length));
      }
      callback(finalString);
    });
  },
  /**
   * True if swearword is found, false if not
   **/
  hasSwears: (words, callback) => {
    swearList(lines => {
      var b = false;
      for (var i = 0; i < lines.length; i++) {
        if (words.indexOf(lines[i]) > -1) {
          b = true;
        }
      }
      callback(b);
    });
  },
  hasSwearsSync: (words) => {
    var lines = swearListSync()
    var b = false
    for (var i = 0; i < lines.length; i++) {
      if (words.indexOf(lines[i]) > -1) {
        b = true;
      }
    }
    return b
  }
};

var swearList = callback => {
  fs.readFile(path.join(__dirname, "swearwords.txt"), "utf8", (err, data) => {
    if (err) throw err;
    data = data.replace(new RegExp("\r", "g"), "").split("\n");
    callback(data);
  });
};
var swearListSync = () => {
  var data = fs.readFileSync(path.join(__dirname, "swearwords.txt"), "utf8")
  data = data.replace(new RegExp("\r", "g"), "").split("\n");
  return data
}
