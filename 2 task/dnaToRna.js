function DNAtoRNA(dna) {
  let i;
  let res = "";
  console.log(dna);
  for (i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      res += "U";
    } else if (dna[i] === "U") {
      res += "T";
    } else res += dna[i];
  }
  return res;
}
