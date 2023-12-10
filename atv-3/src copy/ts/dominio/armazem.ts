import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

// Classe para armezenar todos os dados
export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = [] // Lista de Clientes
    private id: number = 0 // Contador para saber os ids dos Clientes
    private acomodacoes: Acomodacao[] = [] // Lista de Acomodações
    private idAcomodacao: number = 0 // Contador para saber os ids das Acomodações


    private constructor() { }

    // Gets
    public static get getInstanciaUnica() { return this.instanciaUnica }
    public get getClientes() { return this.clientes }
    public get getId() { return this.id }
    public get getAcomodacoes() { return this.acomodacoes }
    public get getIdAcomodacao() { return this.idAcomodacao }

    // Sets
    public set setId(id: number) { this.id = id }
    public set setIdAcomodacao(idAcomodacao: number) { this.idAcomodacao = idAcomodacao }

}