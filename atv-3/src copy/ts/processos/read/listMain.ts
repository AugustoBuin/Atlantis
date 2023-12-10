import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import ImpressorCliente from "../../impressores/impressorCliente"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"

// Listagem de todos os Titulares
export default class ListMain extends Processo {
    private cli: Cliente[]
    private impressor!: Impressor

    constructor() {
        super()
        this.cli = Armazem.getInstanciaUnica.getClientes
        this.execucao = true
    }
    // Verificação de o Titular existe
    private main(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.getMain == undefined) {
            verificacao = true
        }

        return verificacao
    }

    processar(): void {
        console.clear()
        this.cli.forEach(cliente => { // Para cada Titular, listar seus dados
            if (this.main(cliente)) { // Se existir
                console.log('Iniciando a listagem dos clientes titulares...')
                this.impressor = new ImpressorCliente(cliente)
                console.log(this.impressor.imprimir())
            }
        })
    }

}