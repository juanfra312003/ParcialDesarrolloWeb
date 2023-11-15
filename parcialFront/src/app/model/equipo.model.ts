export class EquipoModel{
  nombre : String
  ciudad : String
  copasInternacionales : number

  constructor(nombre : String, copasInternacionales : number, ciudad : String) {
    this.nombre = nombre
    this.copasInternacionales = copasInternacionales
    this.ciudad = ciudad
  }
}
