import Impressor from "../interfaces/impressor"
import Acomodacao from "../modelos/acomodacao"

// Imrpimir uma Acomodação
export default class ImpressorAcomodacao implements Impressor {
    private acom: Acomodacao

    constructor(acomodacao: Acomodacao) {
        this.acom = acomodacao
    }

    private converter(valor: Boolean) { // Converter: True = Sim e False = Não 
        if (valor) { return `Sim` }     // Só pra não ficar "Climatização: True"
        else { return `Não` }
    }

    imprimir(): string {
        let desc = `Tipo de Acomodação: ${this.acom.getNomeAcomadacao.toString()}\n`
            + `-- Quantidade de camas para solteiros: ${this.acom.getCamaSolteiro}\n`
            + `-- Quantidade de camas para casais: ${this.acom.getCamaCasal}\n`
            + `-- Climatização: ${this.converter(this.acom.getClimatizacao)}\n`
            + `-- Quantidade de garagens disponíveis: ${this.acom.getGaragem}\n`
            + `-- Quantidade de suites: ${this.acom.getSuite}\n`
        return desc
    }


}