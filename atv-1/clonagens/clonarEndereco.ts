import Prototipo from "../interfaces/prototipo";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";

export default class ClonarEndereco implements Prototipo {
    public clonar(titular: Cliente): Endereco {
        let endDep = new Endereco
        endDep.rua = titular.endereco.rua
        endDep.bairro = titular.endereco.bairro
        endDep.cidade = titular.endereco.cidade
        endDep.estado = titular.endereco.estado
        endDep.pais = titular.endereco.pais
        endDep.codigoPostal = titular.endereco.codigoPostal
        return endDep
    }
}