import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import ImpressorCliente from "../../impressores/impressorCliente"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"

// Listar Titular de um Dependente 
export default class ListMainOfDepnd extends Processo {
    private listCli: Cliente[]
    private Depnd!: Cliente
    private impressor!: Impressor
    constructor() {
        super()
        this.listCli = Armazem.getInstanciaUnica.getClientes
        this.execucao = true
    }
    processar(): void {
        console.clear()
        let id = this.entrada.receberNumero('Digite o id do dependente: ')

        while (this.execucao) {
            this.listCli.forEach(cliente => {                          // Para cada cliente:
                if (cliente.getId == id && cliente.getMain != null) { // se não for dependente e os ids forem iguais 
                    this.Depnd = cliente
                }
            })

            if (this.Depnd == null) {
                console.log('Nenhum dependente encontrado!')
                this.execucao = false
            }

            else {
                console.log('Iniciando a listagem do titular desse dependente...')
                this.impressor = new ImpressorCliente(this.Depnd.getMain)
                console.log(this.impressor.imprimir())
                this.execucao = false
            }

        }
    }
}