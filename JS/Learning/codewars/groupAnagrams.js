function groupAnagrams(words) {
  const obj = {};
  for (const word of words) {
    let sortWord = word.split("").sort().join("");
    if (!obj[sortWord]) {
      obj[sortWord] = [];
    }
    obj[sortWord].push(word);
  }

  return Object.values(obj);
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));
