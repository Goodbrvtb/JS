function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.length === 0) {
    return 0;
  }

  for (let arr of arrayOfArrays) {
    if (arr === null || arr.length === 0) {
      return 0;
    }
  }
  const lengths = arrayOfArrays.map((arr) => (arr ? arr.length : 0));
  lengths.sort((a, b) => a - b);

  for (let i = lengths[0]; i <= lengths[lengths.length - 1]; i++) {
    if (!lengths.includes(i)) {
      return i;
    }
  }
  return 0;
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);
console.log(
  getLengthOfMissingArray([
    [4, 3, 0],
    [1, 2],
    [4, 1, 3, 0],
    [1, 0, 0, 4, 1, 1, 4, 4, 4],
    [0, 3, 3, 3, 2],
    [4, 0, 3, 4, 0, 1],
    [0, 2, 1, 2, 4, 3, 3],
    [4, 2, 2, 4, 0, 4, 0, 4, 0, 0],
    [3, 1, 0, 0, 2, 1, 1, 2, 0, 2, 0, 1],
    [3, 0, 2, 1, 4, 2, 2, 3]
  ])
);
