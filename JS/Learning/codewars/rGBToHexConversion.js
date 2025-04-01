function rgb(r, g, b) {
  let arr = [];
  arr.push(r);
  arr.push(g);
  arr.push(b);
  let string = "";
  for (let ton of arr) {
    if (ton < 0) {
      ton = "0";
    } else if (ton > 255) {
      ton = 255;
    }
    ton = ton.toString(16);
    string += ton.length === 1 ? "0" + ton : ton;
  }
  return string.toUpperCase();
}

console.log(rgb(300, 255, 255));
