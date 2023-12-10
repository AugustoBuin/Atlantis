import Diretor from "../abstracoes/diretor"
import BuilderAcomodacao from "../construtores/builderAcomodacao"
import { NomeAcomadacao } from "../enumeracoes/tipoAcomodacao"
import Acomodacao from "../modelos/acomodacao"

export default class DiretorFamiliaSimples extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new BuilderAcomodacao()
    }

    public construir(): Acomodacao {
        let objConst = this.construtor as BuilderAcomodacao
        objConst.setNomeAcomodacao = NomeAcomadacao.FamiliaSimples
        objConst.setCamaCasal = 1
        objConst.setCamaSolteiro = 2
        objConst.setClimatizacao = true
        objConst.setGaragem = 1
        objConst.setSuite = 1
        return objConst.construir()
    }
}