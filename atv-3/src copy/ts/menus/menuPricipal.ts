import Menu from "../interfaces/menu";

export default class MenuPrincipal implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`----------------------`)
        console.log(`| Por favor, selecione uma opção...`)
        console.log(`----------------------`)
        console.log(`| Opções para cliente:`)
        console.log(`----------------------`)
        console.log(`| 1 - Cadastrar cliente`)
        console.log(`| 2 - Listar cliente(s)`)
        console.log(`| 3 - Editar cliente`)
        console.log(`| 4 - Excluir cliente`)
        console.log(`----------------------`)
        console.log(`| Opções de acomodação (gestão):`)
        console.log(`----------------------`)
        console.log(`| 5 - Listar acomodações`)
        console.log(`| 6 - Check-in do cliente`)
        console.log(`| 7 - Check-out do cliente`)
        console.log(`----------------------`)
        console.log(`****************************`)
        console.log(`----------------------`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------`)
    }
}