import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getHeaders, getSistema, getUrl, getXml } from 'src/app/services/base/BASEURL';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  obterToken(usuario: string, senha: string, conselho: string) {
    let headers =
      new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded' });
    return this.http.post(getUrl() + 'token', `grant_type=password&username=${usuario}&password=${senha}&sistema=${getSistema()}&conselho=${conselho}`, { headers })
  }

  listarConselho() {
    return this.http.post(getUrl() + `configuracao/listarxml`, { Conselho: getXml() }, getHeaders())

  }
  saveToken(token: string) {
    localStorage.setItem("access_token", token);
  }

  saveLogin(login: Login) {
    localStorage.setItem('usuario', JSON.stringify(login));
  }

  checklogin() {
    return localStorage.getItem('usuario') != null;
  }

  getlogin() {
    return JSON.parse(localStorage.getItem('usuario') ?? '');
  }

  checkCredentials() {
    return localStorage.getItem('access_token') != null;
  }

  getCredentials() {
    return localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('usuario');
  }

}

class TokenResponse {
  access_token: string;
  expires_in: number;
  Token_Type: string;
}
export class Login {
  Nome: string;
  Conselho: string;
  constructor(obj: Partial<Login> = {}) {
    Object.assign(this, obj);
  }

}




