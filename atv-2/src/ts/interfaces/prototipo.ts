import Cliente from "../modelos/cliente";

export default interface Prototipo {
    clonar(main: Cliente): void
}