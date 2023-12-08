import Prototipo from "../interfaces/prototipo"
import Cliente from "./cliente"

export default class Endereco implements Prototipo {
    private rua: string
    private bairro: string
    private cidade: string
    private estado: string
    private pais: string
    private codigoPostal: string
    Pais: any

    constructor(rua: string, bairro: string, cidade: string, estado: string, pais: string, codigoPostal: string) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.pais = pais
        this.codigoPostal = codigoPostal
    }

    public get getRua() { return this.rua }
    public get getBairro() { return this.bairro }
    public get getCidade() { return this.cidade }
    public get getEstado() { return this.estado }
    public get getPais() { return this.pais }
    public get getCodigoPostal() { return this.codigoPostal }

    public clonar(): Endereco {
        let endereco = new Endereco(this.rua, this.bairro, this.cidade, this.estado, this.pais, this.codigoPostal)
        return endereco
    }

    public set setRua(rua: string) { this.rua = rua }
    public set setBairro(bairro: string) { this.bairro = bairro }
    public set setCidade(cidade: string) { this.cidade = cidade }
    public set setEstado(estado: string) { this.estado = estado }
    public set setPais(pais: string) { this.pais = pais }
    public set setCodigoPostal(codigoPostal: string) { this.codigoPostal = codigoPostal }

}