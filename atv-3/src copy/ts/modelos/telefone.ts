// Dados do Telefone
export default class Telefone {

    private ddd: string
    private numero: string

    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }

    public get getDDD() { return this.ddd }
    public get getNumero() { return this.numero }

    public set setDDD(ddd: string) { this.ddd = ddd }
    public set setNumero(numero: string) { this.numero = numero }
}