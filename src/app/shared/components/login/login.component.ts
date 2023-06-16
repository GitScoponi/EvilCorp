import { Header } from '../header/header';
import { HeaderService } from 'src/app/shared/components/header/header.service';
import { SPWAlert } from 'src/app/shared/class/Alert';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { Login, LoginService } from './login.service';
import { getLogo } from 'src/app/services/base/BASEURL';

@Component({
  selector: 'spw-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  dataSourceConselho = [];
  constructor(
    private _service: LoginService,
    private route: Router,
    private _header: HeaderService
  ) { }

  ngOnInit(): void {
    var logo = getLogo();
    this._header.mostrarMenu(false);
    this._header.enviarParametros([])
    this._header.enviarLogo(logo);
    this.listarConselhos();
  }
  listarConselhos() {
    this._service.listarConselho().subscribe((x: any) => {
      this.dataSourceConselho = x.Data;
    })
  }
  EnviarFormulario(f: NgForm) {

    if (f.valid) {
      console.log(f.value)
      this._service.obterToken(f.value.usuario, f.value.senha, f.value.conselho).subscribe(
        (token: any) => {
          var logo = (f.value.conselho as string).replace('-', '')
          this._header.enviarLogo(logo);
          this._service.saveToken(token.access_token);
          this._service.saveLogin(new Login({ Nome: f.value.usuario, Conselho: f.value.conselho }));
          this.route.navigate(['/home']);
          this._header.mostrarMenu(true);
        },
        (error) => { SPWAlert.AlertaErro("Usuário ou senha incorreto"); }
      );
    } else {

      SPWAlert.AlertaAviso('Todos os campos são obrigatórios');
    }
  }

}
