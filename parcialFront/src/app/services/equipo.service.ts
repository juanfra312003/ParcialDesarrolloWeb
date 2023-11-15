import {Injectable} from "@angular/core";
import {from, map} from "rxjs";
import axios, {Axios, AxiosResponse} from "axios";
import {EquipoModel} from "../model/equipo.model";

@Injectable({
  providedIn: 'root'
})

export class EquipoService{
  private apiUrl : string = "http://localhost:8080/parcial/api/equipo/";

  public getEquipo(id : number) {
    return from(axios.get(this.apiUrl + id))
      .pipe(map((response:AxiosResponse<EquipoModel>) => response.data))
  }

  public getEquipos(){
    return from(axios.get(this.apiUrl))
      .pipe(map((response:AxiosResponse<EquipoModel[]>) => response.data))
  }

  public createEquipo(equipo : EquipoModel){
    return from(axios.post(this.apiUrl, equipo))
      .pipe(map((response:AxiosResponse<EquipoModel>) => response.data))
  }
}
