function dnaStrand(dna) {
  const objDNA = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C",
  };

  let a = "";
  for (const key of dna) {
    a += objDNA[key];
  }

  return a;
}

dnaStrand("ATTGC");
