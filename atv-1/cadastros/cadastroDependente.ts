import Entrada from "../teste/entrada";
import { TipoDocumento } from "../enumeracoes/tipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import ClonarTelefone from "../clonagens/clonarTelefone";
import ClonarEndereco from "../clonagens/clonarEndereco";

export default class CadastroDependentes { //Classe para cadastro de Dependentes
    cadastrar(titular: Cliente): Cliente[] {

        // setando variáveis
        let entrada = new Entrada // receberTexto ou receberNumero
        let clonarTel = new ClonarTelefone
        let clonarEnd = new ClonarEndereco
        let docs = new Documento //
        let listDocs: Documento[] = []
        let depnd: Cliente[] = []
        let cadDocs = true // para o loop de cadastro de Documentos

        let cadDep = entrada.receberNumero("\ncadastrar dependentes?\n1 - Sim\n0 - Não\n")
        if (cadDep == 1) {

            while (true) { //Loop para cadastrar vários Dependentes
                let novoDep: Cliente = new Cliente
                console.log("\nCadastrando um Dependente: ")
                novoDep.nome = entrada.receberTexto("Insira o nome do dependente: ")
                novoDep.nomeSocial = entrada.receberTexto("Insira o  nome social do dependente (aperte enter se não houver): ")
                novoDep.dataCadastro = entrada.receberData("Insira a data de cadastro do dependente: ")
                novoDep.dataNascimento = entrada.receberData("Insira a data de nascimento do dependente: ")

                while (cadDocs) { //Loop para cadastrar vários Documentos
                    console.log("\nEscolha o tipo do documento que será cadastrado: \n1 - CPF\n2 - RG\n3 - Passaporte")
                    let opcao = entrada.receberNumero("Digite sua opção: ")
                    switch (opcao) {

                        case 1: // CPF
                            console.log("\nCadastrando um CPF: ")
                            docs.tipo = TipoDocumento.CPF;
                            docs.numero = entrada.receberTexto("Número do Documento: ")
                            docs.dataExpedicao = entrada.receberData("Data de Emissão do Documento: ")

                            listDocs.push(docs) // cadastrando um Documento
                            break;

                        case 2: // RG
                            console.log("\nCadastrando um RG: ")
                            docs.tipo = TipoDocumento.RG;
                            docs.numero = entrada.receberTexto("Número do Documento: ")
                            docs.dataExpedicao = entrada.receberData("Data de Emissão do Documento: ")

                            listDocs.push(docs) // cadastrando um Documento
                            break;

                        case 3: // Passaporte
                            console.log("\nCadastrando um Passaporte: ")
                            docs.tipo = TipoDocumento.Passaporte
                            docs.numero = entrada.receberTexto("Número do Documento: ")
                            docs.dataExpedicao = entrada.receberData("Data de Emissão do Documento: ")

                            listDocs.push(docs) // cadastrando um Documento
                            break;

                        default:
                            console.log("Opção inválida, digite novamente\n")
                    }
                    let maisDocs = entrada.receberNumero("\nDeseja cadastrar mais documentos?\n1 - Sim\n0 - Não\n")
                    if (maisDocs == 0) { break }
                }

                novoDep.documentos = listDocs
                novoDep.endereco = clonarEnd.clonar(titular)
                novoDep.telefones = clonarTel.clonar(titular)
                novoDep.titular = titular

                depnd.push(novoDep) // cadastrando um Dependente

                let keep = entrada.receberNumero("\nCadastrar mais dependentes?\n1 - Sim\n0 - Não\n")
                if (keep == 0) { break }
            }
        }
        return depnd // Dependente Cadastrado
    }
}