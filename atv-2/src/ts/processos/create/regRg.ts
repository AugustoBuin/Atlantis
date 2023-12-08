import Processo from "../../abstracoes/processo"
import { TipoDocumento } from "../../enumeracoes/TipoDocumento"
import Cliente from "../../modelos/cliente"
import Documento from "../../modelos/documento"

// Registrar RG
export default class RegRg extends Processo {
    private cli: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cli = cliente
    }

    processar(): void {
        let numero = this.entrada.receberTexto('Digite o número do documento: ')
        let dataExpedicao = this.entrada.receberData('Digite a data de expedição do documento: ')
        let rg = new Documento(numero, TipoDocumento.RG, dataExpedicao)
        this.cli.getDocumentos.push(rg)
    }
}