import { getCliente, getLogo } from 'src/app/services/base/BASEURL';
import { HttpClient, JsonpClientBackend } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Header } from "./header";
import { HeaderService } from "./header.service";
import config from 'src/assets/config.json'
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  rotas: Header[] = [];
  toggleClass = false;
  temMenu = true;
  mostraMenu: boolean = true;
  caminhoLogo: string;
  constructor(
    private _elem: ElementRef,
    private _router: Router,
    private _service: HeaderService,
    private http: HttpClient
  ) {
  }


  ngOnInit() {
    this._service.header.subscribe((x) => {
      this.rotas = x;
    });
    this._service.mostraMenu.subscribe((x) => {
      this.mostraMenu = x;
    });
    this._service.logo.subscribe((x: string) => {
      this.caminhoLogo = x;
    })
  }

  irPara(rota: string, params: any = null) {
    if (params != null) {
      this._router.navigate([rota], { queryParams: params });
    }
    else {
      this._router.navigate([rota]);
    }

    if (this.toggleClass) {
      this.toggleClass = !this.toggleClass;
      var check: any = document.querySelector('#hamburguer');
      check.checked = false;
    }
  }
  sair() {
    localStorage.removeItem('access_token');
    this._router.navigate(['/login']);
  }
}
