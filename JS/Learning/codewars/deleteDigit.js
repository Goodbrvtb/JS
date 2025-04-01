function deleteDigit(n) {
  let str = n.toString().split("");
  let temp = [];
  if (str.length === 2) {
    return str[0] > str[1] ? Number(str[0]) : Number(str[1]);
  }
  for (let i = 0; i < str.length; i++) {
    temp.push(
      Number(
        str
          .filter((item, index) => !(index == i))
          .reduce((prev, item) => prev + item, "")
      )
    );
  }
  return Math.max(...temp);
}

console.log(deleteDigit(152));
console.log(deleteDigit(1001));
console.log(deleteDigit(10));
