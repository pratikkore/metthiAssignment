class WordIndexer {
    constructor() {
        this.index = {};
        this.excludeWords = new Set();
    }

    addExcludeWords(words) {
        words.forEach(word => this.excludeWords.add(word.toLowerCase()));
    }

    indexPage(content, pageNumber) {
        const words = content.split(/\W+/).map(word => word.toLowerCase());
        words.forEach(word => {
            if (word && !this.excludeWords.has(word)) {
                if (!this.index[word]) {
                    this.index[word] = new Set();
                }
                this.index[word].add(pageNumber);
            }
        });
    }

    getWordPages(word) {
        const lowerCaseWord = word.toLowerCase();
        return this.index[lowerCaseWord] ? Array.from(this.index[lowerCaseWord]).sort((a, b) => a - b).join(',') : null;
    }
}

module.exports = WordIndexer;
