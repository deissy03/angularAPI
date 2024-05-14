import { Injectable,inject } from '@angular/core';
//importar un injectable que vienen de angular/core
import { HttpClient } from "@angular/common/http";
//importo el HttpClient que viene de angular/http
@Injectable({
  providedIn: 'root'
})
export class DataService {
// normalmente este clase se construye por defecto al crear el componente pero viene vacia 
//creo un constructor y creo un atributo de esta clase para guardar el url de la apis 
  constructor() { }
  API_URL: string = "https://fakestoreapi.com/products"
  // voy a crear una variable con cualquier nombre en este caso HttpClient esta variable me lee el https del apis
  httpClient = inject(HttpClient); 
  //creo un metodo al que llame obtener datos y es para que vaya y consulte los datos de esta apis
  obtenerDatos(){
    //espero el retorno de la respuesta de la apis 
    return this.httpClient.get(this.API_URL);
  }
}
// primero cree el servicio que recibe y lee el apis
//ahora voy a la logica de mi componente que es app.component.ts
