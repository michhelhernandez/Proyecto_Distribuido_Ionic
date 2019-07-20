import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
//en ionic 4 el proveedor se genera con: "ionic generate service services/NombreProveedor"

@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {

  constructor(private http: HttpClient) { 
    console.log('Hola proveedor-1');
  }

  ObtenerUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
