import leia from "readline-sync";

const vetor = [];
const pares = [];
const impares = [];
let soma = 0;
let media = 0;

for (let i = 0; i < 10; i++) {
    let numero = leia.questionInt(`Digite o ${i + 1}º número: `);
    vetor.push(numero);
    soma += numero;
    if (numero % 2 === 0) {
        pares.push(numero);
    }
} 

for (let i = 1; i < vetor.length; i = i + 2) {
    impares.push(vetor[i]);
}
media = soma / vetor.length;
console.log(`Os números ímpares são: ${impares.join(", ")}`);
console.log(`Os números pares são: ${pares.join(", ")}`);
console.log(`A soma dos números no vetor é: ${soma}`);
console.log(`A média dos números do vetor é: ${media.toFixed(2)}`);

