import { TipoDocumento } from "../enumeracoes/tipoDocumento"
import Cliente from "../modelos/cliente"
import Documento from "../modelos/documento"
import Endereco from "../modelos/endereco"
import Telefone from "../modelos/telefone"
import Entrada from "../teste/entrada"
import CadastroDependentes from "./cadastroDependente"



export default class CadastroCliente { //Classe para cadastro de Titulares
    cadastrar(): Cliente {

        // setando variáveis
        let entrada = new Entrada // receberTexto ou receberNumero
        let cli = new Cliente
        let end = new Endereco
        let tel = new Telefone
        let docs: Documento = new Documento
        let listDocs: Documento[] = []
        let listTels: Telefone[] = []
        let depnd = new CadastroDependentes

        console.log("\nCadastrando um Cliente: ")
        cli.nome = entrada.receberTexto("Insira o nome: ")
        cli.nomeSocial = entrada.receberTexto("Insira o nome social (aperte enter se não houver): ")
        cli.dataNascimento = entrada.receberData("Insira a data de nascimento: ")
        cli.dataCadastro = entrada.receberData("Insira a data de cadastro: ")

        while (true) { //Loop para cadastrar vários Documentos
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
        cli.documentos = listDocs

        console.log("\nCadastrando um Cliente: ")
        end.pais = entrada.receberTexto("Insira o país: ")
        end.rua = entrada.receberTexto("Insira a rua: ")
        end.bairro = entrada.receberTexto("Insira o bairro: ")
        end.cidade = entrada.receberTexto("Insira a cidade: ")
        end.estado = entrada.receberTexto("Insira o estado: ")
        end.codigoPostal = entrada.receberTexto("Insira o código postal: ")
        cli.endereco = end

        while (true) { // Loop para cadastrar vários Telefones

            console.log("\nCadastrando um Telefone: ")
            tel.ddd = entrada.receberTexto("Insira o DDD: ")
            tel.numero = entrada.receberTexto("Insira o número: ")

            listTels.push(tel) // Cadastrando um Telefone

            let opcao = entrada.receberNumero("\nDeseja cadastrar mais telefones?\n1 - Sim\n0 - Não\n")
            if (opcao == 0) { break }
        }
        cli.telefones = listTels

        cli.dependentes = depnd.cadastrar(cli)

        return cli
    }
}