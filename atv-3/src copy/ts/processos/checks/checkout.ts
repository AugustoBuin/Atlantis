import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import { TipoHospedagem } from "../../enumeracoes/tipoHospedagem"
import MenuCadastroAcomodacao from "../../menus/menuCadastroAcomodacao"
import Acomodacao from "../../modelos/acomodacao"
import Cliente from "../../modelos/cliente"


export default class Checkout extends Processo {
    cli!: Cliente

    constructor() {
        super()
        this.menu = new MenuCadastroAcomodacao()
    }

    processar(): void {
        let armazem = Armazem.getInstanciaUnica
        console.log('Iniciando o Check-out de um cliente...')
        let id = this.entrada.receberNumero('Digite o id do cliente hospedado: ')

        while (this.execucao) {
            armazem.getClientes.forEach(cliente => {
                if (cliente.getId == id && cliente.getAcomodacao != null) {
                    this.cli = cliente
                    this.cli.setAcomodacao = new Acomodacao()
                    this.cli.setInicioHospedagem = new Date()
                    this.cli.setFimHospedagem = new Date()
                    this.cli.setTipoHospedagem = TipoHospedagem.Outros
                }
            })

            if (this.cli == null) {
                console.log('Nenhum cliente hospedado encontrado!')
                id = this.entrada.receberNumero('Digite o id do cliente hospedado: ')
            }

            else { this.execucao = false }
        }
        console.log('Finalizando o check-out do cliente...')
    }
}