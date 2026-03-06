const leia = require("readline-sync");

let numero1;
let numero2;
let operador;

numero1 = leia.questionFloat("Digite o primeiro número: ");
console.log("Operadores disponíveis: +, -, *, /");
console.log("1 - Adição (+)");
console.log("2 - Subtração (-)");
console.log("3 - Multiplicação (*)");
console.log("4 - Divisão (/)");
operador = leia.questionInt("Digite o operador: ");
numero2 = leia.questionFloat("Digite o segundo número: ");

switch (operador) {
    case 1:
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case 2:
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    case 3:
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;
    case 4:
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    default:
        console.log("Operação inválida!");
        break;
        }