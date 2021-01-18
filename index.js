/**
 * no-swears - Filter out or detect swear words in your strings
 *
 * @author Gabriel Simmer <https://github.com/gmemstr>
 * @version 1.0
 * @license MIT
 **/

"use strict";

const swearList = require("./swearList");

module.exports = {
  /**
   * Replaces bad words with asterisks
   **/
  filterSwearWords: (words, callback) => {
    let finalString = words;

    swearList.getList((lines) => {
      callback(getFilteredString(finalString, lines));
    });
  },
  filterSync: (words) => {
    var lines = swearListSync();
    var finalString = words;
    for (var i = 0; i < lines.length; i++) {
      var bw = new RegExp(lines[i], "gi");
      finalString = finalString.replace(bw, "*".repeat(lines[i].length));
    }
    return finalString;
  },
  /**
   * True if swearword is found, false if not
   **/
  hasSwears: (words, callback) => {
    swearList.getList((lines) => {
      callback(hasSwearWords(words, lines));
    });
  },
  hasSwearsSync: (words) => {
    let lines = swearList.getListSync();

    return hasSwearWords(words, lines);
  },
};

let hasSwearWords = (words, lines) => {
  let itHasASwear = false;

  for (let i = 0; i < lines.length; i++) {
    if (words.indexOf(lines[i]) > -1) {
      itHasASwear = true;
    }
  }

  return itHasASwear;
};

let getFilteredString = (finalString, lines) => {
  for (let i = 0; i < lines.length; i++) {
    let badWord = new RegExp(lines[i], "gi");
    finalString = finalString.replace(badWord, "*".repeat(lines[i].length));
  }

  return finalString;
};
