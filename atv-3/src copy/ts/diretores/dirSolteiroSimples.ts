import Diretor from "../abstracoes/diretor"
import BuilderAcomodacao from "../construtores/builderAcomodacao"
import { NomeAcomadacao } from "../enumeracoes/tipoAcomodacao"
import Acomodacao from "../modelos/acomodacao"

// Dados da acomodação do tipo Solteiro Simples
export default class DiretorSolteiroSimples extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new BuilderAcomodacao()
    }

    public construir(): Acomodacao {
        let objConst = this.construtor as BuilderAcomodacao
        objConst.setNomeAcomodacao = NomeAcomadacao.SolteiroSimples
        objConst.setCamaCasal = 0
        objConst.setCamaSolteiro = 1
        objConst.setClimatizacao = true
        objConst.setGaragem = 0
        objConst.setSuite = 1
        return objConst.construir()
    }
}