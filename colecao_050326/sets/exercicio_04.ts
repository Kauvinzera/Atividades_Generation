import leia from "readline-sync";

const lista: Set<number>= new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
let numero: number;
let continua: boolean = false;

do {
    numero = leia.questionInt("Digite o número que você deseja encontrar: ");
    if (lista.has(numero)) {
        console.log(`O número ${numero} foi encontrado.`);
    } else {
        console.log(`O número ${numero} não foi encontrado.`);
    }
    continua = leia.keyInYNStrict("Deseja procurar outro valor?");

} while (continua);

