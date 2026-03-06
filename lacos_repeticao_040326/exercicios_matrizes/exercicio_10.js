const leia = require("readline-sync");

const matriz = new Array(10); // linhas
const mediaAlunos = [];

for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(4); // colunas
    for (let j = 0; j < matriz[i].length; j++) {
        matriz[i][j] = leia.questionFloat(`Digite a nota para o ${i + 1}º aluno no ${j + 1}º bimestre: `);
    }
}

for (let i = 0; i < matriz.length; i++) {
    let soma = 0;
    for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
    }
    mediaAlunos.push(soma / matriz[i].length);
}
const limitados = mediaAlunos.map(v =>
  Number(v.toFixed(1))); // nova array denominada de Number, onde cada elemento é o valor da array

console.log(`Média dos alunos: ${limitados.join(", ")}`);