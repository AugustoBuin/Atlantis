import { NomeAcomadacao } from "../enumeracoes/tipoAcomodacao"
import Construtor from "../interfaces/construtor"
import Acomodacao from "../modelos/acomodacao"

// Builder da Acomodação
export default class BuilderAcomodacao implements Construtor<Acomodacao>{
    private nomeAcomodacao: NomeAcomadacao = NomeAcomadacao.SolteiroSimples
    private camaSolteiro: Number = 0
    private camaCasal: Number = 0
    private suite: Number = 0
    private climatizacao: Boolean = false
    private garagem: Number = 0

    public set setNomeAcomodacao(nomeAcomodacao: NomeAcomadacao) { this.nomeAcomodacao = nomeAcomodacao }
    public set setCamaSolteiro(camaSolteiro: Number) { this.camaSolteiro = camaSolteiro }
    public set setCamaCasal(camaCasal: Number) { this.camaCasal = camaCasal }
    public set setSuite(suite: Number) { this.suite = suite }
    public set setClimatizacao(climatizacao: Boolean) { this.climatizacao = climatizacao }
    public set setGaragem(garagem: Number) { this.garagem = garagem }

    construir(): Acomodacao {
        let acomodacao = new Acomodacao(this.nomeAcomodacao, this.camaSolteiro,
            this.camaCasal, this.suite, this.climatizacao, this.garagem)
        return acomodacao
    }
}