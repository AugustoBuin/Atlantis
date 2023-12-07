import Prototipo from "../interfaces/prototipo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";


export default class ClonarTelefone implements Prototipo {
    public clonar(titular: Cliente): Telefone[] {

        let listTel: Telefone[] = []

        titular.telefones.forEach(tel => {
            listTel.push(tel)
        });

        return listTel
    }
}