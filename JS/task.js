const arr = [
  { a: 2, b: 0 },
  { a: true, b: 22 },
  { a: null, b: null },
  { a: 1, b: 11 }
];

const res1 = arr.forEach((item) => item.a - 1);
const res2 = arr.map((item) => item.a - 1);
const res3 = arr.filter((item) => item.a - 1);
const res4 = arr.find((item) => item.a - 1);

console.log(res1); // undefined
console.log(res2); // [1,0,-1,0]
console.log(res3); //  [{ a: 2, b: 0 }]
console.log(res4); // { a: 2, b: 0 }
