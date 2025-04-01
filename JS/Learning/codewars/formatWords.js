function formatWords(words) {
  let final = "";
  if (
    words === null ||
    words.length === 0 ||
    (words.length === 1 && words[0].length === 0)
  ) {
    return "";
  }
  let arrFilter = words.filter((item) => item.length > 0);
  for (i = 0; i < arrFilter.length; i++) {
    if (arrFilter.length === 1) {
      return `${arrFilter[0]}`;
    }
    if (arrFilter.length === 2) {
      return `${arrFilter[0]} and ${arrFilter[1]}`;
    }
    if (i === arrFilter.length - 1) {
      final += ` and ${arrFilter[i]}`;
    }
    if (i == arrFilter.length - 2) {
      final += `${arrFilter[i]}`;
    }
    if (i < arrFilter.length - 2) {
      final += `${arrFilter[i]}, `;
    }
  }
  return final;
}

console.log(formatWords(["one", "two", "three", "four"]));
console.log(formatWords(["one"]));
console.log(formatWords([]));
console.log(formatWords(null));
console.log(formatWords([""]));
console.log(formatWords(["one", "", "three"]));
