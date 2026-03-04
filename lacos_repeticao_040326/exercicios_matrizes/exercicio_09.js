import leia from "readline-sync";

const matriz = new Array(3); // linhas
let diaPrincipal = [];
let diaSecundario = [];
let somaPrincipal = 0;
let somaSecundaria = 0;
let coluna1 = [];
let coluna2 = [];
let coluna3 = [];

for (let i = 0; i < matriz.length; i++) { // Loop para preencher a matriz
    matriz[i] = new Array(3); // colunas
    for (let j = 0; j < matriz[i].length; j++){
        matriz[i][j] = leia.questionInt(`Digite o número para a posição [${i}][${j}]: `);
    if (i === j) {
        diaPrincipal.push(matriz[i][i]);
        somaPrincipal += matriz[i][i];
    }
    }
}
for (let i = 0; i < matriz.length; i++) { // Loop para preencher os vetores das colunas e poder inverter a primeira e terceira coluna
    for (let j = 0; j < matriz[i].length; j++) {
        coluna1.push(matriz[0][j]);
        coluna2.push(matriz[1][j]);
        coluna3.push(matriz[2][j]);
    }
}
coluna1.reverse();
coluna3.reverse();

diaSecundario.push(coluna1[0]);
somaSecundaria += coluna3[2] + coluna1[0];


for (let i = 0; i < matriz.length; i++) { // Loop para preencher a diagonal secundária e calcular a soma da diagonal secundária
    for (let j = 0; j < matriz[i].length; j++) {
        if (i === 1 && j === 1) {
        if (!diaSecundario[1]) {
    diaSecundario[1] = [];
}
        diaSecundario[1].push(matriz[i][j]);
        somaSecundaria += matriz[i][j];
    }
}
}

diaSecundario.push(coluna3[2]);

console.log(`Elementos da diagonal principal: ${diaPrincipal.join(", ")}`);
console.log(`Elementos da diagonal secundária: ${diaSecundario.join(", ")}`);
console.log(`Soma dos elementos da diagonal principal: ${somaPrincipal}`);
console.log(`Soma dos elementos da diagonal secundária: ${somaSecundaria}`);

