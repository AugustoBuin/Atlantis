import Impressor from "../interfaces/impressor";
import Telefone from "../modelos/telefone";

export default class ImpressorTelefone implements Impressor {
    private tel: Telefone

    constructor(telefone: Telefone) {
        this.tel = telefone
    }

    imprimir(): string {
        let print = `| Telefone:\n`
            + `| DDD: ${this.tel.getDDD}\n`
            + `| Número: ${this.tel.getNumero}`
        return print
    }

}