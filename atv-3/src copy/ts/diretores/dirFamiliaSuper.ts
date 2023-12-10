import Diretor from "../abstracoes/diretor"
import BuilderAcomodacao from "../construtores/builderAcomodacao"
import { NomeAcomadacao } from "../enumeracoes/tipoAcomodacao"
import Acomodacao from "../modelos/acomodacao"

export default class DiretorFamiliaSuper extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new BuilderAcomodacao()
    }

    public construir(): Acomodacao {
        let objConst = this.construtor as BuilderAcomodacao
        objConst.setNomeAcomodacao = NomeAcomadacao.FamiliaSuper
        objConst.setCamaCasal = 2
        objConst.setCamaSolteiro = 6
        objConst.setClimatizacao = true
        objConst.setGaragem = 2
        objConst.setSuite = 3
        return objConst.construir()
    }
}