import { NomeAcomadacao } from "../enumeracoes/tipoAcomodacao"

// Dados de AComodação
export default class Acomodacao {
    private nomeAcomadacao: NomeAcomadacao
    private camaSolteiro: Number
    private camaCasal: Number
    private suite: Number
    private climatizacao: Boolean
    private garagem: Number

    constructor(nomeAcomadacao?: NomeAcomadacao, camaSolteiro?: Number, camaCasal?: Number, suite?: Number, climatizacao?: Boolean, garagem?: Number) {
        this.nomeAcomadacao = nomeAcomadacao!
        this.camaSolteiro = camaSolteiro!
        this.camaCasal = camaCasal!
        this.suite = suite!
        this.climatizacao = climatizacao!
        this.garagem = garagem!
    }

    // Gets
    public get getNomeAcomadacao() { return this.nomeAcomadacao }
    public get getCamaSolteiro() { return this.camaSolteiro }
    public get getCamaCasal() { return this.camaCasal }
    public get getSuite() { return this.suite }
    public get getClimatizacao() { return this.climatizacao }
    public get getGaragem() { return this.garagem }

    // Sets 
    public set setNomeAcomadacao(nomeAcomadacao: NomeAcomadacao) { this.nomeAcomadacao = nomeAcomadacao }
    public set setCamaSolteiro(camaSolteiro: Number) { this.camaSolteiro = camaSolteiro }
    public set setCamaCasal(camaCasal: Number) { this.camaCasal = camaCasal }
    public set setSuite(suite: Number) { this.suite = suite }
    public set setClimatizacao(climatizacao: Boolean) { this.climatizacao = climatizacao }
    public set setGaragem(garagem: Number) { this.garagem = garagem }



}