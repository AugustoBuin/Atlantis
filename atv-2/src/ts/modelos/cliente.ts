import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {

    private id: number
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private main!: Cliente

    constructor(id: number, nome: string, nomeSocial: string, dataNascimento: Date, dataCadastro: Date) {
        this.id = id
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = dataCadastro
    }

    public get getNome() { return this.nome }
    public get getId() { return this.id }
    public get getNomeSocial() { return this.nomeSocial }
    public get getDataNascimento() { return this.dataNascimento }
    public get getDataCadastro() { return this.dataCadastro }
    public get getTelefones() { return this.telefones }
    public get getEndereco() { return this.endereco }
    public get getDocumentos() { return this.documentos }
    public get getDependentes() { return this.dependentes }
    public get getMain() { return this.main }

    public set setNome(nome: string) { this.nome = nome }
    public set setNomeSocial(nomeSocial: string) { this.nomeSocial = nomeSocial }
    public set setDataNascimento(dataNascimento: Date) { this.dataNascimento = dataNascimento }
    public set setEndereco(endereco: Endereco) { this.endereco = endereco }
    public set setMain(titular: Cliente) { this.main = titular }
    public set setDependentes(dependente: Cliente) { this.dependentes.push(dependente) }
    public set setDocumentos(documento: Documento) { this.documentos.push(documento) }
    public set setTelefones(telefone: Telefone[]) { this.telefones = telefone }
}