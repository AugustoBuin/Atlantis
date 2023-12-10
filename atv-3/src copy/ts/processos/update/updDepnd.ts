import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import MenuAtualizacaoCliente from "../../menus/menuAtualizacaoCliente"
import Cliente from "../../modelos/cliente"
import RegDocs from "../create/regDocCli"

// Atualização de Dependente
export default class UpdDepnd extends Processo {
    private depnd!: Cliente

    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuAtualizacaoCliente
    }

    public processar(): void {
        let armazem = Armazem.getInstanciaUnica

        console.log('Inicializando a atualização do cliente dependente...')
        let id = this.entrada.receberNumero('Digite o id do cliente dependente: ')

        while (this.execucao) {
            armazem.getClientes.forEach(cliente => { // Para cliente 
                if (cliente.getId == id && cliente.getDependentes == null) { // Verifica se os ids são iguais e se não tem dependentes
                    this.depnd = cliente
                }
            })

            if (this.depnd == null) {
                console.log('Nenhum cliente dependente encontrado!')
                this.execucao = false
            }

            else {
                this.depnd.setNome = this.entrada.receberTexto('Digite o novo nome: ')
                this.depnd.setNomeSocial = this.entrada.receberTexto('Digite o novo nome social: ')

                this.processo = new RegDocs(this.depnd)
                this.processo.processar()

                console.log('Finalizando a atualização do cliente dependente...')
                this.execucao = false
            }
        }
    }
}