export class JugadorModel {
    id: number
    nombre: String
    apellidos: String
    numero : number

    constructor(id: number, nombre: String, apellidos: String, numero : number) {
        this.id = id
        this.nombre = nombre
        this.apellidos = apellidos
        this.numero = numero
    }
}
