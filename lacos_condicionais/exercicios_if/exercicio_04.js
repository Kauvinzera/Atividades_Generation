import leia from "readline-sync";

let palavra1;
let palavra2;
let palavra3;

palavra1 = leia.question("Digite se o animal é vertebrado ou invertebrado: ");

if (palavra1 === "vertebrado") {
    palavra2 = leia.question("Digite se o animal é ave ou mamífero: ");
    if (palavra2 === "ave") {
        palavra3 = leia.question("Digite se o animal é carnívoro ou onívoro: ");
        if (palavra3 === "carnívoro") {
            console.log("Águia");
        } else if (palavra3 === "onívoro") {
            console.log("Pomba");
        } else {
            console.log("Opção inválida para a terceira palavra.");
        }
        } else if (palavra2 === "mamífero") {
            palavra3 = leia.question("Digite se o animal é onívoro ou herbívoro: ");
            if (palavra3 === "onívoro") {
                console.log("Homem");
            } else if (palavra3 === "herbívoro") {
                console.log("Vaca");
            } else {
                console.log("Opção inválida para a terceira palavra.");
            }
        } else {
            console.log("Opção inválida para a segunda palavra.");
        }
    } else if (palavra1 === "invertebrado") {
        palavra2 = leia.question("Digite se o animal é inseto ou anelídeo: ");
        if (palavra2 === "inseto") {
            palavra3 = leia.question("Digite se o animal é hematófogo ou herbívoro: ")
            if (palavra3 === "hematófogo") {
                console.log("Pulga");
            } else if (palavra3 === "herbívoro") {
                console.log("Lagarta");
            } else {
                console.log("Opção inválida para a terceira palavra.");
            }
        } else if (palavra2 === "analídeo") {
            palavra3 = leia.question("Digite se o aniamal é hematófogo ou onívoro: ")
            if (palavra3 === "hematófogo") {
                console.log("Sanguessuga");
            } else if (palavra3 === "onívoro") {
                console.log("Minhoca");
            } else {
                console.log("Opção inválida para a terceira palavra.");
            }
        } else {
            console.log("Opção inválida para a segunda palavra.");
        }
    } else {
        console.log("Opção inválida para a primeira palavra.");
    } 