import Impressor from "../interfaces/impressor"
import Documento from "../modelos/documento"
import ImpressorDocumento from "./impressorDocumento"

export default class ImpressorMultiDocumentos implements Impressor {
    private docs: Documento[]
    private impressor!: Impressor

    constructor(documentos: Documento[]) {
        this.docs = documentos
    }

    imprimir(): string {
        let print = ``
        for (let index = 0; index < this.docs.length; index++) {
            this.impressor = new ImpressorDocumento(this.docs[index])
            if (index == 0) {
                print = print + `${this.impressor.imprimir()}`
            } else {
                print = print + `\n${this.impressor.imprimir()}`
            }

        }
        return print
    }
}