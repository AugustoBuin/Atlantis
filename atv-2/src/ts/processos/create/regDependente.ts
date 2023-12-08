import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import Cliente from "../../modelos/cliente"
import ClonarTelefone from "../clone/clonarTelefones"
import RegDocs from "./regDocCli"

// Registrar Dependentes
export default class RegDependente extends Processo {
    private main!: Cliente
    public constructor() {
        super()
        this.execucao = true
    }
    processar(): void {
        let armazem = Armazem.getInstanciaUnica
        let id = armazem.getId + 1
        let clonarTels = new ClonarTelefone

        console.log('Iniciando o cadastro de um novo dependente...')
        let idMain = this.entrada.receberNumero('Digite o id do cliente titular: ')

        while (this.execucao) {
            armazem.getClientes.forEach(cliente => { // Passando por todos os clientes no armazém 
                // Conferindo se o id do titular é igual ao id digitado e conferindo se ele não é um dependente
                if (cliente.getId == idMain && cliente.getMain == null) {
                    this.main = cliente
                }
            })

            if (this.main == null) {
                console.log('Nenhum cliente titular encontrado!')
                idMain = this.entrada.receberNumero('Digite o id do cliente titular: ')
            }

            else { this.execucao = false }
        }
        // Registrando Dependente
        let nome = this.entrada.receberTexto('Digite o nome do novo dependente: ')
        let nomeSocial = this.entrada.receberTexto('Digite o nome social do novo dependente: ')
        let dataNascimento = this.entrada.receberData('Digite a data de nascimento: ')
        let dataCadastro = this.entrada.receberData('Digite a data de cadastro: ')

        let clienteDependente = new Cliente(id, nome, nomeSocial, dataNascimento, dataCadastro)

        this.processo = new RegDocs(clienteDependente)
        this.processo.processar()

        clienteDependente.setEndereco = this.main.getEndereco.clonar()
        clienteDependente.setTelefones = clonarTels.clonar(this.main)

        clienteDependente.setMain = this.main
        this.main.setDependentes = clienteDependente

        armazem.getClientes.push(clienteDependente)
        armazem.setId = id
    }
}