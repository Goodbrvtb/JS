function dataReverse(data) {
  let arr = [];
  for (let i = data.length; i > 0; i -= 8) {
    let arrTemp = data.slice(i - 8, i);
    arr.push(arrTemp);
  }
  return arr.flat();
}
console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0
  ])
);
