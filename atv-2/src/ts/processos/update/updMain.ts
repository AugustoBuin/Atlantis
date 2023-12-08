import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import Cliente from "../../modelos/cliente"
import ClonarTelefone from "../clone/clonarTelefones"
import RegDocs from "../create/regDocCli"
import RegMainEnd from "../create/regMainEnd"
import regMainTel from "../create/regMainTel"

// Atualizar um Titular
export default class updMain extends Processo {
    private Main!: Cliente

    constructor() {
        super()
        this.execucao = true
    }

    public processar(): void {
        let armazem = Armazem.getInstanciaUnica
        let clonarTel = new ClonarTelefone

        console.log('Inicializando a atualização do cliente titular...')
        let id = this.entrada.receberNumero('Digite o id do cliente titular: ')

        while (this.execucao) {
            armazem.getClientes.forEach(cliente => { // Para cada cliente
                if (cliente.getId == id && cliente.getMain == null) { // Se os 
                    this.Main = cliente
                }
            })
            if (this.Main == null) {
                console.log('Nenhum titular encontrado!')
                this.execucao = false
            } else {
                this.Main.setNome = this.entrada.receberTexto('Digite o novo nome: ')
                this.Main.setNomeSocial = this.entrada.receberTexto('Digite o novo nome social: ')

                this.processo = new RegDocs(this.Main)
                this.processo.processar()

                this.processo = new RegMainEnd(this.Main)
                this.processo.processar()

                this.processo = new regMainTel(this.Main)
                this.processo.processar()

                this.Main.getDependentes.forEach(dependente => {
                    dependente.setEndereco = this.Main.getEndereco.clonar()
                    dependente.setTelefones = clonarTel.clonar(this.Main)
                })

                console.log('Finalizando a atualização do titular...')
                this.execucao = false
            }
        }


    }
}