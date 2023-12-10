import Processo from "../../abstracoes/processo"
import MenuAtualizacaoCliente from "../../menus/menuAtualizacaoCliente"
import UpdDepnd from "./updDepnd"
import updMain from "./updMain"

// Atualizar um Cliente
export default class UpdCli extends Processo {

    constructor() {
        super()
        this.menu = new MenuAtualizacaoCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Digite a opção desejada: ')

        switch (this.opcao) {

            case 1: // Atualizar um Titular
                this.processo = new updMain()
                this.processo.processar()
                break

            case 2: // Atualizar um Dependente
                this.processo = new UpdDepnd()
                this.processo.processar()
                break

            default:
                console.log('Opção não entendida :(')
        }
    }
}