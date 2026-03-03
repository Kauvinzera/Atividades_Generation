import leia from "readline-sync";

let valorA;
let valorB;
let valorC;

valorA = leia.questionInt("Digite o valor A: ");
valorB = leia.questionInt("Digite o valor B: ");
valorC = leia.questionInt("Digite o valor C: ");

if (valorA + valorB > valorC) {
    console.log(`${valorA} + ${valorB} = ${valorA + valorB} > ${valorC}`);
    console.log("A soma de A + B é Maior que C");
} else if (valorA + valorB < valorC) {
    console.log(`${valorA} + ${valorB} = ${valorA + valorB} < ${valorC}`);
    console.log("A soma de A + B é Menor que C");
} else {
    console.log(`${valorA} + ${valorB} = ${valorA + valorB} = ${valorC}`);
    console.log("A soma de A + B é Igual a C");
}