//exercicio1
function checaTriangulo(a:number, b:number, c:number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  console.log(checaTriangulo(3,3,3));

