import Processo from "../../abstracoes/processo"
import Cliente from "../../modelos/cliente"
import Telefone from "../../modelos/telefone"

// Registrar Telefone do Titular
export default class regMainTel extends Processo {
    private cli: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cli = cliente
        this.execucao = true
    }

    processar(): void {
        console.clear()
        console.log('Iniciando o cadastro de telefones...')
        console.log(`****************************`)

        while (this.execucao) {
            console.log(`----------------------`)
            console.log(`| 1 - Cadastrar um novo número de telefone`)
            console.log(`| 0 - Finalizar o cadastro de telefones`)
            console.log(`----------------------`)

            this.opcao = this.entrada.receberNumero('| Digite a opção desejada: ')
            switch (this.opcao) {

                case 1:
                    console.log('Coletando os dados do telefone...')
                    let ddd = this.entrada.receberTexto('Digite o ddd: ')
                    let numero = this.entrada.receberTexto('Digite o número: ')
                    let telefone = new Telefone(ddd, numero)
                    this.cli.getTelefones.push(telefone)
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