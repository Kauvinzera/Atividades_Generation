import leia from "readline-sync";

const lista = new Set<number>();
let contador: number = 0;

while (contador != 10) {
    const numero = leia.questionInt("Digite um número: ");
    lista.add(numero);
    contador +=1;

}
console.table(lista);
