import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import Cliente from "../../modelos/cliente"

export default class DelCli extends Processo {
    private cli!: Cliente
    constructor() {
        super()
        this.execucao = true
    }

    public processar(): void {
        let armazem = Armazem.getInstanciaUnica

        console.log('Inicializando a deleção de cliente...')
        let idCli = this.entrada.receberNumero('Digite o id do cliente: ')

        while (this.execucao) {
            armazem.getClientes.forEach(cliente => {
                if (cliente.getId == idCli && cliente.getMain == null) {
                    this.cli = cliente
                }
            })
            if (this.cli == null) {
                console.log('Nenhum cliente encontrado!')
                this.execucao = false
            } else {
                let indexCli = armazem.getClientes.findIndex(clienteTitular => {
                    return clienteTitular == this.cli
                })

                if (indexCli != -1) {
                    armazem.getClientes.splice(indexCli, 1)
                }
                console.log('Cliente deletado com sucesso!')
                this.execucao = false
            }
        }
    }
}