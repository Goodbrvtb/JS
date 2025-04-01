function balance(book) {
  let arrBook = book
    .split("\n")
    .map((line) => line.replace(/[^a-zA-Z0-9. ]/g, ""));
  let filterArr = [];
  for (let i = 0; i < arrBook.length; i++) {
    filterArr.push(arrBook[i].split(" ").filter((item) => item.length > 0));
  }
  let finArr = filterArr.filter((item) => item.length > 0);
  let balance = finArr.shift();
  let arrText = [];
  let totalExpense = 0;
  arrText.push(`Original Balance: ${Number(balance).toFixed(2)}`);
  let currentBalance = balance;
  for (let g = 0; g < finArr.length; g++) {
    currentBalance = currentBalance - finArr[g][2];
    totalExpense += Number(finArr[g][2]);

    arrText.push(
      `${finArr[g][0]} ${finArr[g][1]} ${Number(finArr[g][2]).toFixed(
        2
      )} Balance ${currentBalance.toFixed(2)}`
    );
  }

  arrText.push(`Total expense  ${totalExpense.toFixed(2)}`);
  arrText.push(`Average expense  ${(totalExpense / finArr.length).toFixed(2)}`);
  return arrText.join("\r\n");
}
var b1 = `1000.00!=

  125 Market !=:125.45
  126 Hardware =34.95
  127 Video! 7.45
  128 Book :14.32
  129 Gasoline ::16.10
  `;
console.log(balance(b1));
