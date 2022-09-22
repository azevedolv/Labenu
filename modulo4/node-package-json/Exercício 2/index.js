//Exercício 2:
const operacao = process.argv[2]
const valor1 = Number(process.argv[3])
const valor2= Number(process.argv[4])
const blue = "\x1b[34m";
const purple = "\x1b[35m";
const green = "\x1b[32m";
const red = "\x1b[31m";
switch(operacao){
    case "soma":
        const soma = valor1 + valor2;
        if(valor1 && valor2){
            console.log(blue,`A resposta é: ${soma}`);
        } else{
            console.log(red, 'Erro. Preciso de dois parâmetros para funcionar e recebi apenas um.');
        }
        
        break
    case "sub":
        const sub = valor1 - valor2;
        if(valor1 && valor2){
            console.log(red, `A resposta é: ${sub}`);
        } else{
            console.log(red, 'Erro. Preciso de dois parâmetros para funcionar e recebi apenas um.');
        }
        break
    case "mult":
        const mult = valor1 * valor2;
        if(valor1 && valor2){
            console.log(green, `A resposta é: ${mult}`);
        } else{
            console.log(red, 'Erro. Preciso de dois parâmetros para funcionar e recebi apenas um.');
        }
        break 
    case "div":
        const div = valor1 / valor2;
        if(valor1 && valor2){
            console.log(purple, `A resposta é: ${div}`);
        } else{
            console.log(red,'Erro. Preciso de dois parâmetros para funcionar e recebi apenas um.');
        }
        break
    default:
        console.log(red, "Erro! As operações disponíveis são: soma;sub;mult;div;");
}