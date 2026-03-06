import leia = require("readline-sync");
import { Queue } from "./Queue";

const fila = new Queue<string>();

let opcao: number;
let nome: string;
let deveriaContinue: boolean = true;

do {
    console.log("**************************************");
    console.log("");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("");
    console.log("**************************************");
    opcao = leia.questionInt("Digite uma opção: ");
    switch (opcao) {
        case 1:
            console.log("");
            nome = String(leia.question("Digite o nome do cliente: "));
            fila.enqueue(nome);
            fila.printQueue();
            console.log("Cliente adicionado à fila.");
            console.log("");
            break;
        case 2:
            console.log("");
            console.log("Lista de Clientes na Fila:");
            fila.printQueue();
            console.log("");
            break;
        case 3:
            if (fila.isEmpty() && opcao === 3) {
                console.log("");
                console.log("A fila está vazia.");
                console.log("");
            } else {
                console.log("");
                let clienteChamado = fila.peek();
                console.log(`Cliente ${clienteChamado} chamado!`);
                fila.dequeue();
                console.log("Fila atualizada:");
                fila.printQueue();
                console.log("");
            }
            break;
        case 0:
            console.log("");
            deveriaContinue = false;
            console.log("Programa Finalizado!");
            console.log("");
            break;
        default:
            console.log("");
            console.log("Opção inválida. Digite uma opção válida.");
            console.log("");
            break;
    } 
} while (deveriaContinue);