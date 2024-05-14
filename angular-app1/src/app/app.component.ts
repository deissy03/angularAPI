import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// lo primero que simpre debo hacer es importar en este caso los servicios que cree 
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //cuando creo un componente esta clase viene por defecto vacia en este caso lo que hoce fue crear el componente y traer el inyectable
  dataService =inject(DataService);
  //creo una variable que se llama dataService que me trae la informacion del inyectable de DataService que es el servicio que hice de primera
  todosLosDatos: any[]=[];//creo un atributo donde voy almacenar todos los datos de mi apis por el momento quedan como un arreglo vacio
  obtenerTodosLosDatos(){
    //creo un metodo llamado obtenerTodosLosDatos para utilizar todos los servicios
    this.dataService.obtenerDatos().subscribe((respuesta:any)=>{
      //llamo al servicio y le digo que me traiga todos los datos en este caso el va a dataService.ts y llama el metodo obtenerDatos y luego le digo que se subscriba despues paso una funcion flecha para que se ejecute la respuesta 
      console.log(" esta es la informacion",respuesta);
      if(respuesta){
        this.todosLosDatos= respuesta;
        //console.log("bien");
      }else{
        console.log("ocurrió un error");
      }
    })
  }
  ngOnInit(){
    //ngOnInit lo que hace es inicializar las propiedades del contructor y llamar a la pais para verificar que no hay cambios asi obtener todos los datos del apis
    this.obtenerTodosLosDatos();
  }
}
