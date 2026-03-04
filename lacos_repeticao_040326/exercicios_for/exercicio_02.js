import leia from "readline-sync";

const pares = [];
const impares = [];

for (let i = 1; i < 11; i++) {
    let numero = leia.questionInt(`Digite o ${i}º número: `);
    if (numero % 2 === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
}

console.log(`Números pares: ${pares} sendo no total: ${pares.length} números pares.`);
console.log(`Números ímpares: ${impares} sendo no total: ${impares.length} números ímpares.`);