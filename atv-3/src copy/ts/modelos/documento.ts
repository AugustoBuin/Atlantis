import { TipoDocumento } from "../enumeracoes/TipoDocumento"

// Dados dos Documentos
export default class Documento {
    private numero: string
    private tipo: TipoDocumento
    private dataExpedicao: Date

    constructor(numero: string, tipo: TipoDocumento, dataExpedicao: Date) {
        this.numero = numero
        this.tipo = tipo
        this.dataExpedicao = dataExpedicao
    }

    // gets 
    public get getNumero() { return this.numero }
    public get getTipo() { return this.tipo }
    public get getDataExpedicao() { return this.dataExpedicao }

    // sets 
    public set setNumero(numero: string) { this.numero = numero }
    public set setTipo(tipo: TipoDocumento) { this.tipo = tipo }
    public set setDataExpedicao(dataExpedicao: Date) { this.dataExpedicao = dataExpedicao }
}