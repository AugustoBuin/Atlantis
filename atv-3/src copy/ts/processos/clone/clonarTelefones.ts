import Prototipo from "../../interfaces/prototipo";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

// Clonar os telefones de um cliente
export default class ClonarTelefone implements Prototipo {

    public clonar(main: Cliente): Telefone[] {
        let listTels: Telefone[] = []
        main.getTelefones.forEach(telefone => {
            listTels.push(telefone)
        });

        return listTels
    }
}