function mostCommonWord(string) {
    let map = new Map();
    let maxWord = "";
    let maxFreq = 0;
    let arr = string.split(' ');
    for (let word of arr) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
            if (map.get(word) > maxFreq) {
                maxFreq = map.get(word);
                maxWord = word;
            }
        } else
            map.set(word, 1);
    }
    return maxWord;
}

console.log(mostCommonWord("far do in a do far galaxy far so a far do  away away"))