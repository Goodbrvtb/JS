function digPow(n, p) {
  let numbers = String(n).split("");
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += Math.pow(Number(numbers[i]), p + i);
  }
  let del = sum / n;

  if (sum === n) {
    return 1;
  } else if (sum === n * Math.round(del)) {
    return del;
  } else {
    return -1;
  }
}

console.log(digPow(46288, 5));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));
