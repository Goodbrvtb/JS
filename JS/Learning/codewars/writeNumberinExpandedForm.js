function expandedForm(num) {
  let arrNum = num.toString().split("");
  let text = "";
  for (let index in arrNum) {
    if (arrNum[index] > 0) {
      text += `${arrNum[index].toString()}${"0".repeat(
        arrNum.length - index - 1
      )} + `;
    }
  }
  return text.slice(0, -3);
}

console.log(expandedForm(92093403034573));
console.log(expandedForm(70304));
