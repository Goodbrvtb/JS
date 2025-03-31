function countSmileys(arr) {
  let sum = 0;
  let smileArr = [")", "D"];
  let nose = ["~", "-"];
  let eyes = [":", ";"];
  let validSmile;
  for (let face of arr) {
    if (face.length === 3) {
      if (nose.includes(face[1]) && smileArr.includes(face[2])) {
        sum += 1;
      }
    } else if (eyes.includes(face[0]) && smileArr.includes(face[1])) {
      sum += 1;
    }
  }
  return sum;
}

console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
