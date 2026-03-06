import leia = require("readline-sync");
import { Stack } from "./Stack";


const pilha = new Stack<string>();

let opcao: number;
let nome: string;
let deveriaContinue: boolean = true;

do {
    console.log("**************************************");
    console.log("");
    console.log("1 - Adicionar Livro na pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da pilha");
    console.log("0 - Sair");
    console.log("");
    console.log("**************************************");
    opcao = leia.questionInt("Digite uma opção: ");

       switch (opcao) {
            case 1:
                console.log("");
                nome = String(leia.question("Digite o nome do Livro: "));
                pilha.push(nome);
                pilha.printStack();
                console.log("Livro adicionado!");
                console.log("");
                break;
            case 2:
                console.log("");
                console.log("Lista de Livros na Pilha:");
                pilha.printStack();
                console.log("");
                break;
            case 3:
                if (pilha.isEmpty() && opcao === 3) {
                    console.log("");
                    console.log("A Pilha está vazia.");
                    console.log("");
                } else {
                    console.log("");
                    let livroRetirado = pilha.pop();
                    console.log(`Livro ${livroRetirado} retirado da pilha.`);
                    console.log("Pilha atualizada:");
                    pilha.printStack();
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
