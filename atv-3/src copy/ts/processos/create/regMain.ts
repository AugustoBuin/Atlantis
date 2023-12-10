import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import Cliente from "../../modelos/cliente"
import RegDocs from "./regDocCli"
import RegMainEnd from "./regMainEnd"
import regMainTel from "./regMainTel"

// Registrar Titular
export default class RegMain extends Processo {
    processar(): void {
        let armazem = Armazem.getInstanciaUnica

        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.receberTexto('Digite o nome do novo cliente: ')
        let nomeSocial = this.entrada.receberTexto('Digite o nome social do novo cliente: ')
        let dataNascimento = this.entrada.receberData('Digite a data de nascimento: ')
        let dataCadastro = this.entrada.receberData('Digite a data de cadastro: ')
        let id = armazem.setId + 1

        let cliente = new Cliente(id, nome, nomeSocial, dataNascimento, dataCadastro)

        this.processo = new RegMainEnd(cliente) // Registrar Endereço 
        this.processo.processar()

        this.processo = new RegDocs(cliente) // Registrar Documentos 
        this.processo.processar()

        this.processo = new regMainTel(cliente) // Registrar Telefones
        this.processo.processar()

        armazem.getClientes.push(cliente)
        armazem.setId = id
        console.log('Finalizando o cadastro do cliente...')
    }
}