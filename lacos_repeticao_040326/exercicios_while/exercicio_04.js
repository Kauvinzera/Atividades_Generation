const leia = require("readline-sync");

let continua = true;
let idade;
let idenGenero;
let tipoDev;
let contador = 1;
let qtdeBackEnd = 0;
let mulherCisTransFrontEnd = 0;
let homemCisTransMobileMaior40 = 0;
let nBinarioFullStackMen30 = 0;
let mediaIdade = 0;
let somaIdade = 0;



while (continua) {

    idade = leia.questionInt(`Digite a idade do ${contador}º colaborador: `);
    idenGenero = leia.questionInt(`Digite o gênero do ${contador}º colaborador (1 - Mulher Cis, 2 - Homem Cis, 3 - Não Binário, 4 - Mulher Trans, 5 - Homem Trans, Outros): `);
    tipoDev = leia.questionInt(`Digite o tipo de desenvolvedor do ${contador}º colaborador (1 - Back-end, 2 - Front-end, 3 - Mobile, 4 - Full Stack): `);

    somaIdade += idade;
    if (tipoDev === 1) {
        qtdeBackEnd += 1;
    } else if ((idenGenero === 1 && tipoDev === 2) || (idenGenero === 4 && tipoDev === 2)) {
    mulherCisTransFrontEnd += 1;
    } else if ((idenGenero === 2 && tipoDev === 3 && idade > 40) || (idenGenero === 5 && tipoDev === 3 && idade > 40)) {
    homemCisTransMobileMaior40 += 1;
    } else if (idenGenero === 3 && tipoDev === 4 && idade < 30) {
    nBinarioFullStackMen30 += 1;
    }
    
        contador++;

    continua = leia.keyInYN("Deseja continuar a leitura dos dados de um novo colaborador ou não?");
}
mediaIdade = somaIdade / (contador - 1);

console.log(`Quantidade de desenvolvedores Back-end: ${qtdeBackEnd}`);
console.log(`Quantidade de mulheres cisgênero e transgênero que são desenvolvedoras Front-end: ${mulherCisTransFrontEnd}`);
console.log(`Quantidade de homens cisgênero e transgênero com mais de 40 anos que são desenvolvedores Mobile: ${homemCisTransMobileMaior40}`);
console.log(`Quantidade de pessoas não binárias com menos de 30 anos que são desenvolvedores Full Stack: ${nBinarioFullStackMen30}`);
console.log(`Total de colaboradores cadastrados: ${contador - 1}`);
console.log(`Média de idade dos colaboradores: ${mediaIdade.toFixed(2)} anos.`);