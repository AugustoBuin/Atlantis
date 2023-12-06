import { TipoDocumento } from "../enumeracoes/tipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

let cliente = new Cliente()
cliente.nome = `Cleiton Titular`
cliente.nomeSocial = `Cleitão`
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)

let endereco = new Endereco()
endereco.rua = `R. do Cleitão`
endereco.bairro = `Cãopabacana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`
cliente.endereco = endereco

let telefone1 = new Telefone()
telefone1.ddd = '21'
telefone1.numero = '97777-7777'

let telefone2 = new Telefone()
telefone2.ddd = '21'
telefone2.numero = '98888-8888'

let telefones = [telefone1, telefone2]
telefones.forEach((telefone) => {
    cliente.telefones.push(telefone)
})

let cpfTItular = new Documento()
cpfTItular.tipo = TipoDocumento.CPF
cpfTItular.numero = '123.456.789-00'
cpfTItular.dataExpedicao = new Date(1825, 11, 2)

let rgTitular = new Documento()
rgTitular.tipo = TipoDocumento.RG
rgTitular.numero = '123456789'
rgTitular.dataExpedicao = new Date(1825, 11, 2)

let docTitular = [cpfTItular, rgTitular]
docTitular.forEach((doc) => {
    cliente.documentos.push(doc)
})

let dependente = new Cliente()
dependente.nome = `Cleiton Reserva`
dependente.nomeSocial = `Cleitinho`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)
dependente.endereco = (cliente.endereco.clonar() as Endereco)
cliente.telefones.forEach((fone) => {
    dependente.telefones.push(fone.clonar() as Telefone)
})
dependente.titular = cliente

let cpfDependente = new Documento()
cpfDependente.tipo = TipoDocumento.CPF
cpfDependente.numero = '123.456.789-11'
cpfDependente.dataExpedicao = new Date(1825, 11, 2)

let rgDependente = new Documento()
rgDependente.tipo = TipoDocumento.RG
rgDependente.numero = '123456789'
rgDependente.dataExpedicao = new Date(1825, 11, 2)

let docDependentes = [cpfDependente, rgDependente]
docDependentes.forEach((doc) => {
    dependente.documentos.push(doc)
})

cliente.dependentes.push(dependente)

// console.log("Log do Cliente: ", cliente);
console.log("Log do Dependente: ", dependente);
