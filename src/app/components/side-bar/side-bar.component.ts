import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { SideBarService } from './side-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  cliente: any = {};
  letra = '';

  constructor(private _cliente: ClienteService,
    private _router: Router,
    private _sideBar: SideBarService) { }
  ngOnInit(): void {
    this.listarExtrato();
    this._sideBar.SideBar.subscribe(x => {
      this.listarExtrato();
    })

  }
  listarExtrato() {
    this._cliente.listarCompleto().subscribe(x => {
      this.cliente = x;
      this._sideBar.NomeCPF.next({
        Nome: x?.dadosUsuario?.nome,
        CPF: x?.dadosUsuario?.cpf
      })
      this.letra = 'roudend-link fa-solid fa-' + x?.dadosUsuario?.nome?.substring(0, 1)?.toLowerCase()
      console.log(this.letra)
    })
  }
  sair() {
    this._router.navigate(['/login']);
    localStorage.clear();

  }
  mostrar: boolean = false;
}
