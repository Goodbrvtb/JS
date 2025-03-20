function isPerfectLazy(n) {
  const arr = [0];
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      arr.push(i);
    }
  }
  if (arr.reduce((prev, item) => prev + item) == n) {
    return true;
  } else {
    return false;
  }
}

console.log(isPerfectLazy(6));

function isPerfectFast(n) {
  if (n <= 1) return false;

  let sum = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== 1 && i !== n / i) {
        sum += n / i;
      }
    }
  }

  return sum === n;
}

console.log(isPerfectFast(n));
