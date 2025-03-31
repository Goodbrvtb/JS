function findUnique(numbers) {
  const count = {};
  for (const number of numbers) {
    count[number] = (count[number] || 0) + 1;
  }
  for (const number of numbers) {
    if (count[number] === 1) {
      return number;
    }
  }
  return null;
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8]));
