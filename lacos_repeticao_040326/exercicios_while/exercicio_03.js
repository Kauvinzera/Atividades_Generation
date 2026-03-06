const leia = require("readline-sync");

let continua = true;
let contador = 1
let cont21 = 0;
let cont50 = 0;
let cont21_50 = 0;


console.log("Digite uma idade negativa para encerrar o programa.");

while (continua) {
 let idade = leia.questionInt(`Digite a idade da ${contador}ª pessoa: `);

 if (idade < 0) {
     continua = false;
     break;
 }

 if (contador % 5 === 0) {
    console.log("Caso queira encerrar o programa, digite uma idade negativa (ex: -1).");
 }

if (idade < 21){
    cont21 += 1;
} else if (idade > 50){
    cont50 += 1;
} else {
    cont21_50 += 1;
}
  contador++;
}

console.log(`Total de pessoas com menos de 21 anos: ${cont21}`);
console.log(`Total de pessoas com mais de 50 anos: ${cont50}`);
console.log(`Total de pessoas entre 21 e 50 anos: ${cont21_50}`);