import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URLBASE, getHeaders } from '../base/services.base';
import { Observable } from 'rxjs';
import { LoginDTO } from '../model/LoginDTO';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private url: string = URLBASE+'auth/'
  constructor(private http: HttpClient) { }

  login(user: string, password: string): Observable<any> {
    return this.http.post(this.url+'login', new LoginDTO({
      Username: user,
      Password: password
    }),
      getHeaders()
    )

  }
}
