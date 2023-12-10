import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import ImpressorAcomodacao from "../../impressores/impressorAcomodacao"
import Impressor from "../../interfaces/impressor"
import Acomodacao from "../../modelos/acomodacao"

export default class ListagemAcomodacoes extends Processo {
    private acom: Acomodacao[]
    private impressor!: Impressor

    constructor() {
        super()
        this.acom = Armazem.getInstanciaUnica.getAcomodacoes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem das acomodações disponíveis...')
        console.log(`------------------------------------`)

        this.acom.forEach(acomodacao => {
            this.impressor = new ImpressorAcomodacao(acomodacao)
            console.log(this.impressor.imprimir())
            console.log(`------------------------------------`)
        })
    }
}