
import CadastroCliente from "../cadastros/cadastroTitular";
import Entrada from "./entrada";


let entrada = new Entrada
let cadastrarCliente = new CadastroCliente
let sysOn = true

while (sysOn) {
    console.log("\nBem vindo!")
    console.log("---- MENU ----")
    console.log("1 - Cadastrar Cliente")
    console.log("0 - Sair")

    let opcao = entrada.receberNumero("Digite uma opção: ")
    switch (opcao) {
        case 1: {
            let cli = cadastrarCliente.cadastrar()
            console.dir(cli, { depth: null })
            break;
        }

        case 0: {
            console.log("Até a próxima.")
            sysOn = false
            break;

        }

        default: {
            console.log("Opção invalida, digite novamente")
        }
    }

}