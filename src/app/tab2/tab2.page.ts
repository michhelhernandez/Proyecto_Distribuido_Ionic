import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Proveedor1Service } from '../proveedor-1.service';

//import { NavController } from 'ionic-angular';    no sirve en ionic framework 4


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  usuarios

  constructor(private router: Router,private proveedor: Proveedor1Service) {}

  ObtenerDatos(){
    this.proveedor.ObtenerUsuarios()
    .subscribe(
      (data)=> {console.log(data);this.usuarios = data;},
      (error)=> {console.log(error);} 
    );
    
  }

  PushTab3(){
    this.router.navigate(['app-tab3']);
  }

}
