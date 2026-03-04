import leia from "readline-sync";

let soma = 0
let contador = 0;
let continua = true;

do {
    let numero1 = leia.questionInt(("Digite um número: "))
    if (numero1 > 0 ) {
    soma += numero1;
}
    contador += 1;
    if (numero1 === 0) {
        continua = false;
    } else if (contador % 5 === 0) {
        console.log("Caso queira encerrar o programa, digite 0.");
    }
} while (continua);
console.log(`A soma dos números digitados é: ${soma}`);