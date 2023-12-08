import Impressor from "../interfaces/impressor"
import Telefone from "../modelos/telefone"
import ImpressorTelefone from "./impressorTelefone"

export default class ImpressorMultiTelefones implements Impressor {
    private tel: Telefone[]
    private impressor!: Impressor

    constructor(tel: Telefone[]) {
        this.tel = tel
    }

    imprimir(): string {
        let print = ``
        for (let index = 0; index < this.tel.length; index++) {
            this.impressor = new ImpressorTelefone(this.tel[index])
            if (index == 0) {
                print = print + `${this.impressor.imprimir()}`
            } else {
                print = print + `\n${this.impressor.imprimir()}`
            }

        }
        return print
    }
}