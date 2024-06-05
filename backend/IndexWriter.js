const fs = require("fs");
const path = require("path");

class IndexWriter {
  static writeIndex(index, filePath) {
    const lines = [];
    for (const word in index) {
      lines.push(`${word} : ${index[word]}`);
    }
    fs.writeFileSync(
      path.resolve(__dirname, filePath),
      lines.join("\n"),
      "utf-8"
    );
    // console.log(`Index written to file: ${filePath}`);
    this.printIndex(filePath);
  }

  static printIndex(filePath) {
    const content = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
    // console.log(`\nContents of ${filePath}:\n`);
    // console.log(content);
  }
}

module.exports = IndexWriter;
