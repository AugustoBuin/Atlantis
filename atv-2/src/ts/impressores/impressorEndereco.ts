import Impressor from "../interfaces/impressor";
import Endereco from "../modelos/endereco";

export default class ImpressorEndereco implements Impressor {
    private end: Endereco
    constructor(endereco: Endereco) {
        this.end = endereco
    }
    imprimir(): string {
        let print = `| Endereco:\n`
            + `| rua: ${this.end.getRua}\n`
            + `| bairro: ${this.end.getBairro}\n`
            + `| cidade: ${this.end.getCidade}\n`
            + `| estado: ${this.end.getEstado}\n`
            + `| país: ${this.end.getPais}\n`
            + `| código postal: ${this.end.getCodigoPostal}`
        return print
    }
}