const fs = require('fs');
const request = require('request');
const path = require('path');
const swearWordResource = path.join(__dirname, 'swearwords.txt');

module.exports = {
  getRemoteList: (url, callback) => {
    request.get(url, function (err, response, body) {
      callback(formatSwearWordList(body))
    });
  },
  getList: (callback) => {
    fs.readFile(swearWordResource, 'utf8', (err, wordList) => {
      if (err) {
        throw err;
      }

      callback(formatSwearWordList(wordList));
    });
  },
  getListSync: () => {
    let wordList = fs.readFileSync(swearWordResource, 'utf8');

    return formatSwearWordList(wordList);
  }
};

let formatSwearWordList = (list) => {
  return list.replace(new RegExp('\r', 'g'), '').split('\n');
};
