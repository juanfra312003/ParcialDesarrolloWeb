import {Injectable} from "@angular/core";
import {JugadorModel} from "../model/jugador.model";
import axios, {AxiosResponse} from "axios";
import {from, map} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class JugadorService{
    private apiUrl : string = "http://localhost:8080/parcial/api/jugador/";

    public getJugador(id : number) {
        return from(axios.get(this.apiUrl + id))
            .pipe(map((response:AxiosResponse<JugadorModel>) => response.data))
    }

    public getJugadores(){
        return from(axios.get(this.apiUrl))
            .pipe(map((response:AxiosResponse<JugadorModel[]>) => response.data))
    }
}
