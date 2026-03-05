import leia from "readline-sync";

const cores: string[] = [];

for (let i = 0; i < 5; i++) {
    cores[i] = leia.question(`Digite a ${i + 1}ª cor: `);
}

console.log("As cores ordenadas conforme digitadas foram:");
console.table(cores);

console.log("As cores em ordem crescente foram:");
cores.sort();
console.table(cores);