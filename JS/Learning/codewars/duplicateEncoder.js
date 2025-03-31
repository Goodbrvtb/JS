function duplicateEncode(word) {
  let wordLower = word.toLowerCase();
  let wordArr = wordLower.split("");
  let returnWord = "";
  for (const letter in wordLower) {
    if (wordLower) {
      returnWord += "(";
    }
  }
  return returnWord;
}

console.log(duplicateEncode("ddinn"));
