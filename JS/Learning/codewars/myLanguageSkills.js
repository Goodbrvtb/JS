function myLanguages(results) {
  const mySkills = Object.entries(results);

  const res = mySkills
    .filter(([language, score]) => score >= 60)
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA);

  return res.map(([language]) => language);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
