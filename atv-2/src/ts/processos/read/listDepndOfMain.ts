import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import ImpressorCliente from "../../impressores/impressorCliente"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"

// Listar os dependentes de um Titular
export default class ListDepndOfMain extends Processo {
    private listCli: Cliente[]
    private listDepnd: Cliente[] = []
    private main!: Cliente
    private impressor!: Impressor

    constructor() {
        super()
        this.listCli = Armazem.getInstanciaUnica.getClientes
        this.execucao = true
    }

    processar(): void {
        console.clear()
        let id = this.entrada.receberNumero('Digite o id do cliente titular: ')

        while (this.execucao) {
            this.listCli.forEach(cliente => { // Passa por todos os clientes
                if (cliente.getId == id && cliente.getMain == null) { // Verifica se os ids são iguais e se não é um dependente
                    this.main = cliente
                }
            })

            if (this.main == null) {
                console.log('Nenhum cliente titular encontrado!')
                this.execucao = false
            }

            else {
                console.log('Iniciando a listagem dos dependentes desse titular...')
                this.main.getDependentes.forEach(cliente => { // Para cada dependente de um titular
                    this.listDepnd.push(cliente) // Adicionar o dependente à lista
                })

                this.listDepnd.forEach(depnd => { // Para cada dependente na lista, listar seus dados
                    this.impressor = new ImpressorCliente(depnd)
                    console.log(this.impressor.imprimir())
                })

                this.execucao = false
            }
        }
    }
}