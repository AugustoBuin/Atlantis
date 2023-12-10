import Menu from "../interfaces/menu"


export default class MenuCadastroAcomodacao implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`----------------------`)
        console.log(`| Qual o tipo de acomodação escolhida? `)
        console.log(`----------------------`)
        console.log(`| 1 - Solteiro Simples`)
        console.log(`| 2 - Solteiro Mais`)
        console.log(`| 3 - Casal Simples`)
        console.log(`| 4 - Família Simples`)
        console.log(`| 5 - Família Mais`)
        console.log(`| 6 - Família Super`)
        console.log(`----------------------`)
    }
}