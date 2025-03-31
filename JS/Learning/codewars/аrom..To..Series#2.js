function findPair(arr1, arr2) {
  let sumMap = {};

  for (let i = 0; i < arr1.length; i++) {
    let sum = arr1[i] + arr2[i];
    if (!sumMap[sum]) {
      sumMap[sum] = [];
    }
    sumMap[sum].push([arr1[i], arr2[i]]);
  }
  let maxCount = 0;
  let resultSum = null;
  for (const sum in sumMap) {
    if (sumMap[sum].length > maxCount) {
      maxCount = sumMap[sum].length;
      resultSum = sum;
    } else if (sumMap[sum].length === maxCount) {
      if (parseInt(sum) > parseInt(resultSum)) {
        resultSum = sum;
      }
    }
  }
  if (maxCount === 1) {
    return [];
  }
  return sumMap[resultSum];
}
console.log(
  findPair(
    [
      -222, 1029, 436, 626, 384, 1705, 989, 1149, 102, 1, 47, -448, 203, 1285,
      1023, 1050, 1497, 790, 996, 387, 977
    ],
    [
      1310, 59, 252, 993, 304, 857, 142, -61, 586, 886, 1909, 1536, 885, 865,
      933, 1165, -409, -102, -308, 301, 111
    ]
  )
);
console.log(findPair([1, 2, 3, 4, 5], [-1, 2, -3, 4, -5]));
