import Processo from "../../abstracoes/processo"
import DiretorCasalSimples from "../../diretores/dirCasalSimples"
import DiretorFamiliaMais from "../../diretores/dirFamiliaMais"
import DiretorFamiliaSimples from "../../diretores/dirFamiliaSimples"
import DiretorFamiliaSuper from "../../diretores/dirFamiliaSuper"
import DiretorSolteiroMais from "../../diretores/dirSolteiroMais"
import DiretorSolteiroSimples from "../../diretores/dirSolteiroSimples"
import Armazem from "../../dominio/armazem"
import Acomodacao from "../../modelos/acomodacao"

// Cadastrar novas acomodações
export default class RegAcom extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.getInstanciaUnica.getAcomodacoes
    }
    processar(): void {
        let solSimp = new DiretorSolteiroSimples()
        let solMais = new DiretorSolteiroMais()
        let cslSimp = new DiretorCasalSimples()
        let fmlSimp = new DiretorFamiliaSimples()
        let fmlMais = new DiretorFamiliaMais()
        let fmlSup = new DiretorFamiliaSuper()


        this.acomodacoes.push(solSimp.construir(), solMais.construir(), cslSimp.construir(), fmlSimp.construir(), fmlMais.construir(), fmlSup.construir())
    }
}