import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorMultiDocumentos from "./impressorMultiDocumentos";
import ImpressorMultiTelefones from "./impressorMultiTelefones";
import ImpressorEndereco from "./impressorEndereco";

export default class ImpressorCliente implements Impressor {
    private cli: Cliente
    private impressor!: Impressor

    constructor(cliente: Cliente) {
        this.cli = cliente
    }

    imprimir(): string {
        let print = `****************************\n`
            + `| Nome: ${this.cli.getNome}\n`
            + `| Nome social: ${this.cli.getNomeSocial}\n`
            + `| Data de nascimento: ${this.cli.getDataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cli.getDataCadastro.toLocaleDateString()}`

        this.impressor = new ImpressorEndereco(this.cli.getEndereco)
        print = print + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorMultiDocumentos(this.cli.getDocumentos)
        print = print + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorMultiTelefones(this.cli.getTelefones)
        print = print + `\n${this.impressor.imprimir()}`

        print = print + `\n****************************`
        return print
    }

}