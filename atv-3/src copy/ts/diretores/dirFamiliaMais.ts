import Diretor from "../abstracoes/diretor"
import BuilderAcomodacao from "../construtores/builderAcomodacao"
import { NomeAcomadacao } from "../enumeracoes/tipoAcomodacao"
import Acomodacao from "../modelos/acomodacao"

export default class DiretorFamiliaMais extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new BuilderAcomodacao()
    }

    public construir(): Acomodacao {
        let objConst = this.construtor as BuilderAcomodacao
        objConst.setNomeAcomodacao = NomeAcomadacao.FamiliaMais
        objConst.setCamaCasal = 1
        objConst.setCamaSolteiro = 5
        objConst.setClimatizacao = true
        objConst.setGaragem = 2
        objConst.setSuite = 2
        return objConst.construir()
    }
}