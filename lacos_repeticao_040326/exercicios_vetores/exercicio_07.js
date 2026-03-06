const leia = require("readline-sync");

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let continua = true;
let valor;
let posicao;
while (continua) {  
    valor = leia.questionInt("Digite um número e verifique se ele está presente no vetor: ");
    if (vetor.indexOf(valor) !== -1) {
        console.log(`O número ${valor} está presente no vetor.`);
        posicao = vetor.indexOf(valor);
        console.log(`A posição do número ${valor} no vetor é a: ${posicao}.`);
        continua = false;
    } else {
        console.log(`O número ${valor} não foi encontrado!`);
    }

}