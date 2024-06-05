const express = require('express');
const path = require('path');
const cors = require('cors');
const FileReader = require('./FileReader');
const WordIndexer = require('./WordIndexer');

const app = express();
const port = 3000;

app.use(cors());

const indexer = new WordIndexer();

const excludeWords = FileReader.readLines('exclude-words.txt');
indexer.addExcludeWords(excludeWords);

for (let i = 1; i <= 3; i++) {
    const content = FileReader.readFile(`Page${i}.txt`);
    indexer.indexPage(content, i);
}

app.use(express.static(path.join(__dirname, 'views')));

app.get('/search', (req, res) => {
    const word = req.query.word;
    const pages = indexer.getWordPages(word);
    res.json({ pages });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
