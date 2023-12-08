import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import CreateCliente from "./create/createCliente"
import DelCli from "./delete/delCli"
import TipoListagemClientes from "./read/tipoListagemClientes"
import UpdCli from "./update/updCli"
import updCli from "./update/updCli"


// Classe Principal, que vai redirecionar para as outras
export default class Principal extends Processo {

    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Digite a opção desejada: ')

        switch (this.opcao) {

            case 1: // Create Cliente
                this.processo = new CreateCliente()
                this.processo.processar()
                break;

            case 2: // Read Cliente
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break;

            case 3: // Update Cliente
                this.processo = new UpdCli()
                this.processo.processar()
                break;

            case 4: // Delete Cliente
                this.processo = new DelCli()
                this.processo.processar()
                break;

            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break;

            default:
                console.log('Opção não entendida :(')
        }
    }
}