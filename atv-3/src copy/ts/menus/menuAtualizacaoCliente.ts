import Menu from "../interfaces/menu";

export default class MenuAtualizacaoCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`----------------------`)
        console.log(`| Qual o tipo do cliente que irá ser atualizado? `)
        console.log(`----------------------`)
        console.log(`| 1 - Titular`)
        console.log(`| 2 - Dependente`)
        console.log(`----------------------`)
    }
}