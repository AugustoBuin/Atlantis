import Processo from "../../abstracoes/processo"
import MenuDelecaoCliente from "../../menus/menuDelecaoCliente"
import DelCli from "./delCli"

// Classe para deletar Clientes
export default class TipoDelecaoClientes extends Processo {
    constructor() {
        super()
        this.menu = new MenuDelecaoCliente()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Digite a opção desejada: ')
        switch (this.opcao) {

            case 1: // Deletar Titular
                this.processo = new DelCli()
                this.processo.processar()
                break;

            case 2: // Deletar Dependente (a mesma coisa, literalmente, já que o dependente também é)
                this.processo = new DelCli()
                this.processo.processar()
                break;

            default:
                console.log('Opção não entendida :(')
        }
    }
}