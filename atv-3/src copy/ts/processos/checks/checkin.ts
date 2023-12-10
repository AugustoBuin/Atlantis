import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import { TipoHospedagem } from "../../enumeracoes/tipoHospedagem"
import MenuCadastroAcomodacao from "../../menus/menuCadastroAcomodacao"
import Cliente from "../../modelos/cliente"

// Checkin
export default class Checkin extends Processo {
    main!: Cliente
    hosp!: TipoHospedagem

    constructor() {
        super()
        this.menu = new MenuCadastroAcomodacao()
    }

    processar(): void {
        let armazem = Armazem.getInstanciaUnica
        console.log('Iniciando o Check-in de um cliente...')
        let id = this.entrada.receberNumero('Digite o id do cliente titular: ')
        let listAcom = armazem.getAcomodacoes

        while (this.execucao) {
            armazem.getClientes.forEach(cliente => {
                if (cliente.getId == id && cliente.getMain == null) {
                    this.main = cliente
                }
            })

            if (this.main == null) {
                console.log('Nenhum cliente titular encontrado!')
                id = this.entrada.receberNumero('Id do cliente titular: ')
            }

            else { this.execucao = false }
        }

        if (this.main != null) {
            console.log('Digite o tipo de hospedagem do estabelecimento: ')
            console.log('1 - Pousada')
            console.log('2 - Hotel')
            console.log('3 - Resort')
            let opcaoHosp = this.entrada.receberNumero('Digite a opção escolhida: ')

            if (opcaoHosp == 1) { this.hosp = TipoHospedagem.Pousada }
            else if (opcaoHosp = 2) { this.hosp = TipoHospedagem.Hotel }
            else { this.hosp = TipoHospedagem.Resort }

            this.main.setTipoHospedagem = this.hosp

            this.main.setInicioHospedagem = this.entrada.receberData('Data do início da acomodação: ')
            this.main.setFimHospedagem = this.entrada.receberData('Data do final da acomodação: ')

            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Digite opção desejada: ')
            this.main.setAcomodacao = listAcom[this.opcao - 1]

        }

        console.log('Finalizando o check-in do cliente...')
    }
}