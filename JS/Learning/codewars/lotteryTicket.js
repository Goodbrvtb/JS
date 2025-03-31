function bingo(ticket, win) {
  let sumWin = 0;
  for (let tick of ticket) {
    let arrAbc = tick[0].split("");

    if (arrAbc.some((abc) => abc.charCodeAt(0) === tick[1])) {
      sumWin += 1;
    }
  }

  if (sumWin >= win) {
    return "Winner!";
  } else {
    return "Loser!";
  }
}

console.log(
  bingo(
    [
      ["EHVF", 72],
      ["VHQ", 86],
      ["GPWAN", 84],
      ["GGYZB", 80],
      ["SAA", 65],
      ["NWGIZA", 84],
      ["WRQ", 83],
      ["XPZ", 69],
      ["HB", 76],
      ["NN", 90]
    ],
    4
  )
);
