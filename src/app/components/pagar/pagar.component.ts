import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SPWAlert } from 'src/app/shared/class/Alert';
@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.scss']
})
export class PagarComponent {
  constructor(private _route: Router) { }
  confirmardados(f: NgForm) {
    if(f.valid){
    this._route.navigate(['/user/confirmardados'], { queryParams: { codigo: f.value.codigo } })}
    else{
      SPWAlert.AlertaAviso("Preencha o campo de codigo de barras!")
    }

  }
}
