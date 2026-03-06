const leia = require("readline-sync");

let media = 0
let soma = 0
let contadorMultiplos3 = 0;
let contador = 0;
let continua = true;

do {
    let numero1 = leia.questionInt(("Digite um número: "))
    if (numero1 !== 0 && numero1 % 3 === 0) {
    soma += numero1;
    contadorMultiplos3 += 1;
}
    contador += 1;
    if (numero1 === 0) {
        continua = false;
    } else if (contador % 5 === 0) {
        console.log("Caso queira encerrar o programa, digite 0.");
    }
} while (continua);
media = soma / contadorMultiplos3;
console.log(`A média dos números múltiplos de 3 digitados é: ${media}`);