function dnaStrand(dna) {
  // prettier-ignore
  const objDNA = {
     'A': "T",
      'T': "A",
      'C': "G",
      'G': "C"
    };

  let a = "";
  for (const key of dna) {
    console.log(objDNA[key]);
    a += objDNA[key];
  }

  return a;
}

dnaStrand("ATTGC");
