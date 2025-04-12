function parseInt(string) {
  const numberMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000
  };

  const wordArray = string.replace(/-/g, " ").split(" ");

  let total = 0;
  let current = 0;

  for (const word of wordArray) {
    if (word === "and") {
      continue;
    }

    if (numberMap[word] === undefined) {
      throw new Error(`Unknown number word: "${word}"`);
    }
    if (numberMap[word] === 100) {
      current *= numberMap[word];
    } else if (word === "thousand" || word === "million") {
      total += current * numberMap[word];
      current = 0;
    } else {
      current += numberMap[word];
    }
  }

  total += current;
  return total;
}

console.log(
  parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
);
