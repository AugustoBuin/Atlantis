import Cliente from "../modelos/cliente";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private id: number = 0 // Contador para saber os ids dos clientes

    private constructor() { }


    public static get getInstanciaUnica() { return this.instanciaUnica }
    public get getClientes() { return this.clientes }
    public get getId() { return this.id }

    public set setId(id: number) { this.id = id }

}