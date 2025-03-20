function hexStringToRGB(hexString) {
  const objRGB = {};
  objRGB.r = parseInt(hexString.slice(1, 3), 16);
  objRGB.g = parseInt(hexString.slice(3, 5), 16);
  objRGB.b = parseInt(hexString.slice(5, 7), 16);
  return objRGB;
}

console.log(hexStringToRGB("#FF9933"));
