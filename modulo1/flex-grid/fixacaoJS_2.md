function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const arrayRepetido = arrayDeNumeros.filter((item) =>{
    return item === numeroEscolhido
  });
  if (arrayRepetido.length > 0){
    return `O número ${numeroEscolhido} aparece ${arrayRepetido.length}x`
  } else {
    return "Número não encontrado"
  }
}