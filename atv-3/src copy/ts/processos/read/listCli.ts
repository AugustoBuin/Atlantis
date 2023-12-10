import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

// Lista um único cliente
export default class ListCli extends Processo {
    private listCli: Cliente[];
    private cli!: Cliente;
    private impressor!: Impressor;

    constructor() {
        super();
        this.listCli = Armazem.getInstanciaUnica.getClientes;
        this.execucao = true;
    }

    processar(): void {
        console.clear();
        let id = this.entrada.receberNumero('Digite o id do cliente: ');

        while (this.execucao) {
            this.listCli.forEach(cliente => { // Passa por todos os ids até encontrar o certo
                if (cliente.getId == id) {
                    this.cli = cliente;
                }
            });

            if (this.cli == null) {
                console.log('Nenhum cliente encontrado!');
                this.execucao = false;
            }

            else {
                console.log('Iniciando a listagem desse cliente...');
                this.impressor = new ImpressorCliente(this.cli);
                console.log(this.impressor.imprimir()); // Lista os dados do cliente
                this.execucao = false;
            }
        }
    }
}
