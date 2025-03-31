function scoreboard(string) {
  // prettier-ignore
  const dictionary={
      'nil': 0,
      'one':1,
      'two':2,
      'three':3,
      'four':4,
      'five':5,
      'six':6,
      'seven':7,
      'eight':8,
      'nine':9,
    }
  let phrase = string.split(" ");
  let score = [];
  for (const key of phrase) {
    if (dictionary[key] !== undefined) {
      score.push(dictionary[key]);
    }
  }
  return score, `"Should return: [${score}]"`;
}
console.log(scoreboard("new score: two three"));
console.log(scoreboard("The score is four nil"));
