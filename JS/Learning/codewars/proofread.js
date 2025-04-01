function proofread(str) {
  let arrStr = str.toLowerCase().split(" ");

  let finText = [];
  for (let i = 0; i < arrStr.length; i++) {
    let arrLetter = arrStr[i].split("");
    for (let g = 0; g < arrLetter.length - 1; g++) {
      if (arrLetter[g] === "i" && arrLetter[g + 1] === "e") {
        arrLetter[g] = "e";
        arrLetter[g + 1] = "i";
        g++;
      }
    }
    if (i === 0) {
      arrLetter[0] = arrLetter[0].toUpperCase();
    }

    finText.push(arrLetter.join(""));
  }
  let res = finText.join(" ");

  let finalText = res.replace(/(^|\.\s+)(.)/g, function (a, b, c) {
    return b + c.toUpperCase();
  });
  return finalText;
}

console.log(
  proofread(
    "EiiEBYeiCWe CEIWD YJEIaEIZeIQRz owTGN IEHmIEgEkzDiE IEcfWEi EiiEeiaIEaH KCeiPeIeL PuHrIehpbBEIg."
  )
);
