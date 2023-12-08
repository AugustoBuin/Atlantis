import Impressor from "../interfaces/impressor";
import Documento from "../modelos/documento";

export default class ImpressorDocumento implements Impressor {
    private doc: Documento

    constructor(documento: Documento) {
        this.doc = documento
    }

    imprimir(): string {
        let impressao = `| Documento:\n`
            + `| Tipo: ${this.doc.getTipo}\n`
            + `| Data expedição: ${this.doc.getDataExpedicao.toLocaleDateString()}\n`
            + `| Número: ${this.doc.getNumero}`
        return impressao
    }

}