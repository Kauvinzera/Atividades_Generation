import leia from "readline-sync";

const valores: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numero: number;
let posicao: number;
let continua: boolean = true;
do {
numero = leia.questionInt("Digite o número que você deseja encontrar: ");
if (valores.includes(numero)) {
    posicao = valores.indexOf(numero);
        console.log(`A posição do número ${numero} está localizado na posição: ${posicao}`);
        continua = false;
} else {
    console.log(`O número ${numero} não foi encontrado.`);
}  
    continua = leia.keyInYNStrict("Deseja procurar outro valor?");
} while (continua);