import Processo from "../../abstracoes/processo"
import Cliente from "../../modelos/cliente"
import Endereco from "../../modelos/endereco"

// Registrar Endereço do Titular
export default class RegMainEnd extends Processo {
    private cli: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cli = cliente
    }

    processar(): void {
        console.log('Coletando os dados de endereço...')
        let rua = this.entrada.receberTexto('Digite a rua: ')
        let bairro = this.entrada.receberTexto('Digite o bairro: ')
        let cidade = this.entrada.receberTexto('Digite a cidade: ')
        let estado = this.entrada.receberTexto('Digite o estado: ')
        let pais = this.entrada.receberTexto('Digite o país: ')
        let codigoPostal = this.entrada.receberTexto('Digite o código postal: ')
        let endereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal)
        this.cli.setEndereco = endereco
    }

}