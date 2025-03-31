function outed(meet, boss) {
  let meetRating = 0;
  let bossRating = 0;
  for (key in meet) {
    if (key == boss) {
      bossRating = meet[key];
    }

    meetRating += meet[key];
  }
  meetRating += bossRating;

  if (meetRating / Object.keys(meet).length <= 5) {
    return "Get Out Now!";
  } else {
    return "Nice Work Champ!";
  }
}
// prettier-ignore
console.log(outed(({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}), 'laura')) ;
