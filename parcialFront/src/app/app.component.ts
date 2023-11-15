import {Component, OnInit} from '@angular/core';
import {EquipoService} from "./services/equipo.service";
import {EquipoModel} from "./model/equipo.model";
import {JugadorService} from "./services/jugador.service";
import {JugadorModel} from "./model/jugador.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'parcialFront';
  equipos : EquipoModel[] = []
  jugadores : JugadorModel[] = []
  equipoCrear : EquipoModel
  constructor(private equipoService : EquipoService, private jugadorService : JugadorService) {
    this.equipoCrear = new EquipoModel("", 0, "")
  }

  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe((equipos : EquipoModel[]) => {
      this.equipos = equipos
    })

    this.jugadorService.getJugadores().subscribe((jugadores:JugadorModel[]) => {
        this.jugadores = jugadores
    })
  }

  onSubmit(){
    this.equipos.push(this.equipoCrear)
    this.equipoService.createEquipo(this.equipoCrear)
    this.equipoCrear = new EquipoModel("", 0, "")
  }
}
