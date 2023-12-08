import Processo from "../../abstracoes/processo"
import MenuDocumento from "../../menus/menuDocumento"
import Cliente from "../../modelos/cliente"
import RegCpf from "./regCpf"
import RegPassaporte from "./regPassaporte"
import RegRg from "./regRg"

// Registrar Documentos
export default class RegDocs extends Processo {
    private cli: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cli = cliente
        this.menu = new MenuDocumento()
        this.execucao = true
    }

    processar(): void {
        console.log('Inciando o cadastro de documentos...')
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Digite a opção desejada: ')
            switch (this.opcao) {

                case 1: // Registrar CPF
                    this.processo = new RegCpf(this.cli)
                    this.processo.processar()
                    break

                case 2: // Registrar RG
                    this.processo = new RegRg(this.cli)
                    this.processo.processar()
                    break

                case 3: // Registrar Passaporte
                    this.processo = new RegPassaporte(this.cli)
                    this.processo.processar()
                    break

                case 0:
                    this.execucao = false
                    break

                default:
                    console.log('Opção não entendida :(')
            }
        }
    }
}