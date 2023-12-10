import Processo from "../../abstracoes/processo"
import MenuCadastroCliente from "../../menus/menuCadastroCliente"
import RegDependente from "./regDependente"
import RegMain from "./regMain"

export default class CreateCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Digite a opção desejada: ')

        switch (this.opcao) {

            case 1: // Registrar Titular
                this.processo = new RegMain()
                this.processo.processar()
                break;

            case 2: // registrar Dependente
                this.processo = new RegDependente()
                this.processo.processar()
                break;

            default:
                console.log('Opção não entendida :(')
        }
    }
}