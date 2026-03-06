const leia = require("readline-sync");

let numero1 = leia.questionInt(("Digite um número: "))
let numero2 = (leia.questionInt(`Digite outro número que seja MAIOR que ${numero1}: `))

if (numero2 > numero1) {
    for (let i = numero1; i <= numero2; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} é múltiplo de 3 e 5.`);
        } else
            console.log(`${i} não é múltiplo de 3 e 5.`);
    }
} else {
    console.log("O segundo número deve ser maior que o primeiro.");
    console.log("Intervalo inválido.");
}