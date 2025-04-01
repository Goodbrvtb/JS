function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let arr1 = arr.slice(0, i);
    let arr2 = arr.slice(i + 1);

    if (
      arr1.reduce((prev, item) => prev + item, 0) ===
      arr2.reduce((prev, item) => prev + item, 0)
    ) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
