const fs = require("fs");
const path = require("path");
const swearWordResource = path.join(__dirname, "swearwords.txt");

module.exports = {
  getList: (callback) => {
    fs.readFile(swearWordResource, "utf8", (err, wordList) => {
      if (err) {
        throw err;
      }

      callback(formatSwearWordList(wordList));
    });
  },
  getListSync: () => {
    let wordList = fs.readFileSync(swearWordResource, "utf8");

    return formatSwearWordList(wordList);
  },
};

let formatSwearWordList = (list) => {
  return list.replace(new RegExp("\r", "g"), "").split("\n");
};
