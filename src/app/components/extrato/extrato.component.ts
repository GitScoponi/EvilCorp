import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transacoes: any = [];
  constructor(
    private _cliente:ClienteService,
    private _router:Router
    ) {

  }
  ngOnInit(): void {
    this._cliente.listarTransacoes().subscribe(x=>{
      this.transacoes = x;
      console.log(x)
    })
  }

}
