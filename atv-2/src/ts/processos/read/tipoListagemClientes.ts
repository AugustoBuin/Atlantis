import Processo from "../../abstracoes/processo"
import MenuListagemClientes from "../../menus/menuListagemClientes"
import ListCli from "./listCli"
import ListDepnd from "./listDepnd"
import ListDepndOfMain from "./listDepndOfMain"
import ListMain from "./listMain"
import ListMainOfDepnd from "./listMainOfDepnd"

// Classe das Listagens
export default class TipoListagemClientes extends Processo {

    constructor() {
        super()
        this.menu = new MenuListagemClientes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Digite a opção desejada: ')

        switch (this.opcao) {

            case 1: // Listar todos os titulares
                this.processo = new ListMain()
                this.processo.processar()
                break;

            case 2: // Listar todos os dependentes de um titular
                this.processo = new ListDepndOfMain()
                this.processo.processar()
                break

            case 3: // Listar todos os dependentes
                this.processo = new ListDepnd()
                this.processo.processar()
                break;

            case 4: // Listar o titular de um dependente
                this.processo = new ListMainOfDepnd()
                this.processo.processar()
                break

            case 5: // Listar um único cliente
                this.processo = new ListCli()
                this.processo.processar()
                break;

            default:
                console.log('Opção não entendida... :(')
        }
    }
}