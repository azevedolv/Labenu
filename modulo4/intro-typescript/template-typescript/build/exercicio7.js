function transformarDNA(dna) {
    let rna = "";
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case "A":
                rna += "U";
                break;
            case "T":
                rna += "A";
                break;
            case "C":
                rna += "G";
                break;
            case "G":
                rna += "C";
                break;
            default:
                rna += " ";
        }
    }
    console.log(rna);
}
transformarDNA("ATT GCT GCG CAT TAA CGA CGC GTA");
//# sourceMappingURL=exercicio7.js.map