import Menu from "../interfaces/menu";

export default class MenuCadastroCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`----------------------`)
        console.log(`| Qual o tipo do cliente que irá ser cadastro? `)
        console.log(`----------------------`)
        console.log(`| 1 - Titular`)
        console.log(`| 2 - Dependente`)
        console.log(`----------------------`)
    }
}