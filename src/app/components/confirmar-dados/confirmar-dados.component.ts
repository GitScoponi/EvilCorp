import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmar-dados',
  templateUrl: './confirmar-dados.component.html',
  styleUrls: ['./confirmar-dados.component.scss']
})
export class ConfirmarDadosComponent {

  dados :any ={
    valor:'R$250,00',
    vencimento: new Date().toDateString(),
    nome:"Supermercado Atacadinho",
    cnpj:'12.345.676.0001-22',
    instituicao: 'Bank S.A',
    codigo:'1234.1234.1234.1234 1 1234'

  }
}
