const fs = require('fs');
const path = require('path');

class FileReader {
    static readFile(filePath) {
        return fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
    }

    static readLines(filePath) {
        const content = this.readFile(filePath);
        return content.split(/\r?\n/);
    }
}

module.exports = FileReader;
