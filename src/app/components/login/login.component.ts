import { Component } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData = {
    cpf: '',
    senha: ''
  };
  constructor(
    private auth: AutenticacaoService,
    private route: Router) { }
  ngOnInit(): void {

  }
  logar(f: NgForm) {
    var value = f.value;
    if (f.valid) {
      this.auth.login(value.cpf, value.senha).subscribe(x => {
        localStorage.setItem("token", x.token);
        this.route.navigate(["/user"])
      })
    } else {
      alert('Usuário ou senha incorretos!');
    }
  }
  validarCampo(f: NgForm, name: string): boolean {
    return f.controls[name].invalid && (f.controls[name].dirty || f.controls[name].touched);
  }
  validarMensagem(f: NgForm, name: string, type: string) {
    console.log(f.controls[name])
  }

}
